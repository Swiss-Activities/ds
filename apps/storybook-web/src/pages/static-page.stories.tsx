import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  AFFILIATE_SIGNUP_DE,
  APPS_ANDROID_URL,
  APPS_IOS_URL,
  DEFAULT_ABOUT_CONTENT,
  DEFAULT_ABOUT_EMPLOYEES,
  DEFAULT_AFFILIATE_CONTENT,
  DEFAULT_APPS_CONTENT,
  DEFAULT_SUPPLIER_CONTENT,
  DEFAULT_VOUCHERS_CONTENT,
  SUPPLIER_TYPEFORM_DE,
  WebsiteGatewayPageContent,
  type WebsiteGatewayStaticPagesContent,
} from "@swiss-activities/data";

/**
 * Static one-off pages — `staticPages` composes EXACTLY what the web
 * renderer's static-pages module passes for the de-CH base locale (the i18n
 * layer is identity for de-CH: the catalog was extracted from these
 * defaults). Page assets (/assets/{about,apps,supplier,voucher}) ship in
 * this storybook's public dir, so the stories match the rendered site 1:1.
 * The legal story shows the gateway-document + legalNav switcher anatomy.
 */
const affiliate = structuredClone(DEFAULT_AFFILIATE_CONTENT);
affiliate.hero.href = AFFILIATE_SIGNUP_DE;

const supplier = structuredClone(DEFAULT_SUPPLIER_CONTENT);
supplier.hero.href = SUPPLIER_TYPEFORM_DE;
for (const block of supplier.pricing.blocks) block.buttonLink = SUPPLIER_TYPEFORM_DE;

const apps = structuredClone(DEFAULT_APPS_CONTENT);
apps.appStoreSrc = "/assets/appstore/app/de_CH.svg";
apps.googlePlaySrc = "/assets/appstore/play/de_CH.png";
apps.appStoreHref = APPS_IOS_URL;
apps.googlePlayHref = `${APPS_ANDROID_URL}&hl=de`;

const staticPages: WebsiteGatewayStaticPagesContent = {
  about: DEFAULT_ABOUT_CONTENT,
  aboutEmployees: DEFAULT_ABOUT_EMPLOYEES,
  affiliate,
  apps,
  supplier,
  vouchers: DEFAULT_VOUCHERS_CONTENT,
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

export const Apps: Story = {
  args: { page: { type: "static-page", content: staticContent("apps") } },
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
