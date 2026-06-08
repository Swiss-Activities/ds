import { expect, test } from "@playwright/test";

const STORY_URL = "/iframe.html?id=playgrounds-gateway--default&viewMode=story";

const gatewayFixture = {
  sections: [
    {
      id: "hero",
      component: "hero",
      text: "Gateway smoke hero",
      destination: null,
      forecast: {
        title: "Zürich",
        data: [
          {
            date: "2026-06-08",
            day: "Heute",
            dayFull: "Heute",
            tempMin: 12,
            tempMax: 24,
            icon: "sunny",
            description: "Sonnig",
          },
        ],
      },
      weather: "sunny",
      weatherLabel: "Sonnig",
      timeOfDay: "morning",
      timeOfDayLabel: "Morgen",
    },
    {
      id: "popular",
      component: "carousel",
      title: "Popular",
      data: [
        {
          id: "activity-1",
          type: "activity",
          title: "Paragliding smoke card",
          imageUrl: "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/teaser_4d4fcf80f5.jpg",
          subtitle: "Interlaken",
          priceFormatted: "CHF 190",
          rating: 4.8,
          reviewCount: 12,
          path: "/paragliding/",
        },
      ],
    },
  ],
};

test.describe("Gateway playground", () => {
  test("renders fetched gateway data with the shared renderer", async ({
    page,
  }) => {
    await page.route("https://www.swissactivities.com/api/gateway/home?**", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        headers: {
          "access-control-allow-origin": "*",
        },
        body: JSON.stringify(gatewayFixture),
      });
    });

    await page.goto(STORY_URL);
    await page.getByRole("button", { name: "Fetch" }).click();

    await expect(page.getByText("2 sections returned")).toBeVisible();
    await expect(page.getByText("Gateway smoke hero")).toBeVisible();
    await expect(page.getByText("Paragliding smoke card")).toBeVisible();
    await expect(page.getByText("No QueryClient set")).toHaveCount(0);
  });
});
