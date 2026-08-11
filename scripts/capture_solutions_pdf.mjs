/**
 * Shared Solutions brochure PDF generator (screenshot sheets → A4 landscape PDF).
 *
 * CLI:  node scripts/capture_solutions_pdf.mjs [baseUrl]
 * API:  import { generateSolutionsPdf } from "./capture_solutions_pdf.mjs"
 */
import puppeteer from "puppeteer-core";
import { PDFDocument, rgb } from "pdf-lib";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "public/downloads/LAPTECH-Solutions.pdf");
const TMP = path.join(ROOT, "scripts/.pdf-captures");

const PAGE = { w: 841.89, h: 595.28 };
const MARGIN = 18;
const NAVY = rgb(10 / 255, 21 / 255, 40 / 255);

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium-browser",
  "/usr/bin/chromium",
].filter(Boolean);

function findChrome() {
  for (const candidate of CHROME_CANDIDATES) {
    if (fs.existsSync(candidate)) return candidate;
  }
  throw new Error(
    "Chrome/Chromium not found. Install Chrome or set CHROME_PATH."
  );
}

/**
 * Capture /brochure/solutions and build a multi-page PDF.
 * @param {string} baseUrl e.g. http://127.0.0.1:3001
 * @param {{ write?: boolean }} [options]
 * @returns {Promise<Uint8Array>}
 */
export async function generateSolutionsPdf(baseUrl, options = {}) {
  const write = options.write !== false;
  const base = baseUrl.replace(/\/$/, "");

  fs.mkdirSync(TMP, { recursive: true });
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  for (const file of fs.readdirSync(TMP)) {
    fs.unlinkSync(path.join(TMP, file));
  }

  const executablePath = findChrome();
  const browser = await puppeteer.launch({
    executablePath,
    headless: "new",
    protocolTimeout: 180000,
    args: ["--no-sandbox", "--disable-dev-shm-usage", "--hide-scrollbars"],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 1 });
    page.setDefaultNavigationTimeout(60000);

    await page.goto(`${base}/brochure/solutions`, { waitUntil: "load" });
    await page.waitForSelector("[data-pdf-sheet='about']", { timeout: 30000 });
    await page.addStyleTag({
      content: `header,footer{display:none!important}`,
    });
    await new Promise((r) => setTimeout(r, 2500));

    const ids = await page.$$eval("[data-pdf-sheet]", (els) =>
      els.map((el) => el.getAttribute("data-pdf-sheet"))
    );

    const pngBuffers = [];
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      const handle = await page.$(`[data-pdf-sheet="${id}"]`);
      if (!handle) throw new Error(`Missing sheet: ${id}`);
      await handle.scrollIntoViewIfNeeded();
      await new Promise((r) => setTimeout(r, 200));
      const png = await handle.screenshot({ type: "png" });
      fs.writeFileSync(
        path.join(TMP, `${String(i + 1).padStart(2, "0")}-${id}.png`),
        png
      );
      pngBuffers.push(Buffer.from(png));
    }

    const pdf = await PDFDocument.create();
    pdf.setTitle("LAPTECH Solutions Brochure");
    pdf.setAuthor("LAPTECH");

    const usableW = PAGE.w - MARGIN * 2;
    const usableH = PAGE.h - MARGIN * 2;

    for (let i = 0; i < pngBuffers.length; i++) {
      const image = await pdf.embedPng(pngBuffers[i]);
      const pdfPage = pdf.addPage([PAGE.w, PAGE.h]);
      pdfPage.drawRectangle({
        x: 0,
        y: 0,
        width: PAGE.w,
        height: PAGE.h,
        color: NAVY,
      });
      const scale = Math.min(usableW / image.width, usableH / image.height);
      const w = image.width * scale;
      const h = image.height * scale;
      pdfPage.drawImage(image, {
        x: (PAGE.w - w) / 2,
        y: (PAGE.h - h) / 2,
        width: w,
        height: h,
      });
      pdfPage.drawText(`${i + 1} / ${pngBuffers.length}`, {
        x: PAGE.w - MARGIN - 40,
        y: 8,
        size: 8,
        color: rgb(0.55, 0.62, 0.7),
      });
    }

    const bytes = await pdf.save();
    if (write) {
      fs.writeFileSync(OUT, bytes);
    }
    return bytes;
  } finally {
    await browser.close();
  }
}

export const PDF_OUT_PATH = OUT;

// CLI
const isMain =
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMain) {
  const base = process.argv[2] || "http://127.0.0.1:3001";
  console.log("Generating solutions PDF from", base);
  const bytes = await generateSolutionsPdf(base, { write: true });
  console.log(
    `Wrote ${OUT} (${Math.round(bytes.length / 1024)} KB)`
  );
}
