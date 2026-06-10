import type { ReactNode } from "react";
import { Button, Card, Icon, Text } from "@swiss-activities/ui";
import { Gift, Percent, PersonStanding, SquarePen, UserRound } from "@swiss-activities/ui/icons";

/**
 * `/gutscheine-und-geschenkideen/` — 1:1 port of the legacy vouchers page
 * (website/modules/pages/voucher/index.tsx + modules/components/Voucher/Section):
 * the shop-link banner card, the full-bleed image hero, the gift intro, the
 * 4-card "why" grid on gray, and the closing CTA. All copy via props; German
 * defaults are the legacy `pages.vouchers.*` strings verbatim.
 */

export interface WebsiteGatewayVouchersContent {
  /** Page `<title>` (head meta — not rendered by the component). */
  title: string;
  /** Meta description (head meta — not rendered by the component). */
  description: string;
  banner: {
    tagline: string;
    /** Contains a `\n` — rendered with `whitespace-pre-line`. */
    title: string;
    button: string;
  };
  hero: { title: string; text: string; button: string };
  gift: { title: string; text: string };
  why: { title: string; items: Array<{ title: string; text: string }> };
  end: { title: string; text: string; button: string };
}

/** e-guma voucher shop, de_CH (locale variants are the consumer's concern). */
export const VOUCHER_SHOP_DE =
  "https://shop.e-guma.ch/swiss-activities/de/gutscheine?promocode=2024discount";

/** Legacy banner photo (the legacy VoucherSection hotlinks it from imgix). */
const BANNER_IMAGE =
  "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Jungfraujoch_Plateau_Sonnenaufgang_Aletschgletscher_6b8bb53632.jpg";

/** Legacy swirl divider between the banner text and photo columns. */
function SwirlDivider() {
  return (
    <svg
      className="absolute inset-y-0 -left-px z-10 h-full w-16 lg:w-24"
      viewBox="0 0 100 400"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0,0 L40,0 C75,60 5,130 50,200 C95,270 15,340 55,400 L0,400 Z"
        fill="white"
      />
      <path
        d="M40,0 C75,60 5,130 50,200 C95,270 15,340 55,400"
        stroke="var(--color-primary)"
        strokeWidth="3"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M48,-2 C83,58 13,128 58,198 C103,268 23,338 63,402"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export const DEFAULT_VOUCHERS_CONTENT: WebsiteGatewayVouchersContent = {
  title: "Erlebnis-Geschenkideen für die Schweiz – die besten Gutscheine bei Swiss Activities",
  description:
    "Verschenke unvergessliche Momente mit einem Erlebnis-Gutschein von Swiss Activities! Entdecke die größte Auswahl an Freizeitaktivitäten in der Schweiz – flexibel, einfach und sofort online buchbar. Perfekt als Geschenkidee für jeden Anlass.",
  banner: {
    tagline: "NEU: Die perfekte Geschenkidee!",
    title: "Sichere dir einen\nErlebnis-Gutschein",
    button: "Hier drücken",
  },
  hero: {
    title: "Jetzt Erlebnis-Gutschein für die Schweiz verschenken und Freude bereiten!",
    text: "Entdecke jetzt die besten Geschenkideen und Erlebnis-Gutscheine bei Swiss Activities. Ob zum Geburtstag, als Weihnachtsgeschenk oder einfach, um Danke zu sagen – ein Gutschein für Schweizer Erlebnisse trifft jeden Geschmack und ist ein Geschenk, das garantiert in Erinnerung bleibt.",
    button: "Gutschein kaufen",
  },
  gift: {
    title: "Verschenke die besten Schweizer Erlebnisse – von Abenteuer bis Erholung",
    text: "Suchst du nach einer einzigartigen Geschenkidee für Freunde oder Familie in der Schweiz? Ein Erlebnis-Gutschein von Swiss Activities bietet dir Zugang zur größten Auswahl an Freizeitaktivitäten, die die Schweiz zu bieten hat. Ob geführte Touren, Abenteuer in der Natur, entspannende Stunden in Thermalbädern oder kulturelle Highlights in Museen – Swiss Activities macht es möglich, besondere Momente zu verschenken.",
  },
  why: {
    title: "Warum ein Erlebnis-Gutschein von Swiss Activities die perfekte Geschenkidee ist",
    items: [
      {
        title: "Grösste Auswahl der Schweiz",
        text: "Über 1,600 Freizeitangebote in allen Regionen, von Outdoor-Abenteuern bis hin zu Entspannungsmomenten.",
      },
      {
        title: "Über 100'000 zufriedene Kunden",
        text: "Swiss Activities ist der bewährte Partner für besondere Geschenke und Ausflüge.",
      },
      {
        title: "Kostenlose Stornierungsoption",
        text: "Sichere und flexible Buchungen, die an die Bedürfnisse des Beschenkten angepasst werden können.",
      },
      {
        title: "5-Sterne-Kundensupport",
        text: "Schweizer Qualität und Unterstützung – für einen reibungslosen Erlebnisstart.",
      },
    ],
  },
  end: {
    title: "Schenke Erlebnis-Gutscheine in der Schweiz und bereite Freude!",
    text: "Entdecke die besten Geschenkideen und Erlebnis-Gutscheine bei Swiss Activities. Egal ob zum Geburtstag, als Weihnachtsgeschenk oder einfach, um Danke zu sagen – ein Gutschein für Erlebnisse in der Schweiz passt zu jedem Geschmack und sorgt für bleibende Erinnerungen.",
    button: "Gutschein auswählen",
  },
};

const WHY_ICONS = [PersonStanding, Percent, SquarePen, UserRound];

/** Legacy IconCard: DS Card with icon, bold title, body text. */
function StaticIconCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <Card className="flex h-auto w-full flex-col items-start space-y-2">
      {icon}
      <Text as="h3" bold black>
        {title}
      </Text>
      <Text>{text}</Text>
    </Card>
  );
}

