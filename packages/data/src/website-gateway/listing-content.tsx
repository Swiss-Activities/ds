import { ContentBlocks } from "@swiss-activities/ui";
import type { TGatewayListingContentBlock } from "../gateway/types";

// --- listing editorial content -------------------------------------------
// The gateway ships the CAPI listing content as a flat block stream (html /
// image pairs / youtube). The website renders it through the same
// ContentBlocks component as the activity detail: chapters split at <h2>
// boundaries feed the TOC rail; everything before the first <h2> renders as
// a plain intro above it. Image blocks render side by side (legacy
// website/modules/components/Content behaviour).

type ListingContentPart =
  | { kind: "html"; html: string }
  | { kind: "images"; images: TGatewayListingContentBlock["images"] }
  | { kind: "youtube"; url: string };

interface ListingContentSection {
  title: string | null;
  parts: ListingContentPart[];
}

const stripHtmlTags = (html: string): string =>
  html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export const anchorIdForTitle = (title: string, index: number): string => {
  const slug = title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || `abschnitt-${index + 1}`;
};

export function splitListingContent(
  blocks: TGatewayListingContentBlock[],
): ListingContentSection[] {
  const sections: ListingContentSection[] = [{ title: null, parts: [] }];
  const pushHtml = (html: string) => {
    const trimmed = html.trim();
    if (trimmed) {
      sections[sections.length - 1].parts.push({ kind: "html", html: trimmed });
    }
  };

  for (const block of blocks) {
    if (block.html) {
      // New chapter per <h2>; h3+ subheadings stay inside their chapter.
      let cursor = 0;
      for (const match of block.html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)) {
        pushHtml(block.html.slice(cursor, match.index));
        sections.push({ title: stripHtmlTags(match[1] ?? ""), parts: [] });
        cursor = (match.index ?? 0) + match[0].length;
      }
      pushHtml(block.html.slice(cursor));
    }
    if (block.images.length) {
      sections[sections.length - 1].parts.push({
        kind: "images",
        images: block.images,
      });
    }
    if (block.youtubeUrl) {
      sections[sections.length - 1].parts.push({
        kind: "youtube",
        url: block.youtubeUrl,
      });
    }
  }

  return sections.filter((s) => s.parts.length > 0);
}

export const toYouTubeEmbedUrl = (url: string): string | null => {
  const id = /(?:youtu\.be\/|[?&]v=|\/embed\/)([\w-]{6,})/.exec(url)?.[1];
  return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
};

function ListingContentParts({ parts }: { parts: ListingContentPart[] }) {
  return (
    <div className="grid gap-6">
      {parts.map((part, index) => {
        if (part.kind === "html") {
          return (
            <div
              key={index}
              className="prose-sa max-w-none"
              dangerouslySetInnerHTML={{ __html: part.html }}
            />
          );
        }
        if (part.kind === "images") {
          return (
            <div
              key={index}
              className={
                part.images.length > 1
                  ? "grid gap-4 sm:grid-cols-2"
                  : "grid gap-4"
              }
            >
              {part.images.map((image) => (
                <figure key={image.url} className="m-0">
                  <img
                    src={image.url}
                    alt={image.alt ?? ""}
                    loading="lazy"
                    className="h-full max-h-[400px] w-full rounded-lg object-cover"
                  />
                  {image.caption ? (
                    <figcaption className="mt-2 text-sm text-gray-500">
                      {image.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          );
        }
        const embedUrl = toYouTubeEmbedUrl(part.url);
        if (!embedUrl) return null;
        return (
          <div key={index} className="aspect-video overflow-hidden rounded-lg">
            <iframe
              src={embedUrl}
              title="YouTube"
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        );
      })}
    </div>
  );
}

export function WebsiteGatewayListingContent({
  blocks,
}: {
  blocks: TGatewayListingContentBlock[];
}) {
  const sections = splitListingContent(blocks);
  if (sections.length === 0) return null;

  const intro = sections[0].title === null ? sections[0] : null;
  const seen = new Set<string>();
  const items = sections
    .filter((section): section is ListingContentSection & { title: string } =>
      Boolean(section.title),
    )
    .map((section, index) => {
      let id = anchorIdForTitle(section.title, index);
      while (seen.has(id)) id = `${id}-${index}`;
      seen.add(id);
      return {
        id,
        title: section.title,
        content: <ListingContentParts parts={section.parts} />,
      };
    });

  // Without chapters there is nothing for a TOC — render the parts plain.
  if (items.length === 0) {
    return intro ? <ListingContentParts parts={intro.parts} /> : null;
  }

  return (
    <ContentBlocks
      lead={intro ? <ListingContentParts parts={intro.parts} /> : undefined}
      items={items}
      tocTitle="Inhaltsverzeichnis"
    />
  );
}
