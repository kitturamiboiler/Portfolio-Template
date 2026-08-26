import { chromium } from "/Users/chosun-nhn13/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs";
import { dirname, join } from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const output = join(root, "output/pdf");
const baseUrl = process.env.PORTFOLIO_URL || "http://localhost:4173";
const browser = await chromium.launch({ headless: true });

try {
  const resume = await browser.newPage();
  await resume.goto(pathToFileURL(join(root, "tmp/pdfs/resume.html")).href, { waitUntil: "networkidle" });
  await resume.emulateMedia({ media: "print", colorScheme: "light" });
  await resume.evaluate(() => document.fonts.ready);
  await resume.pdf({
    path: join(output, "m00n-resume.pdf"),
    printBackground: true,
    preferCSSPageSize: true,
  });

  const portfolio = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await portfolio.goto(baseUrl, { waitUntil: "networkidle" });
  await portfolio.waitForSelector("#contact");
  await portfolio.evaluate(() => {
    document.querySelectorAll("details").forEach((detail) => {
      detail.open = true;
    });
  });
  await portfolio.emulateMedia({ media: "print", colorScheme: "light" });
  await portfolio.evaluate(() => document.fonts.ready);
  await portfolio.pdf({
    path: join(output, "m00n-portfolio.pdf"),
    format: "A4",
    printBackground: true,
    margin: { top: "11mm", right: "11mm", bottom: "11mm", left: "11mm" },
  });
} finally {
  await browser.close();
}

console.log("Generated m00n-resume.pdf and m00n-portfolio.pdf");
