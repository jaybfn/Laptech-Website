/**
 * Capture brochure sheets → one standard landscape PDF page each.
 *
 * Usage: node scripts/capture_solutions_pdf.mjs [baseUrl]
 */
import puppeteer from "puppeteer-core";
import { PDFDocument, rgb } from "pdf-lib";
import fs from "fs";
import path from "path";

const OUT = "public/downloads/LAPTECH-Solutions.pdf";
const TMP = "scripts/.pdf-captures";
const BASE = process.argv[2] || "http://127.0.0.1:3001";

/** A4 landscape — clear individual pages in viewers/print */
const PAGE = { w: 841.89, h: 595.28 };
const MARGIN = 18;
const NAVY = rgb(10 / 255, 21 / 255, 40 / 255);

fs.mkdirSync(TMP, { recursive: true });
for (const file of fs.readdirSync(TMP)) {
  fs.unlinkSync(path.join(TMP, file));
}

const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome",
  headless: "new",
  protocolTimeout: 180000,
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--hide-scrollbars"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 1 });
page.setDefaultNavigationTimeout(60000);

console.log("Opening brochure…");
await page.goto(`${BASE}/brochure/solutions`, { waitUntil: "load" });
await page.waitForSelector("[data-pdf-sheet='about']", { timeout: 30000 });
await page.addStyleTag({
  content: `header,footer{display:none!important}`,
});
await new Promise((r) => setTimeout(r, 2500));

const ids = await page.$$eval("[data-pdf-sheet]", (els) =>
  els.map((el) => el.getAttribute("data-pdf-sheet"))
);
console.log(`Found ${ids.length} sheets:`, ids.join(", "));

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
  console.log(`Captured ${i + 1}/${ids.length}: ${id}`);
}

await browser.close();

const pdf = await PDFDocument.create();
pdf.setTitle("LAPTECH Solutions Brochure");
pdf.setAuthor("LAPTECH");

const usableW = PAGE.w - MARGIN * 2;
const usableH = PAGE.h - MARGIN * 2;

for (let i = 0; i < pngBuffers.length; i++) {
  const image = await pdf.embedPng(pngBuffers[i]);
  const pdfPage = pdf.addPage([PAGE.w, PAGE.h]);

  // Full page background so each sheet reads as its own page
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

  // Page indicator (helps browsers/print show discrete pages)
  pdfPage.drawText(`${i + 1} / ${pngBuffers.length}`, {
    x: PAGE.w - MARGIN - 40,
    y: 8,
    size: 8,
    color: rgb(0.55, 0.62, 0.7),
  });
}

const bytes = await pdf.save();
fs.writeFileSync(OUT, bytes);
console.log(
  `Wrote ${OUT} (${Math.round(bytes.length / 1024)} KB, ${pngBuffers.length} pages, A4 landscape)`
);
