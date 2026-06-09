import {
  WebsiteGatewayPageContent,
  type AppGatewayContext,
  type WebsiteGatewayPage,
} from "@swiss-activities/data";

export type GatewayPageStoryArgs = {
  locale: string;
  page: WebsiteGatewayPage;
};

export const gatewayPageContext: AppGatewayContext = {
  country: "CH",
  lat: null,
  lng: null,
  locale: "de_CH",
};

export function GatewayPage({ locale, page }: GatewayPageStoryArgs) {
  return (
    <main className="min-h-screen bg-white lg:pt-8">
      <WebsiteGatewayPageContent
        locale={locale}
        page={{
          ...page,
          context: page.context ?? gatewayPageContext,
        }}
      />
    </main>
  );
}
