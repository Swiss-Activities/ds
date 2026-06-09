import type { AppGatewayContext, TGatewayHome } from "@swiss-activities/data";
import { GatewayPlaygroundRenderer } from "../playgrounds/gateway-renderer";

export type GatewayPageStoryArgs = {
  data: TGatewayHome;
  locale: string;
};

export const gatewayPageContext: AppGatewayContext = {
  country: "CH",
  lat: null,
  lng: null,
  locale: "de_CH",
};

export function GatewayPage({ data, locale }: GatewayPageStoryArgs) {
  return (
    <main className="min-h-screen bg-white lg:pt-8">
      <GatewayPlaygroundRenderer
        data={data}
        context={gatewayPageContext}
        locale={locale}
      />
    </main>
  );
}
