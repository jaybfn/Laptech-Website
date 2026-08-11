import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 120;

const OUT = path.join(process.cwd(), "public/downloads/LAPTECH-Solutions.pdf");
const SCRIPT = path.join(process.cwd(), "scripts/capture_solutions_pdf.mjs");

let generating: Promise<void> | null = null;

function resolveBaseUrl(request: Request) {
  const envBase = process.env.PDF_BASE_URL;
  if (envBase) return envBase.replace(/\/$/, "");

  const host = request.headers.get("x-forwarded-host") || request.headers.get("host");
  const proto = request.headers.get("x-forwarded-proto") || "http";
  if (host) {
    // Prefer loopback to avoid hairpin/NAT issues while generating
    const port = host.includes(":") ? host.split(":").pop() : "";
    if (port) return `http://127.0.0.1:${port}`;
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

export async function GET(request: Request) {
  try {
    const baseUrl = resolveBaseUrl(request);
    await ensureFreshPdf(baseUrl);

    if (!fs.existsSync(OUT)) {
      return NextResponse.json(
        { error: "PDF was not created." },
        { status: 500 }
      );
    }

    const bytes = fs.readFileSync(OUT);
    return new NextResponse(bytes, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="LAPTECH-Solutions.pdf"',
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "PDF failed";
    console.error("[solutions-pdf]", message);
    // Fall back to last generated file if available
    if (fs.existsSync(OUT)) {
      const bytes = fs.readFileSync(OUT);
      return new NextResponse(bytes, {
        status: 200,
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition":
            'attachment; filename="LAPTECH-Solutions.pdf"',
          "Cache-Control": "no-store",
          "X-PDF-Warning": "Served cached PDF after regenerate error",
        },
      });
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
