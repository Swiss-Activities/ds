import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  WebsiteGatewayPageRenderer,
  type TGatewaySearchSuggestion,
} from "@swiss-activities/data";
import {
  SiteFooterAppLinks,
  SiteFooterPaymentMethods,
  type SiteFooterProps,
  type SiteHeaderProps,
  type WebsiteLanguageOption,
} from "@swiss-activities/ui";
import { gatewayHomeResponse } from "../fixtures/gateway-home-response";

const languageOptions: WebsiteLanguageOption[] = [
  { value: "de_CH", label: "Deutsch", shortLabel: "DE" },
  { value: "en_CH", label: "English", shortLabel: "EN" },
  { value: "fr_CH", label: "Français", shortLabel: "FR" },
  { value: "it_CH", label: "Italiano", shortLabel: "IT" },
];

const searchSuggestions: TGatewaySearchSuggestion[] = [
  {
    id: "paragliding",
    title: "Paragliding",
    subtitle: "Luftaktivitaet",
    type: "activity-type",
    path: "#",
    imageUrl:
      "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/37f230b87aaf197d0213fb0538fefd64.jpg",
  },
  {
    id: "interlaken",
    title: "Interlaken",
    subtitle: "Region Bern",
    type: "destination",
    path: "#",
    imageUrl:
      "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/MOB_Schoenried_Morgen_94018_1_cb43f1c986.jpg",
  },
  {
    id: "jungfraujoch",
    title: "Jungfraujoch - Top of Europe",
    subtitle: "Region Bern",
    category: "Interlaken",
    type: "point-of-interest",
    path: "#",
    imageUrl:
      "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Eiger_Express_Grindelwald_Eigernordwand_Weitansicht_Kabine_rechts_f1841d7182.jpg",
  },
  {
    id: "jungfraujoch-ticket",
    title: "Ab Interlaken: Ticket Jungfraujoch inkl. Sitzplatzreservation",
    subtitle: "Interlaken",
    category: "Bergbahn",
    type: "activity",
    path: "#",
    imageUrl:
      "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/29_Oeschinensee_Seraina_57b2a4db85.jpg",
  },
];

const header: SiteHeaderProps = {
  labels: {
    close: "Schliessen",
    home: "Homepage",
    menu: "Menü",
  },
  logoHref: "#",
};

const footer: SiteFooterProps = {
  sections: [
    {
      id: "company",
      title: "Unternehmen",
      links: [
        { id: "about", label: "Über uns", href: "#" },
        { id: "jobs", label: "Jobs", href: "#" },
      ],
    },
    {
      id: "resources",
      title: "Ressourcen",
      links: [
        { id: "guide", label: "Travel Guide", href: "#" },
        { id: "routes", label: "Reiserouten", href: "#" },
        { id: "voucher", label: "Gutschein", href: "#" },
      ],
    },
    {
      id: "collaboration",
      title: "Zusammenarbeit",
      links: [
        { id: "supplier", label: "Anbieter werden", href: "#" },
        { id: "affiliate", label: "Affiliate", href: "#" },
        { id: "widget", label: "Widget", href: "#" },
      ],
    },
    {
      id: "contact",
      title: "Kontakt",
      links: [{ id: "contact", label: "Kontakt", href: "#" }],
    },
  ],
  appLinks: <SiteFooterAppLinks />,
  socialLinks: [
    { id: "linkedin", label: "in", href: "#" },
    { id: "instagram", label: "ig", href: "#" },
    { id: "youtube", label: "yt", href: "#" },
  ],
  paymentMethods: <SiteFooterPaymentMethods />,
  partnerLogos: [
    {
      id: "stv",
      alt: "Schweizer Tourismus-Verband",
      src: "/assets/footer/partners/stv.png",
    },
    {
      id: "swiss-digital-services",
      alt: "Swiss Digital Services",
      src: "/assets/footer/partners/swiss-digital-services.png",
    },
    {
      id: "sms",
      alt: "Swiss Made Software",
      src: "/assets/footer/partners/sms.png",
    },
    {
      id: "switzerland-member",
      alt: "Switzerland Member",
      src: "/assets/footer/partners/switzerland-member.png",
    },
  ],
  bottomText: "Copyright 2026 © swissactivities.com",
  legalLinks: [
    { id: "terms", label: "AGB", href: "#" },
    { id: "cookies", label: "Cookie Policy", href: "#" },
    { id: "privacy", label: "Datenschutz", href: "#" },
  ],
};

function WebsiteStory() {
  const [locale, setLocale] = useState("de_CH");

  return (
    <WebsiteGatewayPageRenderer
      header={header}
      footer={footer}
      language={{
        options: languageOptions,
        value: locale,
        onValueChange: setLocale,
      }}
      search={{
        labels: { placeholder: "Jetzt suchen", noResults: "Keine Ergebnisse" },
        staticSuggestions: searchSuggestions,
      }}
      locale={locale}
      page={{
        type: "home",
        data: gatewayHomeResponse,
      }}
    />
  );
}

const meta = {
  title: "Sites/Website",
  parameters: { layout: "fullscreen" },
  render: () => <WebsiteStory />,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
