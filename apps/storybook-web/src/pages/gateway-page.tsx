import {
  WebsiteGatewayPageContent,
  type AppGatewayContext,
  type WebsiteGatewayPage,
} from "@swiss-activities/data";

export type GatewayPageStoryArgs = {
  locale: string;
  page: WebsiteGatewayPage;
  /** Dynamic grids + weather covered by one skeleton overlay each — the
   * state the web renderer ships as static markup while data refreshes. */
  refreshing?: boolean;
};

export const gatewayPageContext: AppGatewayContext = {
  country: "CH",
  lat: null,
  lng: null,
  locale: "de_CH",
};

export function GatewayPage({ locale, page, refreshing }: GatewayPageStoryArgs) {
  const resolvedPage =
    "context" in page || page.type === "not-found"
      ? page.type === "not-found"
        ? page
        : { ...page, context: page.context ?? gatewayPageContext }
      : page;
  return (
    <main className="min-h-screen bg-white lg:pt-8">
      <WebsiteGatewayPageContent locale={locale} refreshing={refreshing} page={resolvedPage} />
    </main>
  );
}
