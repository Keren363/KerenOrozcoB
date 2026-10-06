import { chromium } from "@playwright/test";
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 1,
});
await page.goto("http://localhost:4173");
await page.screenshot({ path: "test-results/desktop.png" });
await page.setViewportSize({ width: 390, height: 844 });
await page.screenshot({ path: "test-results/mobile.png", fullPage: true });
await page.screenshot({ path: "test-results/mobile-hero.png" });
await page.locator('#projects').scrollIntoViewIfNeeded();
await page.waitForTimeout(500);
await page.screenshot({ path: "test-results/mobile-projects.png" });
await browser.close();
