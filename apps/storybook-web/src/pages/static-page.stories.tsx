import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  DEFAULT_ABOUT_EMPLOYEES,
  WebsiteGatewayPageContent,
  type WebsiteGatewayStaticPagesContent,
} from "@swiss-activities/data";

/**
 * Static one-off pages — the marketing ports render their built-in German
 * legacy copy; `staticPages` mirrors what web/src/static-pages.ts passes for
 * the de-CH base locale (team, shop link, legal titles), and the page assets
 * (/assets/{about,apps,supplier,voucher}) ship in this storybook's public
 * dir, so the stories match the rendered site 1:1. The legal story shows the
 * gateway-document + legalNav switcher anatomy with sample HTML.
 */
const staticPages: WebsiteGatewayStaticPagesContent = {
  aboutEmployees: DEFAULT_ABOUT_EMPLOYEES,
  vouchersShopHref:
    "https://shop.e-guma.ch/swiss-activities/de/gutscheine?promocode=2024discount",
  legalNavTitles: {
    agb: "Nutzungsbedingungen",
    "agb-b2b": "Nutzungsbedingungen für Anbieter",
    "agb-affiliates": "Nutzungsbedingungen für Affiliates",
    impressum: "Impressum",
    datenschutz: "Datenschutz",
  },
};

const meta = {
  title: "Pages/Static Pages",
  parameters: { layout: "fullscreen" },
  args: { locale: "de_CH", staticPages },
  render: (args) => (
    <main className="min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-10 lg:pt-12">
      <WebsiteGatewayPageContent {...args} />
    </main>
  ),
} satisfies Meta<typeof WebsiteGatewayPageContent>;

export default meta;
type Story = StoryObj<typeof meta>;

const staticContent = (id: string, extra: object = {}) => ({
  kind: "static" as const,
  id,
  slug: id,
  title: "",
  description: "",
  heroTitle: "",
  blocks: [],
  ...extra,
});

export const Affiliate: Story = {
  args: { page: { type: "static-page", content: staticContent("affiliate") } },
};

export const About: Story = {
  args: { page: { type: "static-page", content: staticContent("ueber-uns") } },
};

export const Supplier: Story = {
  args: { page: { type: "static-page", content: staticContent("anbieter") } },
};

export const Vouchers: Story = {
  args: {
    page: { type: "static-page", content: staticContent("gutscheine-und-geschenkideen") },
  },
};

export const Legal: Story = {
  args: {
    page: {
      type: "static-page",
      content: staticContent("agb", {
        title: "Nutzungsbedingungen | SwissActivities",
        heroTitle: "Nutzungsbedingungen",
        legal: true,
        legalNav: [
          { id: "agb", title: "Nutzungsbedingungen", path: "/agb/" },
          { id: "agb-b2b", title: "Nutzungsbedingungen für Anbieter", path: "/agb/b2b/" },
          {
            id: "agb-affiliates",
            title: "Nutzungsbedingungen für Affiliates",
            path: "/agb/affiliates/",
          },
          { id: "impressum", title: "Impressum", path: "/impressum/" },
          { id: "datenschutz", title: "Datenschutz", path: "/datenschutz/" },
        ],
        blocks: [
          {
            id: "text",
            title: "",
            content:
              "<p><strong>Nutzungsbedingungen Swiss Activities Vermittlungsplattform</strong></p><p>Stand: April 2022</p><h2>1. Geltungsbereich</h2><p>Diese Nutzungsbedingungen gelten für die Vermittlung von Freizeitaktivitäten über die Plattform swissactivities.com.</p><h2>2. Vertragsschluss</h2><p>Der Vertrag über die Aktivität kommt direkt zwischen dem Kunden und dem jeweiligen Anbieter zustande.</p>",
          },
        ],
      }),
    },
  },
};
