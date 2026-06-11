import type { ReactNode } from "react";
import Markdown from "react-markdown";
import { Button, Image, Text, cn } from "@swiss-activities/ui";
import type { TGatewayBlogOverview, TGatewayBlogOverviewPost } from "../gateway/types";

/**
 * Travel-guide overview pages — 1:1 port of the legacy travelGuide/
 * travelRoutes templates (website/modules/pages/travelGuide/index.tsx):
 * `/travel-guide/` (+ categories): h1 + gray category subtitle + two-column
 * intro, category filter pills, dense image-tile grid with a featured 2x2
 * tile every 8th card (lg only, gradient title overlay); the hoisted
 * itineraries overview: per-duration sections with horizontal teaser cards.
 * German label defaults; consumers localize via the labels prop.
 */

export interface WebsiteGatewayTravelGuideLabels {
  /** Root overview h1 (legacy `pages.travelGuide.title`). */
  title?: string;
  /** Root overview intro (legacy `pages.travelGuide.intro`). */
  intro?: string;
  /** Pills row label (legacy `filter.filter`). */
  filter?: string;
  /** Section heading per trip duration; null hides it (e.g. when durationContent carries its own). */
  durationTitle?: ((days: number) => string) | null;
}

/**
 * Editorial content of the itineraries overview as RAW MARKDOWN strings —
 * the consumer ships data (its repo markdown), the DS renders React elements.
 */
export interface WebsiteGatewayTravelGuideRoutesContent {
  /** Replaces the page header (carries its own h1). */
  intro?: string;
  /** Rendered above each duration bucket, keyed by the day count. */
  durations?: Record<string, string>;
}

/**
 * The legacy `Content column` split (website modules/components/Content):
 * the leading heading renders full-width, the body flows in two lg columns.
 * Every routes file is one heading followed by body copy.
 */
export function splitColumnMarkdown(markdown: string): { head: string; body: string } {
  const lines = markdown.split("\n");
  const head: string[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i]!;
    if (/^#{1,6}\s/.test(line)) {
      head.push(line);
      i++;
      continue;
    }
    if (line.trim() === "" && head.length > 0 && /^#{1,6}\s/.test(lines[i + 1] ?? "")) {
      i++;
      continue;
    }
    break;
  }
  return { head: head.join("\n"), body: lines.slice(i).join("\n") };
}

/** The editorial links are absolute production URLs — serve them host-relative. */
function relativeHref(href: string): string {
  return href.replace(/^https:\/\/www\.swissactivities\.com(?=\/)/, "");
}

/** Legacy `Content column` rendering for the routes editorial markdown. */
export function TravelGuideColumnContent({ markdown }: { markdown: string }) {
  const { head, body } = splitColumnMarkdown(markdown);
  return (
    <div className="prose-sa w-full">
      {head ? <Markdown urlTransform={relativeHref}>{head}</Markdown> : null}
      <div className="lg:columns-2 lg:gap-6 [&>p]:!mt-0">
        <Markdown urlTransform={relativeHref}>{body}</Markdown>
      </div>
    </div>
  );
}

const DEFAULT_LABELS: Required<WebsiteGatewayTravelGuideLabels> = {
  title: "Dein Reiseplaner für die Schweiz",
  intro: "",
  filter: "Filter",
  durationTitle: (days) => `${days} Tage in der Schweiz`,
};

/** The locale prefix (`/fr-ch` | ``) of any gateway-shipped path. */
function localePrefix(posts: TGatewayBlogOverviewPost[]): string {
  const first = posts[0]?.path ?? "";
  const segment = first.split("/").filter(Boolean)[0] ?? "";
  return /^[a-z]{2}-[a-z]{2}$/.test(segment) ? `/${segment}` : "";
}

/**
 * Grid tile — legacy card anatomy: image block + title below; the featured
 * tile (every 8th, except a trailing one) spans 2x2 on lg with the title
 * overlaid on a bottom gradient.
 */
