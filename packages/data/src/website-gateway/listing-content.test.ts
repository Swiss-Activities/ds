import { describe, expect, it } from "bun:test";
import {
  anchorIdForTitle,
  splitListingContent,
  toYouTubeEmbedUrl,
} from "./listing-content";

const img = (url: string) => ({ url, caption: null, alt: null });

// Mirrors the real /app/v1/activity-types/paragliding stream: an intro block
// without headings, image-pair blocks between chapters, h2s mid-block, and
// h3 subheadings that must stay inside their chapter.
const BLOCKS = [
  { html: "<p>Intro über Aktivitäten in der Schweiz.</p>", images: [], youtubeUrl: null },
  { html: null, images: [img("https://img/1.jpg"), img("https://img/2.jpg")], youtubeUrl: null },
  {
    html: "<p>Noch Einleitung.</p><h2>Gleitschirmfliegen allgemein</h2><p>Kapitel eins.</p>",
    images: [],
    youtubeUrl: null,
  },
  { html: null, images: [img("https://img/3.jpg"), img("https://img/4.jpg")], youtubeUrl: null },
  { html: "<h3>Gleitschirmfliegen lernen</h3><p>Unterkapitel.</p>", images: [], youtubeUrl: null },
  { html: "<h2>Beliebte Orte</h2><p>Kapitel zwei.</p>", images: [], youtubeUrl: null },
];

describe("splitListingContent", () => {
  it("splits chapters at h2 boundaries with the intro first", () => {
    const sections = splitListingContent(BLOCKS);
    expect(sections.map((s) => s.title)).toEqual([
      null,
      "Gleitschirmfliegen allgemein",
      "Beliebte Orte",
    ]);
  });

  it("keeps pre-h2 html and image pairs in the intro", () => {
    const [intro] = splitListingContent(BLOCKS);
    expect(intro?.parts.map((p) => p.kind)).toEqual(["html", "images", "html"]);
  });

  it("keeps h3 subheadings and trailing images inside their chapter", () => {
    const sections = splitListingContent(BLOCKS);
    const chapter = sections[1]!;
    expect(chapter.parts.map((p) => p.kind)).toEqual(["html", "images", "html"]);
    const sub = chapter.parts[2];
    expect(sub?.kind === "html" && sub.html).toContain("<h3>");
  });

  it("drops empty sections", () => {
    expect(splitListingContent([{ html: "  ", images: [], youtubeUrl: null }])).toEqual([]);
  });
});

describe("anchorIdForTitle", () => {
  it("slugifies titles incl. umlauts", () => {
    expect(anchorIdForTitle("Sicherheit beim Gleitschirmfliegen", 0)).toBe(
      "sicherheit-beim-gleitschirmfliegen",
    );
    expect(anchorIdForTitle("Höhenflüge & Täler", 0)).toBe("hohenfluge-taler");
  });

  it("falls back to a positional id", () => {
    expect(anchorIdForTitle("???", 2)).toBe("abschnitt-3");
  });
});

describe("toYouTubeEmbedUrl", () => {
  it("maps watch and short urls to nocookie embeds", () => {
    expect(toYouTubeEmbedUrl("https://www.youtube.com/watch?v=abc123XYZ_-")).toBe(
      "https://www.youtube-nocookie.com/embed/abc123XYZ_-",
    );
    expect(toYouTubeEmbedUrl("https://youtu.be/abc123XYZ_-")).toBe(
      "https://www.youtube-nocookie.com/embed/abc123XYZ_-",
    );
  });

  it("rejects unparseable urls", () => {
    expect(toYouTubeEmbedUrl("https://example.com/video")).toBeNull();
  });
});
