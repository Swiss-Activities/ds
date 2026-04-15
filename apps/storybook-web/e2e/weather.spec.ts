import { expect, test } from "@playwright/test";

const DARK_STORY_URL =
  "/iframe.html?id=components-weather--dark&viewMode=story";

test.describe("Weather", () => {
  test("shows only full visible cards before the next button", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 420, height: 360 });
    await page.goto(DARK_STORY_URL);
    await page.waitForSelector("text=Heute");
    await page.waitForTimeout(300);

    const metrics = await page.evaluate(() => {
      const track = document.querySelector("ul.no-scrollbar");
      const viewport = Array.from(document.querySelectorAll("div")).find((el) =>
        el.className.includes("relative flex-1 overflow-hidden")
      );
      const items = Array.from(
        document.querySelectorAll("ul.no-scrollbar > li")
      ) as HTMLElement[];

      if (!track || !viewport || items.length < 4) {
        throw new Error("Weather story elements not found");
      }

      const viewportRect = viewport.getBoundingClientRect();
      const itemRects = items.slice(0, 4).map((item) => item.getBoundingClientRect());

      return {
        viewportLeft: viewportRect.left,
        viewportRight: viewportRect.right,
        items: itemRects.map((rect) => ({
          left: rect.left,
          right: rect.right,
        })),
      };
    });

    expect(metrics.items[0].left).toBeGreaterThanOrEqual(metrics.viewportLeft - 1);
    expect(metrics.items[2].right).toBeLessThanOrEqual(metrics.viewportRight + 1);
    expect(metrics.items[3].left).toBeGreaterThanOrEqual(metrics.viewportRight - 1);
  });
});