function PostTile({ post, big }: { post: TGatewayBlogOverviewPost; big: boolean }) {
  return (
    <a
      href={post.path}
      className={cn("group relative flex h-full flex-col overflow-hidden rounded-lg", {
        "lg:col-span-2 lg:row-span-2 lg:min-h-[300px]": big,
      })}
    >
      <span
        className={cn("relative block h-[150px] w-full overflow-hidden rounded-lg bg-gray-100", {
          "lg:h-full": big,
        })}
      >
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={640}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </span>
      <Text
        size="md2"
        as="span"
        className={cn("mt-2 block pe-6 !text-[15px] group-hover:underline", {
          "lg:absolute lg:bottom-0 lg:z-10 lg:flex lg:h-1/2 lg:w-full lg:items-end lg:bg-gradient-to-t lg:from-black lg:p-6 lg:pe-16 lg:!text-xl lg:!text-white":
            big,
        })}
      >
        {post.title}
      </Text>
    </a>
  );
}

/** Horizontal itineraries card — legacy travelRoutes card anatomy. */
function ItineraryCard({ post }: { post: TGatewayBlogOverviewPost }) {
  return (
    <a
      href={post.path}
      className="relative overflow-hidden rounded-md border border-solid border-gray-200 shadow transition duration-100 ease-in sm:grid sm:grid-cols-[200px_1fr] sm:hover:shadow-md"
    >
      <span className="relative block h-[100px] bg-gray-100 sm:h-full">
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={400}
          sizes="(min-width: 640px) 200px, 100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </span>
      <span className="block p-4 sm:p-6 lg:p-8">
        <Text size="md2" as="span" className="mb-2 block">
          {post.title}
        </Text>
        {post.description ? (
          <Text as="span" className="line-clamp-3">
            {post.description}
          </Text>
        ) : null}
      </span>
    </a>
  );
}

export function WebsiteGatewayTravelGuideOverview({
  data,
  labels: labelOverrides,
  introContent,
  durationContent,
  hideHeader = false,
}: {
  data: TGatewayBlogOverview;
  labels?: WebsiteGatewayTravelGuideLabels;
  /** Rich intro override (the legacy itineraries page renders repo markdown). */
  introContent?: ReactNode;
  /** Extra editorial content rendered above each duration bucket. */
  durationContent?: (days: number) => ReactNode;
  /** Hide the h1/intro header (when introContent ships its own headings). */
  hideHeader?: boolean;
}) {
  const labels = { ...DEFAULT_LABELS, ...labelOverrides };
  const { context, categories, posts, durations } = data;
  const prefix = localePrefix(posts);
  const intro = context.category?.description || labels.intro;
  // The legacy itineraries page replaces the header with its intro markdown,
  // led by the routes title — the gateway ships that as the category tag.
  const heading = (context.itineraries && context.category?.title) || labels.title;

  return (
    <div>
      {hideHeader ? (
        (introContent ?? null)
      ) : (
        <div className="flex flex-col gap-4">
          <div>
            <Text size="xl" as="h1">
              {heading}
            </Text>
            {context.category && !context.itineraries ? (
              <Text size="lg" gray>
                {context.category.title}
              </Text>
            ) : null}
          </div>
          {introContent ??
            (intro ? (
              <Text as="p" className="whitespace-pre-line sm:columns-2 sm:gap-8">
                {intro}
              </Text>
            ) : null)}
        </div>
      )}

      {!context.itineraries && categories.length > 0 ? (
        <div className="mt-4 lg:mt-8">
          <Text size="md2" className="mb-2">
            {labels.filter}
          </Text>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.slug}
                href={`${prefix}/travel-guide/${category.slug}/`}
                type="pill"
                selected={context.category?.slug === category.slug}
              >
                {category.title}
              </Button>
            ))}
          </div>
        </div>
      ) : null}

      {context.itineraries && durations?.length ? (
        <div className="mt-6 flex flex-col gap-10 lg:mt-8">
          {durations.map(({ days, posts: bucket }) => (
            <section key={days}>
              {labels.durationTitle ? (
                <Text as="h2" size="lg" className="mb-4">
                  {labels.durationTitle(days)}
                </Text>
              ) : null}
              {durationContent?.(days) ?? null}
              <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-6">
                {bucket.map((post) => (
                  <ItineraryCard key={post.id} post={post} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="mt-6 grid grid-flow-dense gap-4 sm:grid-cols-2 md:mt-6 md:gap-6 lg:mt-8 lg:grid-cols-4">
          {posts.map((post, index) => (
            <PostTile
              key={post.id}
              post={post}
              big={index % 8 === 0 && index !== posts.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
