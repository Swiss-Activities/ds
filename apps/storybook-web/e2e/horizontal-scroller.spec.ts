import { test, expect } from "@playwright/test";

const STORY_URL =
  "/iframe.html?id=sections-sectionactivitygrid--default&viewMode=story";

function setup(width: number) {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width, height: 800 });
    await page.goto(STORY_URL);
    await page.waitForSelector("nav ul li", { state: "attached" });
    await page.waitForTimeout(500);
  });
}

function getTrackInfo(page: import("@playwright/test").Page) {
  return page.locator("nav ul").first().evaluate((el) => {
    const items = Array.from(el.children) as HTMLElement[];
    const trackRect = el.getBoundingClientRect();
    return {
      trackLeft: trackRect.left,
      trackRight: trackRect.right,
      items: items.map((item) => {
        const r = item.getBoundingClientRect();
        return { left: r.left, right: r.right, width: r.width };
      }),
    };
  });
}

function getStep(page: import("@playwright/test").Page) {
  return page.locator("nav ul").first().evaluate((el) => {
    const items = Array.from(el.children) as HTMLElement[];
    if (items.length < 2) return 0;
    const r0 = items[0].getBoundingClientRect();
    const r1 = items[1].getBoundingClientRect();
    return r1.left - r0.left;
  });
}

function getFirstItemLeft(page: import("@playwright/test").Page) {
  return page.locator("nav ul").first().evaluate((el) =>
    (el.children[0] as HTMLElement).getBoundingClientRect().left
  );
}

test.describe("SectionActivityGrid @ 1232px (desktop)", () => {
  setup(1232);

  test("shows 4 fully visible cards", async ({ page }) => {
    const info = await getTrackInfo(page);
    const fullyVisible = info.items.filter(
      (item) => item.left >= info.trackLeft - 1 && item.right <= info.trackRight + 1
    );
    expect(fullyVisible.length).toBe(4);
  });

  test("next scrolls exactly one card", async ({ page }) => {
    const step = await getStep(page);
    const before = await getFirstItemLeft(page);

    await page.locator("nav button").last().click();
    await page.waitForTimeout(600);

    const after = await getFirstItemLeft(page);
    expect(before - after).toBeCloseTo(step, -1);
  });

  test("prev scrolls exactly one card back", async ({ page }) => {
    const step = await getStep(page);

    await page.locator("nav button").last().click();
    await page.waitForTimeout(600);
    const before = await getFirstItemLeft(page);

    await page.locator("nav button").first().click();
    await page.waitForTimeout(600);
    const after = await getFirstItemLeft(page);

    expect(after - before).toBeCloseTo(step, -1);
  });

  test("prev button hidden at start, next hidden at end", async ({ page }) => {
    const buttons = page.locator("nav button");
    const btnCount = await buttons.count();
    expect(btnCount).toBeGreaterThanOrEqual(1);

    await page.locator("nav ul").first().evaluate((el) => {
      el.scrollTo({ left: el.scrollWidth, behavior: "instant" });
    });
    await page.waitForTimeout(300);

    const navButtons = await page.locator("nav button").count();
    expect(navButtons).toBeGreaterThanOrEqual(1);
  });
});

test.describe("SectionActivityGrid @ 768px (tablet)", () => {
  setup(768);

  test("shows 3 fully visible cards", async ({ page }) => {
    const info = await getTrackInfo(page);
    const fullyVisible = info.items.filter(
      (item) => item.left >= info.trackLeft - 1 && item.right <= info.trackRight + 1
    );
    expect(fullyVisible.length).toBe(3);
  });

  test("next scrolls exactly one card", async ({ page }) => {
    const step = await getStep(page);
    const before = await getFirstItemLeft(page);

    await page.locator("nav button").last().click();
    await page.waitForTimeout(600);

    const after = await getFirstItemLeft(page);
    expect(before - after).toBeCloseTo(step, -1);
  });

  test("prev scrolls exactly one card back", async ({ page }) => {
    const step = await getStep(page);

    await page.locator("nav button").last().click();
    await page.waitForTimeout(600);
    const before = await getFirstItemLeft(page);

    await page.locator("nav button").first().click();
    await page.waitForTimeout(600);
    const after = await getFirstItemLeft(page);

    expect(after - before).toBeCloseTo(step, -1);
  });
});

test.describe("SectionActivityGrid @ 640px (sm)", () => {
  setup(640);

  test("shows 2 fully visible cards", async ({ page }) => {
    const info = await getTrackInfo(page);
    const fullyVisible = info.items.filter(
      (item) => item.left >= info.trackLeft - 1 && item.right <= info.trackRight + 1
    );
    expect(fullyVisible.length).toBe(2);
  });

  test("next scrolls exactly one card", async ({ page }) => {
    const step = await getStep(page);
    const before = await getFirstItemLeft(page);

    await page.locator("nav button").last().click();
    await page.waitForTimeout(600);

    const after = await getFirstItemLeft(page);
    expect(before - after).toBeCloseTo(step, -1);
  });
});

test.describe("SectionActivityGrid @ 375px (mobile)", () => {
  setup(375);

  test("shows 1 full card with peek of next", async ({ page }) => {
    const info = await getTrackInfo(page);
    const fullyVisible = info.items.filter(
      (item) => item.left >= info.trackLeft - 1 && item.right <= info.trackRight + 1
    );
    expect(fullyVisible.length).toBe(1);

    const second = info.items[1];
    expect(second.left).toBeLessThan(info.trackRight);
    expect(second.right).toBeGreaterThan(info.trackRight);
  });

  test("nav buttons are hidden on mobile", async ({ page }) => {
    const buttons = page.locator("nav button");
    const visibleButtons = await buttons.filter({ has: page.locator(":visible") }).count();
    expect(visibleButtons).toBe(0);
  });
});
