import { test, expect } from "@playwright/test";

const STORY_URL =
  "/iframe.html?id=components-slider--many-slides&viewMode=story";

test.describe("Slider", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 800, height: 600 });
    await page.goto(STORY_URL);
    await page.waitForSelector("img", { state: "visible" });
    await page.waitForTimeout(300);
  });

  function slider(page: import("@playwright/test").Page) {
    return page.locator(".group").first();
  }

  function track(page: import("@playwright/test").Page) {
    return slider(page).locator(".no-scrollbar").first();
  }

  function counter(page: import("@playwright/test").Page) {
    return slider(page).locator("span").filter({ hasText: /\d+\/\d+/ });
  }

  function navButtons(page: import("@playwright/test").Page) {
    return slider(page).locator("button");
  }

  test("starts at slide 1", async ({ page }) => {
    await expect(counter(page)).toHaveText("1/12");
  });

  test("next button advances one slide", async ({ page }) => {
    const t = track(page);
    const scrollBefore = await t.evaluate((el) => el.scrollLeft);

    await navButtons(page).last().click();
    await page.waitForTimeout(500);

    const scrollAfter = await t.evaluate((el) => el.scrollLeft);
    const width = await t.evaluate((el) => el.clientWidth);

    expect(scrollAfter - scrollBefore).toBeCloseTo(width, -1);
    await expect(counter(page)).toHaveText("2/12");
  });

  test("prev button goes back one slide", async ({ page }) => {
    await navButtons(page).last().click();
    await page.waitForTimeout(500);
    await expect(counter(page)).toHaveText("2/12");

    await navButtons(page).first().click();
    await page.waitForTimeout(500);
    await expect(counter(page)).toHaveText("1/12");
  });

  test("prev button hidden on first slide", async ({ page }) => {
    const count = await navButtons(page).count();
    expect(count).toBe(1);
  });

  test("next button hidden on last slide", async ({ page }) => {
    const t = track(page);
    await t.evaluate((el) => {
      el.scrollTo({ left: el.scrollWidth, behavior: "instant" });
    });
    await page.waitForTimeout(300);

    await expect(counter(page)).toHaveText("12/12");
    const count = await navButtons(page).count();
    expect(count).toBe(1);
  });

  test("programmatic scroll updates counter", async ({ page }) => {
    const t = track(page);
    const width = await t.evaluate((el) => el.clientWidth);

    await t.evaluate((el, w) => {
      el.scrollTo({ left: w * 4, behavior: "instant" });
    }, width);
    await page.waitForTimeout(300);

    await expect(counter(page)).toHaveText("5/12");
  });

  test("counter hidden for single slide", async ({ page }) => {
    await page.goto(
      "/iframe.html?id=components-slider--single-slide&viewMode=story"
    );
    await page.waitForSelector("img", { state: "visible" });
    await page.waitForTimeout(300);

    await expect(counter(page)).toHaveCount(0);
  });

  test("nav buttons hidden on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 600 });
    await page.goto(STORY_URL);
    await page.waitForSelector("img", { state: "visible" });
    await page.waitForTimeout(300);

    const buttons = navButtons(page);
    const count = await buttons.count();
    for (let i = 0; i < count; i++) {
      await expect(buttons.nth(i)).not.toBeVisible();
    }
  });
});
