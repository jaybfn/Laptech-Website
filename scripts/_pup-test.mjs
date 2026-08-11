import puppeteer from "puppeteer-core";
console.log("launching...");
const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome",
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});
console.log("launched");
const page = await browser.newPage();
console.log("page");
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
page.setDefaultTimeout(20000);
console.log("goto...");
await page.goto("http://127.0.0.1:3001/", { waitUntil: "load", timeout: 20000 });
console.log("loaded", await page.title());
await page.waitForSelector("#services", { timeout: 10000 });
console.log("found services");
const el = await page.$("#services");
await el.screenshot({ path: "scripts/.pdf-captures/services-test.png" });
console.log("screenshot ok");
await browser.close();
console.log("done");
