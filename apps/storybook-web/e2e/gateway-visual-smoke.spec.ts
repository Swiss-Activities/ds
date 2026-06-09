import { expect, test, type Page, type TestInfo } from "@playwright/test";
import {
  gatewayActivityTypeFixture,
  gatewayHomeFixture,
} from "../../../packages/data/src/test/fixtures/gatewayContractFixtures";
import type { TGatewayHome } from "../../../packages/data/src/gateway/types";

const STORY_URL = "/iframe.html?id=playgrounds-gateway--default&viewMode=story";

async function renderGatewayFixture(page: Page, fixture: TGatewayHome) {
  await page.route(
    "https://www.swissactivities.com/api/gateway/home?**",
    async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        headers: {
          "access-control-allow-origin": "*",
        },
        body: JSON.stringify(fixture),
      });
    }
  );

  await page.goto(STORY_URL);
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        scroll-behavior: auto !important;
      }
    `,
  });
  await page.getByRole("button", { name: "Fetch" }).click();
}

async function attachViewportScreenshot(
  page: Page,
  testInfo: TestInfo,
  name: string
) {
  const screenshot = await page.screenshot({
    animations: "disabled",
    fullPage: false,
  });

  expect(screenshot.byteLength).toBeGreaterThan(10_000);
  await testInfo.attach(name, {
    body: screenshot,
    contentType: "image/png",
  });
}

test.describe("Gateway visual smoke", () => {
  test("renders the home gateway surface on desktop", async (
    { page },
    testInfo
  ) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await renderGatewayFixture(page, gatewayHomeFixture);

    await expect(page.getByText("Hi aus der Schweiz")).toBeVisible();
    await expect(
      page.getByText("Was die Schweiz diese Woche bucht")
    ).toBeVisible();

    const heroBox = await page.getByText("Hi aus der Schweiz").boundingBox();
    const cardImageBox = await page
      .locator('img[alt="Paragliding Grindelwald ab First"]')
      .first()
      .boundingBox();

    expect(heroBox?.width).toBeGreaterThan(200);
    expect(cardImageBox?.height).toBeGreaterThan(120);

    await attachViewportScreenshot(page, testInfo, "gateway-home-desktop");
  });

  test("renders the activity grid gateway surface on mobile", async (
    { page },
    testInfo
  ) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await renderGatewayFixture(page, gatewayActivityTypeFixture);

    await expect(page.getByText("Paragliding").first()).toBeVisible();
    await expect(
      page.getByText("Paragliding Grindelwald ab First").first()
    ).toBeVisible();

    const filterBox = await page
      .getByRole("button", { name: /Filter/ })
      .first()
      .boundingBox();
    const cardImageBox = await page
      .locator('img[alt="Paragliding Grindelwald ab First"]')
      .first()
      .boundingBox();

    expect(filterBox?.width).toBeGreaterThan(70);
    expect(cardImageBox?.height).toBeGreaterThan(120);

    await attachViewportScreenshot(page, testInfo, "gateway-activity-mobile");
  });
});
