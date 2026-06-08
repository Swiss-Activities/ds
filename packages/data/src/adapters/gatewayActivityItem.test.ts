import { describe, expect, test } from "bun:test";
import {
  getGatewayActivityItemImages,
  toGatewayActivityItemData,
} from "./gatewayActivityItem";
import type { TGatewayActivityCardItem } from "../gateway/types";

const labels = {
  categories: {
    fireplaces: "Fireplaces",
  },
  dateRange: {
    from: "from",
    until: "until",
  },
  distanceUnit: "km",
};

describe("gateway activity item adapter", () => {
  test("deduplicates exact and visual gallery duplicates", () => {
    const item = {
      id: "1",
      type: "activity",
      title: "Paragliding",
      imageUrl: "https://img.test/teaser_paragliding_abcdef12.jpg?auto=compress",
      images: [
        "https://img.test/gallery_paragliding_12345678.jpg",
        "https://img.test/gallery_landing_zone_12345678.jpg",
        {
          imageUrl: "https://img.test/gallery_landing_zone_12345678.jpg?width=800",
          alt: "Duplicate landing zone",
        },
      ],
    } satisfies TGatewayActivityCardItem;

    expect(getGatewayActivityItemImages(item)).toEqual([
      {
        src: "https://img.test/teaser_paragliding_abcdef12.jpg?auto=compress",
        alt: "Paragliding",
      },
      {
        src: "https://img.test/gallery_landing_zone_12345678.jpg",
        alt: "Paragliding",
      },
    ]);
  });

  test("only exposes slider images for activities", () => {
    const activity = {
      id: "1",
      type: "activity",
      title: "Paragliding",
      imageUrl: "https://img.test/teaser_paragliding_abcdef12.jpg",
      images: ["https://img.test/gallery_landing_zone_12345678.jpg"],
      lat: 46.6,
      lng: 7.8,
      priceFormatted: "CHF 190",
    } satisfies TGatewayActivityCardItem;
    const blogPost = {
      id: "2",
      type: "blog-post",
      title: "Guide",
      description: "A useful travel guide.",
      imageUrl: "https://img.test/blog.jpg",
      images: ["https://img.test/blog-gallery.jpg"],
    } satisfies TGatewayActivityCardItem;

    expect(
      toGatewayActivityItemData(activity, {
        locale: "de_CH",
        labels,
        priceLabel: "pro Person",
        fromLabel: "ab",
      })
    ).toMatchObject({
      image: {
        src: "https://img.test/teaser_paragliding_abcdef12.jpg",
        alt: "Paragliding",
      },
      images: [
        {
          src: "https://img.test/teaser_paragliding_abcdef12.jpg",
          alt: "Paragliding",
        },
        {
          src: "https://img.test/gallery_landing_zone_12345678.jpg",
          alt: "Paragliding",
        },
      ],
      mapPoint: {
        id: "1",
        lat: 46.6,
        lng: 7.8,
        priceLabel: "ab CHF 190",
      },
    });
    expect(
      toGatewayActivityItemData(blogPost, {
        locale: "de_CH",
        labels,
        priceLabel: "pro Person",
        fromLabel: "ab",
      })
    ).toMatchObject({
      image: {
        src: "https://img.test/blog.jpg",
        alt: "",
      },
      images: undefined,
      description: "A useful travel guide.",
    });
  });
});
