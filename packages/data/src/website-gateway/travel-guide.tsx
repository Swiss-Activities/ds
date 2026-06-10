import type { ReactNode } from "react";
import { Text } from "@swiss-activities/ui";
import type { TGatewayBlogOverview, TGatewayBlogOverviewPost } from "../gateway/types";

/**
 * Travel-guide overview pages — the legacy travelGuide/travelRoutes templates:
 * `/travel-guide/` (+ categories): heading, intro, category pills, image-tile
 * post grid with a featured 2x2 tile every 8th card; the hoisted itineraries
 * overview (`/reiserouten-schweiz/`): posts bucketed per trip duration as
 * horizontal teaser cards. German label defaults, overridable via props.
 */

export interface WebsiteGatewayTravelGuideLabels {
  /** Root overview h1 (legacy `pages.travelGuide.title`). */
  title?: string;
  /** Root overview intro (legacy `pages.travelGuide.intro`). */
  intro?: string;
  filter?: string;
  /** Section heading per trip duration; null hides it (e.g. when durationContent carries its own). */
  durationTitle?: ((days: number) => string) | null;
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

function FeaturedTile({ post }: { post: TGatewayBlogOverviewPost }) {
  return (
    <a
      href={post.path}
      className="group relative col-span-2 row-span-2 block overflow-hidden rounded-lg bg-gray-100"
    >
      <img
        src={post.imageUrl}
        alt={post.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-200 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <span className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white">
        {post.title}
      </span>
    </a>
  );
}

function PostTile({ post }: { post: TGatewayBlogOverviewPost }) {
  return (
    <a href={post.path} className="group block">
      <span className="block aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
        <img
          src={post.imageUrl}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-200 group-hover:scale-105"
        />
      </span>
      <Text as="span" size="default" className="mt-2 block">
        {post.title}
      </Text>
    </a>
  );
}

function ItineraryCard({ post }: { post: TGatewayBlogOverviewPost }) {
  return (
    <a
      href={post.path}
      className="group grid grid-cols-[200px_minmax(0,1fr)] gap-4 overflow-hidden rounded-lg border border-solid border-gray-200"
    >
      <span className="block h-full min-h-[120px] overflow-hidden bg-gray-100">
        <img
          src={post.imageUrl}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-200 group-hover:scale-105"
        />
      </span>
      <span className="flex flex-col gap-1 py-3 pr-4">
        <Text as="span" size="default">
          {post.title}
        </Text>
        {post.description ? (
          <Text as="span" size="sm" className="line-clamp-3">
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
  const heading = context.category?.title ?? labels.title;
  const intro = context.category?.description ?? labels.intro;

  return (
    <div className="flex flex-col gap-8">
      {hideHeader ? (
        introContent ?? null
      ) : (
      <header className="flex flex-col gap-4">
        <Text as="h1" size="2xl">
          {heading}
        </Text>
        {context.category && !context.itineraries ? (
          <Text as="p" size="sm" className="text-gray-500">
            {labels.title}
          </Text>
        ) : null}
        {introContent ??
          (intro ? (
            <Text as="p" size="sm" className="lg:columns-2 lg:gap-8">
              {intro}
            </Text>
          ) : null)}
      </header>
      )}

      {!context.itineraries && categories.length > 0 ? (
        <nav className="flex flex-wrap items-center gap-2" aria-label={labels.filter}>
          <Text as="span" size="sm" bold className="mr-1">
            {labels.filter}
          </Text>
          {categories.map((category) => {
            const selected = context.category?.slug === category.slug;
            return (
              <a
                key={category.slug}
                href={`${prefix}/travel-guide/${category.slug}/`}
                className={
                  selected
                    ? "rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white"
                    : "rounded-full border border-solid border-gray-300 px-4 py-1.5 text-sm font-medium text-black hover:border-gray-500"
                }
              >
                {category.title}
              </a>
            );
          })}
        </nav>
      ) : null}

      {context.itineraries && durations?.length ? (
        <div className="flex flex-col gap-10">
          {durations.map(({ days, posts: bucket }) => (
            <section key={days} className="flex flex-col gap-4">
              {labels.durationTitle ? (
                <Text as="h2" size="lg">
                  {labels.durationTitle(days)}
                </Text>
              ) : null}
              {durationContent?.(days) ?? null}
              <div className="grid gap-4 lg:grid-cols-2">
                {bucket.map((post) => (
                  <ItineraryCard key={post.id} post={post} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, index) =>
            index % 8 === 0 ? (
              <FeaturedTile key={post.id} post={post} />
            ) : (
              <PostTile key={post.id} post={post} />
            )
          )}
        </div>
      )}
    </div>
  );
}
