import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { WebsiteGatewayPageRenderer } from "@swiss-activities/data";
import { Languages } from "@swiss-activities/ui/icons";
import {
  Icon,
  SearchBar,
  SearchBarResultItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SiteFooterAppLinks,
  SiteFooterPaymentMethods,
  Text,
  type SiteFooterProps,
  type SiteHeaderProps,
} from "@swiss-activities/ui";
import { gatewayHomeResponse } from "../fixtures/gateway-home-response";

const languageOptions = [
  { value: "de_CH", label: "Deutsch", shortLabel: "DE" },
  { value: "en_CH", label: "English", shortLabel: "EN" },
  { value: "fr_CH", label: "Français", shortLabel: "FR" },
  { value: "it_CH", label: "Italiano", shortLabel: "IT" },
];

const searchSuggestions = [
  {
    variant: "activity-listing" as const,
    title: "Paragliding",
    subtitle: "Luftaktivitaet",
    imageSrc:
      "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/37f230b87aaf197d0213fb0538fefd64.jpg",
  },
  {
    variant: "location" as const,
    title: "Interlaken",
    subtitle: "Region Bern",
    imageSrc:
      "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/MOB_Schoenried_Morgen_94018_1_cb43f1c986.jpg",
  },
  {
    variant: "poi" as const,
    title: "Jungfraujoch - Top of Europe",
    subtitle: "Region Bern",
    detail: "Interlaken",
    imageSrc:
      "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Eiger_Express_Grindelwald_Eigernordwand_Weitansicht_Kabine_rechts_f1841d7182.jpg",
  },
  {
    variant: "activity" as const,
    title: "Ab Interlaken: Ticket Jungfraujoch inkl. Sitzplatzreservation",
    subtitle: "Interlaken",
    detail: "Bergbahn",
    imageSrc:
      "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/29_Oeschinensee_Seraina_57b2a4db85.jpg",
  },
];

function StoryLanguageSelect({ long = false }: { long?: boolean }) {
  const [locale, setLocale] = useState("de_CH");
  const selected = languageOptions.find((option) => option.value === locale);

  return (
    <Select value={locale} onValueChange={(value) => setLocale(String(value))}>
      <SelectTrigger
        aria-label="Sprache"
        className="bg-white shadow-none"
      >
        <Icon icon={Languages} size="sm" />
        <SelectValue>
          {long ? selected?.label : selected?.shortLabel}
        </SelectValue>
      </SelectTrigger>
      <SelectContent align="end">
        {languageOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function StorySearchResults({ value }: { value: string }) {
  const normalizedValue = value.trim().toLowerCase();
  const items = normalizedValue
    ? searchSuggestions.filter((item) =>
        item.title.toLowerCase().includes(normalizedValue)
      )
    : searchSuggestions;

  if (!items.length) {
    return (
      <div className="px-4 py-6">
        <Text>Keine Ergebnisse</Text>
      </div>
    );
  }

  return (
    <>
      {items.map((item) => (
        <SearchBarResultItem
          key={`${item.variant}-${item.title}`}
          href="#"
          {...item}
        />
      ))}
    </>
  );
}

function StorySearch({
  className,
  mode = "default",
}: {
  className?: string;
  mode?: "default" | "main" | "mobile";
}) {
  const [value, setValue] = useState("");

  return (
    <SearchBar
      className={className}
      mode={mode}
      value={value}
      onValueChange={setValue}
      onClear={() => setValue("")}
      onSubmit={setValue}
      placeholder="Jetzt suchen"
    >
      <StorySearchResults value={value} />
    </SearchBar>
  );
}

const headerBase: Omit<
  SiteHeaderProps,
  "gatewaySearch" | "languageSelector" | "searchButton" | "userSlot"
> = {
  labels: {
    close: "Schliessen",
    home: "Homepage",
    menu: "Menü",
  },
  logoHref: "#",
};

const footer: SiteFooterProps = {
  languageSelector: <StoryLanguageSelect long />,
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
  const header: SiteHeaderProps = {
    ...headerBase,
    languageSelector: <StoryLanguageSelect />,
  };

  return (
    <WebsiteGatewayPageRenderer
      header={header}
      heroSearch={<StorySearch mode="main" />}
      locale="de_CH"
      page={{
        type: "home",
        data: gatewayHomeResponse,
      }}
      footer={footer}
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