export function WebsiteGatewayVouchersPage({
  content = DEFAULT_VOUCHERS_CONTENT,
  assetBase = "/assets/voucher",
  shopHref = VOUCHER_SHOP_DE,
}: {
  content?: WebsiteGatewayVouchersContent;
  /** Base path for the voucher images (the hero `1.png`). */
  assetBase?: string;
  /** e-guma shop URL (locale variants are the consumer's concern). */
  shopHref?: string;
}) {
  return (
    <div>
      {/* Banner card (legacy VoucherSection) — the whole card links to the shop. */}
      <section>
        <a href={shopHref} target="_blank" rel="noreferrer" className="block">
          <Card noPadding className="overflow-hidden">
            <div className="flex flex-row items-stretch">
              <div className="flex w-full shrink-0 flex-col items-start justify-center gap-3 p-5 xs:w-[55%] sm:p-8 lg:p-12">
                <Text size="xs" bold className="text-primary lg:!text-base">
                  {content.banner.tagline}
                </Text>
                <Text as="h3" size="md2" bold className="whitespace-pre-line sm:!text-xl lg:!text-2xl">
                  {content.banner.title}
                </Text>
                <Button type="primary" icon={<Icon icon={Gift} size="sm" />}>
                  {content.banner.button}
                </Button>
              </div>
              <div className="relative hidden min-h-[140px] w-[45%] xs:block sm:min-h-[200px] lg:min-h-[250px]">
                <SwirlDivider />
                <img
                  src={BANNER_IMAGE}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </Card>
        </a>
      </section>

      <section className="pt-8 md:pt-12 lg:pt-16 xl:pt-20">
        <div className="relative overflow-hidden rounded-xl py-16 lg:py-20 xl:py-32">
          {/* Legacy: autoplaying 7-slide fade Swiper over `${assetBase}/1-7.png`;
              intentionally simplified to the first slide as a static cover image. */}
          <img
            src={`${assetBase}/1.png`}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 mx-auto flex max-w-screen-sm flex-col items-center gap-4 px-4 text-center">
            <Text as="h1" size="xl" className="!text-white">
              {content.hero.title}
            </Text>
            <Text className="!text-white">{content.hero.text}</Text>
            <Button href={shopHref} target="_blank" type="primary">
              {content.hero.button}
            </Button>
          </div>
        </div>
      </section>

      <section className="pt-8 md:pt-12 lg:pt-16 xl:pt-20">
        <div className="mx-auto flex max-w-screen-md flex-col items-center gap-4 text-center">
          <Text as="h2" size="xl">
            {content.gift.title}
          </Text>
          <Text>{content.gift.text}</Text>
        </div>
      </section>

      <section className="pt-8 md:pt-12 lg:pt-16 xl:pt-20">
        <div className="rounded-xl bg-gray-50 p-6 md:p-10 lg:p-12">
          <Text as="h2" size="xl" className="mx-auto mb-6 max-w-screen-sm text-center">
            {content.why.title}
          </Text>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.why.items.map((item, index) => {
              const GlyphIcon = WHY_ICONS[index % WHY_ICONS.length]!;
              return (
                <StaticIconCard
                  key={item.title}
                  icon={<Icon icon={GlyphIcon} size="lg" className="text-primary" />}
                  title={item.title}
                  text={item.text}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="pt-8 md:pt-12 lg:pt-16 xl:pt-20">
        <div className="mx-auto flex max-w-screen-sm flex-col items-center gap-4 text-center">
          <Text as="h2" size="xl">
            {content.end.title}
          </Text>
          <Text>{content.end.text}</Text>
          <Button href={shopHref} target="_blank" type="primary">
            {content.end.button}
          </Button>
        </div>
      </section>
    </div>
  );
}
