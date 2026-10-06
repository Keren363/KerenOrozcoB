import { test, expect } from "@playwright/test";
test("all project routes load directly, images resolve and console is clean", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  for (const slug of [
    "krea-one",
    "ai-video-editor",
    "forge",
    "naia",
    "quality-automation",
  ]) {
    await page.goto("/projects/" + slug);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.getByText("Screenshots & mobile view")).toBeVisible();
    for (const img of await page.locator("img").all()) {
      await img.scrollIntoViewIfNeeded();
      await expect(img).toHaveJSProperty("complete", true);
      expect(
        await img.evaluate((el: HTMLImageElement) => el.naturalWidth),
      ).toBeGreaterThan(0);
      expect(await img.getAttribute("alt")).toBeTruthy();
    }
    await page.reload();
    await expect(page.locator("h1")).toBeVisible();
  }
  expect(errors).toEqual([]);
});
test("responsive widths have no overflow", async ({ page }) => {
  for (const width of [320, 375, 390, 430, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await expect(page.locator("h1")).toContainText("Engineering");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBeTruthy();
    await page.goto("/projects/quality-automation");
    await expect(page.locator("h1")).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBeTruthy();
  }
});
test("mobile navigation closes; language and theme persist", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Toggle menu" });
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Projects", exact: true })
    .click();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(page).toHaveURL(/#projects/);
  await page.getByRole("button", { name: "Switch to Spanish" }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "es");
  await expect(page.locator("h1")).toContainText("Ingeniería");
  await page.getByRole("button", { name: "Cambiar tema de color" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "es");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.getByRole("button", { name: "Abrir o cerrar menú" }).click();
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("button", { name: "Abrir o cerrar menú" }),
  ).toHaveAttribute("aria-expanded", "false");
});
test("no empty links; resume download; keyboard skip link", async ({ page }) => {
  await page.goto("/");
  expect(await page.locator('a[href=""], a[href="#"]').count()).toBe(0);
  await expect(
    page.getByRole("link", { name: "Download Resume" }).first(),
  ).toHaveAttribute("href", "/Keren-Orozco-Resume.pdf");
  const response = await page.request.get('/Keren-Orozco-Resume.pdf');
  expect(response.ok()).toBeTruthy();
  expect((await response.body()).subarray(0, 5).toString()).toBe('%PDF-');
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  await page.goto("/missing");
  await expect(page.locator("h1")).toHaveText("404");
});
