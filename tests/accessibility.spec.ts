import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("home and project meet automated accessibility checks in both themes", async ({
  page,
}) => {
  for (const path of ["/", "/projects/krea-one"]) {
    await page.goto(path);
    for (const theme of ["dark", "light"]) {
      await page.evaluate(
        (t) => (document.documentElement.dataset.theme = t),
        theme,
      );
      await page.waitForTimeout(350);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(
        results.violations.map((v) => ({
          id: v.id,
          description: v.description,
          nodes: v.nodes.map((n) => n.target),
        })),
      ).toEqual([]);
    }
  }
});
