import Markdown from "react-markdown";
import { splitColumnMarkdown } from "./travel-guide";

/** Absolute legacy links in the repo markdown become same-origin paths. */
function relativeHref(href: string): string {
  return href.replace(/^https:\/\/www\.swissactivities\.com(?=\/)/, "");
}

/**
 * The react-markdown rendering of the routes editorial columns — its own
 * module so the markdown stack (~12% of the client bundle) only ships to
 * pages that render editorial content; `TravelGuideColumnContent` loads it
 * lazily in the browser and synchronously during SSR.
 */
export default function TravelGuideMarkdownColumns({ markdown }: { markdown: string }) {
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
