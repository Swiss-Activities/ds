import { expect, test } from "@playwright/test";

const AUTO_STORY_URL =
  "/iframe.html?id=components-sheet--auto&viewMode=story";

async function openAutoSheet(page: import("@playwright/test").Page) {
  await page.goto(AUTO_STORY_URL);
  await page.getByRole("button", { name: "Open sheet" }).click();
  await page.waitForSelector(".rounded-t-3xl", { state: "visible" });
  await page.waitForTimeout(300);
}

async function getAutoSheetMetrics(page: import("@playwright/test").Page) {
  return page.evaluate(() => {
    const content = Array.from(document.querySelectorAll("div")).find((node) =>
      node.className.includes("rounded-t-3xl")
    ) as HTMLDivElement | undefined;

    const lastOption = Array.from(document.querySelectorAll("button")).find(
      (node) => node.textContent?.includes("This weekend")
    ) as HTMLButtonElement | undefined;

    if (!content || !lastOption) {
      throw new Error("Auto sheet elements not found");
    }

    const contentRect = content.getBoundingClientRect();
    const lastOptionRect = lastOption.getBoundingClientRect();

    return {
      viewportHeight: window.innerHeight,
      contentHeight: contentRect.height,
      bottomGap: contentRect.bottom - lastOptionRect.bottom,
    };
  });
}

test.describe("Sheet auto", () => {
  test("uses content-driven height instead of scaling with viewport height", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 800, height: 700 });
    await openAutoSheet(page);
    const shortViewport = await getAutoSheetMetrics(page);

    await page.setViewportSize({ width: 800, height: 1200 });
    await openAutoSheet(page);
    const tallViewport = await getAutoSheetMetrics(page);

    expect(Math.abs(tallViewport.contentHeight - shortViewport.contentHeight)).toBeLessThan(24);
  });

  test("keeps the last option near the bottom of the compact sheet", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 800, height: 1200 });
    await openAutoSheet(page);
    const metrics = await getAutoSheetMetrics(page);

    expect(metrics.bottomGap).toBeLessThan(40);
    expect(metrics.contentHeight).toBeLessThan(metrics.viewportHeight * 0.5);
  });
});
