import { Tabs } from "@swiss-activities/ui";
import type { TGatewayStaticPageContent } from "../../gateway/types";

/**
 * Legal pages (`/agb/`, `/agb/b2b/`, `/agb/affiliates/`, `/impressum/`,
 * `/datenschutz/`) — the legacy template is the document rendered in the
 * prose typography plus a switcher between the five legal documents
 * (legacy: a select; here: shadcn-styled tab links per the design decision).
 * The body HTML arrives in the gateway bundle (CAPI `texts` markdown,
 * rendered gateway-side).
 */

export interface WebsiteGatewayLegalNavItem {
  id: string;
  label: string;
  href: string;
}

export function WebsiteGatewayLegalPage({
  content,
  nav,
  navTitles,
}: {
  content: TGatewayStaticPageContent;
  /** Override for the legal family navigation; defaults to the gateway-shipped one. */
  nav?: WebsiteGatewayLegalNavItem[];
  /** Localized labels by nav id — the gateway nav ships paths localized but titles in German. */
  navTitles?: Record<string, string>;
}) {
  const body = content.blocks[0]?.content ?? "";
  const items =
    nav ??
    (content.legalNav ?? []).map((item) => ({
      id: item.id,
      label: navTitles?.[item.id] ?? item.title,
      href: item.path,
    }));
  return (
    <div>
      {items.length > 0 ? (
        <Tabs
          className="mb-8"
          items={items.map((item) => ({
            label: item.label,
            href: item.href,
            active: item.id === content.id,
          }))}
        />
      ) : null}
      <div className="prose-sa max-w-none" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}
