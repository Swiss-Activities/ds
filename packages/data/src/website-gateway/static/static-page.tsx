import { Text } from "@swiss-activities/ui";
import type { TGatewayStaticPageContent } from "../../gateway/types";
import { WebsiteGatewayLegalPage } from "./legal";
import {
  WebsiteGatewayAboutPage,
  type WebsiteGatewayAboutContent,
  type WebsiteGatewayAboutEmployee,
} from "./about";
import { WebsiteGatewayAppsPage, type WebsiteGatewayAppsContent } from "./apps";
import { WebsiteGatewayAffiliatePage, type WebsiteGatewayAffiliateContent } from "./affiliate";
import { WebsiteGatewaySupplierPage, type WebsiteGatewaySupplierContent } from "./supplier";
import { WebsiteGatewayVouchersPage, type WebsiteGatewayVouchersContent } from "./vouchers";

/**
 * Static one-off pages (`/web/v1/page` envelopes with `data.kind: 'static'`).
 * The legal family renders the gateway-shipped document; the marketing pages
 * (about/supplier/vouchers/affiliate) are full template ports with German
 * default copy, overridable per locale via `staticPages`. Anything else in
 * the registry (apps/transport/widget/lp/cookie-richtlinien) falls back to a
 * generic title + prose-blocks rendering.
 */

export interface WebsiteGatewayStaticPagesContent {
  about?: WebsiteGatewayAboutContent;
  aboutEmployees?: WebsiteGatewayAboutEmployee[];
  apps?: WebsiteGatewayAppsContent;
  affiliate?: WebsiteGatewayAffiliateContent;
  supplier?: WebsiteGatewaySupplierContent;
  vouchers?: WebsiteGatewayVouchersContent;
  /** e-guma shop URL for the vouchers page (locale-dependent). */
  vouchersShopHref?: string;
  /** Localized legal switcher labels by nav id (gateway nav titles are German). */
  legalNavTitles?: Record<string, string>;
}

export function WebsiteGatewayStaticPageContent({
  content,
  staticPages,
}: {
  content: TGatewayStaticPageContent;
  staticPages?: WebsiteGatewayStaticPagesContent;
}) {
  if (content.legal) {
    return <WebsiteGatewayLegalPage content={content} navTitles={staticPages?.legalNavTitles} />;
  }

  switch (content.id) {
    case "ueber-uns":
      return (
        <WebsiteGatewayAboutPage
          {...(staticPages?.about ? { content: staticPages.about } : {})}
          {...(staticPages?.aboutEmployees ? { employees: staticPages.aboutEmployees } : {})}
        />
      );
    case "anbieter":
      return (
        <WebsiteGatewaySupplierPage
          {...(staticPages?.supplier ? { content: staticPages.supplier } : {})}
        />
      );
    case "gutscheine-und-geschenkideen":
      return (
        <WebsiteGatewayVouchersPage
          {...(staticPages?.vouchers ? { content: staticPages.vouchers } : {})}
          {...(staticPages?.vouchersShopHref ? { shopHref: staticPages.vouchersShopHref } : {})}
        />
      );
    case "affiliate":
      return (
        <WebsiteGatewayAffiliatePage
          {...(staticPages?.affiliate ? { content: staticPages.affiliate } : {})}
        />
      );
    case "apps":
      return (
        <WebsiteGatewayAppsPage {...(staticPages?.apps ? { content: staticPages.apps } : {})} />
      );
    default:
      return (
        <div className="flex flex-col gap-6">
          <Text as="h1" size="xl">
            {content.heroTitle}
          </Text>
          {content.blocks.map((block) => (
            <div
              key={block.id}
              className="prose-sa max-w-none"
              dangerouslySetInnerHTML={{ __html: block.content }}
            />
          ))}
        </div>
      );
  }
}
