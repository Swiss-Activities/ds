import { SectionBlogDetail, type ActivityItem } from "@swiss-activities/ui";
import { toGatewayActivityItemData } from "../adapters/gatewayActivityItem";
import { fromLabel, gatewayLabels, priceLabel } from "./labels";
import type { TGatewayBlogPostDetail } from "../gateway/types";
import {
  ListingContentParts,
  splitListingContent,
  anchorIdForTitle,
  type ListingContentPart,
} from "./listing-content";

/**
 * Blog-post detail (`/travel-guide/{category}/{slug}/`, itineraries pages) —
 * maps the gateway payload onto SectionBlogDetail. The gateway's `overview`
 * has carried two shapes: `{ body, title }` (rendered HTML from the Redis
 * read model — current, PR #163) and the raw website-data-api envelope with
 * `listing.content_blocks` (what the legacy homepage view still parses; that
 * mismatch is why it rendered empty articles). Both are handled here so any
 * consumer of this component shows the article either way.
 */

interface RawLegacyBlock {
  heading?: string | null;
  text?: string | null;
  pictures?: Array<{ url?: string | null; alternativeText?: string | null; caption?: string | null }> | null;
  youtube_url?: string | null;
}

function legacyBlocks(overview: Record<string, unknown>): RawLegacyBlock[] | null {
  const listing = overview["listing"];
  if (!listing || typeof listing !== "object") return null;
  const blocks = (listing as { content_blocks?: unknown }).content_blocks;
  return Array.isArray(blocks) ? (blocks as RawLegacyBlock[]) : null;
}

interface MappedContent {
  lead: ListingContentPart[] | null;
  items: Array<{ id: string; title: string; content: React.ReactNode }>;
}

function contentFromBody(body: string): MappedContent {
  const sections = splitListingContent([{ html: body, images: [], youtubeUrl: null }]);
  const lead = sections[0]?.title === null ? sections[0].parts : null;
  const seen = new Set<string>();
  const items = sections
    .filter((section): section is (typeof sections)[number] & { title: string } => Boolean(section.title))
    .map((section, index) => {
      let id = anchorIdForTitle(section.title, index);
      while (seen.has(id)) id = `${id}-${index}`;
      seen.add(id);
      return { id, title: section.title, content: <ListingContentParts parts={section.parts} /> };
    });
  return { lead, items };
}

function contentFromLegacyBlocks(blocks: RawLegacyBlock[]): MappedContent {
  const gatewayBlocks = blocks.map((block) => ({
    html: block.heading
      ? `<h2>${block.heading}</h2>\n${block.text ?? ""}`
      : (block.text ?? null),
    images: (block.pictures ?? []).flatMap((picture) =>
      picture?.url
        ? [{ url: picture.url, caption: picture.caption ?? null, alt: picture.alternativeText ?? null }]
        : []
    ),
    youtubeUrl: block.youtube_url ?? null,
  }));
  const sections = splitListingContent(gatewayBlocks);
  const lead = sections[0]?.title === null ? sections[0].parts : null;
  const seen = new Set<string>();
  const items = sections
    .filter((section): section is (typeof sections)[number] & { title: string } => Boolean(section.title))
    .map((section, index) => {
      let id = anchorIdForTitle(section.title, index);
      while (seen.has(id)) id = `${id}-${index}`;
      seen.add(id);
      return { id, title: section.title, content: <ListingContentParts parts={section.parts} /> };
    });
  return { lead, items };
}

const toRelatedActivityItem = (
  item: TGatewayBlogPostDetail["relatedActivities"][number],
  locale: string
): ActivityItem => {
  const itemData = toGatewayActivityItemData(item, { locale, labels: gatewayLabels, priceLabel, fromLabel });
  const href = itemData.path;
  return {
    ...itemData,
    type: itemData.type,
    render: href
      ? ({ className, children }) => (
          <a href={href} className={className}>
            {children}
          </a>
        )
      : undefined,
  };
};

export function WebsiteGatewayBlogPostDetail({
  detail,
  locale,
  relatedActivitiesTitle = "Passende Aktivitäten",
  contentTocTitle = "Inhaltsverzeichnis",
}: {
  detail: TGatewayBlogPostDetail;
  locale: string;
  relatedActivitiesTitle?: string;
  contentTocTitle?: string;
}) {
  const overview = (detail.overview ?? {}) as Record<string, unknown>;
  const body = typeof overview["body"] === "string" ? overview["body"] : null;
  const legacy = body ? null : legacyBlocks(overview);
  const { lead, items } = body
    ? contentFromBody(body)
    : legacy
      ? contentFromLegacyBlocks(legacy)
      : { lead: null, items: [] };

  return (
    <SectionBlogDetail
      title={detail.title}
      image={detail.imageUrl ? { src: detail.imageUrl, alt: detail.title } : null}
      contentLead={lead ? <ListingContentParts parts={lead} /> : undefined}
      contentItems={items}
      contentTocTitle={contentTocTitle}
      relatedActivitiesTitle={relatedActivitiesTitle}
      relatedActivities={(detail.relatedActivities ?? []).map((item) =>
        toRelatedActivityItem(item, locale)
      )}
    />
  );
}
