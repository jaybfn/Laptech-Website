import { spawn } from "child_process";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 120;

const OUT = path.join(process.cwd(), "public/downloads/LAPTECH-Solutions.pdf");
const SCRIPT = path.join(process.cwd(), "scripts/capture_solutions_pdf.mjs");
const FILENAME = "LAPTECH-Solutions.pdf";

let generating: Promise<void> | null = null;

function resolveBaseUrl(request: Request) {
  const envBase = process.env.PDF_BASE_URL;
  if (envBase) return envBase.replace(/\/$/, "");

  const host =
    request.headers.get("x-forwarded-host") || request.headers.get("host");
  const proto = request.headers.get("x-forwarded-proto") || "http";
  if (host) {
    const port = host.includes(":") ? host.split(":").pop() : "";
    if (port && !host.startsWith("laptech") && !host.includes("vercel")) {
      return `http://127.0.0.1:${port}`;
    }
    return `${proto}://${host}`;
  }
  return "http://127.0.0.1:3001";
}

function runCapture(baseUrl: string) {
  return new Promise<void>((resolve, reject) => {
    const child = spawn(process.execPath, [SCRIPT, baseUrl], {
      cwd: process.cwd(),
      env: process.env,
      stdio: ["ignore", "pipe", "pipe"],
    });

    let stderr = "";
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });
    child.stdout.on("data", (chunk) => {
      process.stdout.write(chunk);
    });

    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(stderr || `PDF generation failed (exit ${code})`));
    });
  });
}

async function ensureFreshPdf(baseUrl: string) {
  if (!generating) {
    generating = runCapture(baseUrl).finally(() => {
      generating = null;
    });
  }
  await generating;
}

function pdfResponse(bytes: Buffer, cacheable: boolean) {
  const etag = `"${crypto.createHash("sha1").update(bytes).digest("hex")}"`;
  const body = new Uint8Array(bytes);
  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${FILENAME}"`,
      "Content-Length": String(bytes.length),
      ETag: etag,
      // Cache repeat downloads; regenerate via ?regenerate=1 when content changes
      "Cache-Control": cacheable
        ? "public, max-age=86400, stale-while-revalidate=604800"
        : "no-store",
    },
  });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const forceRegenerate = searchParams.get("regenerate") === "1";
  const hasCached = fs.existsSync(OUT);

  // Fast path: serve committed/static PDF (works on Vercel without Chrome)
  if (hasCached && !forceRegenerate) {
    const bytes = fs.readFileSync(OUT);
    const etag = `"${crypto.createHash("sha1").update(bytes).digest("hex")}"`;
    const ifNoneMatch = request.headers.get("if-none-match");
    if (ifNoneMatch === etag) {
      return new NextResponse(null, {
        status: 304,
        headers: {
          ETag: etag,
          "Cache-Control":
            "public, max-age=86400, stale-while-revalidate=604800",
        },
      });
    }
    return pdfResponse(bytes, true);
  }

  try {
    const baseUrl = resolveBaseUrl(request);
    await ensureFreshPdf(baseUrl);

    if (!fs.existsSync(OUT)) {
      return NextResponse.json(
        { error: "PDF was not created." },
        { status: 500 }
      );
    }

    return pdfResponse(fs.readFileSync(OUT), true);
  } catch (error) {
    const message = error instanceof Error ? error.message : "PDF failed";
    console.error("[solutions-pdf]", message);

    if (fs.existsSync(OUT)) {
      return pdfResponse(fs.readFileSync(OUT), true);
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
