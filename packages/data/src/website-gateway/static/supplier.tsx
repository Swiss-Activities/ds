import type { ReactNode } from "react";
import { Accordion, Button, Card, cn, Icon, Image, Text } from "@swiss-activities/ui";
import {
  Banknote,
  Check,
  PersonStanding,
  Phone,
  PiggyBank,
} from "@swiss-activities/ui/icons";

import { DEFAULT_SUPPLIER_CONTENT } from "./content";
/**
 * `/anbieter/` (en: `/supplier/`) — 1:1 port of the legacy supplier
 * ("Anbieter") page (website/modules/pages/supplier/index.tsx +
 * Pricing/index.tsx): two-column hero with the Typeform CTA, the numbers
 * grid, the partner logo wall, the four "why" icon cards, the pricing card
 * with the includes checklist, the reservation-systems band and the
 * two-column FAQ accordions. All copy via props; German defaults are the
 * legacy `pages.supplier.*` strings verbatim (including the source typos
 * "Vermilttung", "Allegmeine" and "Kundesgemente").
 */

export interface WebsiteGatewaySupplierContent {
  /** Meta title (legacy `<head>`); not rendered in the page body. */
  title: string;
  /** Meta description (legacy `<head>`); not rendered in the page body. */
  description: string;
  hero: {
    title: string;
    button: string;
    /** Supplier signup Typeform URL (locale-dependent on the legacy site). */
    href: string;
  };
  numbers: {
    title: string;
    blocks: Array<{ title: string; number: string; text: string }>;
  };
  why: {
    title: string;
    sales: { title: string; description: string };
    support: { title: string; description: string };
    finances: { title: string; description: string };
    local: { title: string; description: string };
  };
  who: {
    title: string;
    /** Logo paths relative to `assetBase` (the `partner/…` group). */
    partners: string[];
  };
  pricing: {
    title: string;
    subtitle: string;
    description: string;
    blocks: Array<{
      cost: string;
      subcost: string;
      button: string;
      buttonLink: string;
      includes: string[];
    }>;
  };
  tech: {
    title: string;
    description: string;
    /** Logo paths relative to `assetBase` (the `technology/…` group). */
    partners: string[];
    titleSoon: string;
    /** Logo paths relative to `assetBase` (the `technology/…` group). */
    partnersSoon: string[];
  };
  faq: Array<{
    title: string;
    blocks: Array<{ title: string; text?: string; list?: string[] }>;
  }>;
}

/** Legacy `getTypeformUrl`: supplier signup Typeforms per locale. */
const SECTION_SPACING = "pt-8 md:pt-12 lg:pt-16 xl:pt-20";

/** Legacy IconCard (same pattern as the affiliate page's StaticIconCard). */
function SupplierIconCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
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

function SupplierLogo({ assetBase, src }: { assetBase: string; src: string }) {
  return (
    <Image
      alt=""
      src={`${assetBase}/${src}`}
      className="mx-auto h-12 w-auto object-contain opacity-80"
    />
  );
}

/**
 * Logo grid. The legacy page renders the partner logos through an infinite
 * marquee (`LogoGrid infinite`); intentionally simplified to a static grid.
 */
function SupplierLogoGrid({
  assetBase,
  logos,
  className,
}: {
  assetBase: string;
  logos: string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-3 items-center gap-6 sm:grid-cols-4 lg:grid-cols-6",
        className
      )}
    >
      {logos.map((src) => (
        <SupplierLogo key={src} assetBase={assetBase} src={src} />
      ))}
    </div>
  );
}

export function WebsiteGatewaySupplierPage({
  content = DEFAULT_SUPPLIER_CONTENT,
  assetBase = "/assets/supplier",
}: {
  content?: WebsiteGatewaySupplierContent;
  assetBase?: string;
}) {
  const whyBlocks = [
    { ...content.why.sales, glyph: Banknote },
    { ...content.why.support, glyph: Phone },
    { ...content.why.finances, glyph: PiggyBank },
    { ...content.why.local, glyph: PersonStanding },
  ];

  return (
    <div>
      <section className="grid items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <Text as="h1" size="xl">
            {content.hero.title}
          </Text>
          <Button href={content.hero.href} target="_blank" type="primary">
            {content.hero.button}
          </Button>
        </div>
        {/* Legacy blob border-radius approximated with rounded-[3rem] + rotate (lg+ only). */}
        <Image
          alt=""
          src={`${assetBase}/hero.webp`}
          className="hidden rotate-3 rounded-[3rem] saturate-150 lg:block"
        />
      </section>

      <section className={SECTION_SPACING}>
        <Text as="h2" size="lg" className="mb-6 text-center">
          {content.numbers.title}
        </Text>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.numbers.blocks.map((block) => (
            <Card
              key={block.title}
              className="flex flex-col items-center gap-2 border-gray-100 p-8 text-center shadow"
            >
              <Text size="md2">{block.title}</Text>
              <span className="text-4xl font-bold text-primary xl:text-5xl">
                {block.number}
              </span>
              <Text>{block.text}</Text>
            </Card>
          ))}
        </div>
      </section>

      <section className={SECTION_SPACING}>
        <Text as="h2" size="lg" className="mb-6 text-center">
          {content.who.title}
        </Text>
        <SupplierLogoGrid assetBase={assetBase} logos={content.who.partners} />
      </section>

      <section className={SECTION_SPACING}>
        <Text as="h2" size="lg" className="mb-6">
          {content.why.title}
        </Text>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {whyBlocks.map((block) => (
            <SupplierIconCard
              key={block.title}
              icon={<Icon icon={block.glyph} size="lg" className="text-primary" />}
              title={block.title}
              text={block.description}
            />
          ))}
        </div>
      </section>

      <section className={SECTION_SPACING}>
        <div className="mx-auto flex max-w-screen-md flex-col items-center gap-4 text-center">
          <Text as="h2" size="xl">
            {content.pricing.title}
          </Text>
          <Text as="h3" size="md2">
            {content.pricing.subtitle}
          </Text>
          <Text>{content.pricing.description}</Text>
        </div>
        <div className="mt-8 space-y-8">
          {content.pricing.blocks.map((block, index) => (
            <Card
              key={`pricing-${index}`}
              noPadding
              elevation="lg"
              className="mx-auto flex w-full max-w-xl flex-col rounded-xl border-gray-100"
            >
              <div className="space-y-3 px-4 py-6">
                <div>
                  <Text size="lg">{block.cost}</Text>
                  <Text size="xs">{block.subcost}</Text>
                </div>
                <Button
                  href={block.buttonLink}
                  target="_blank"
                  type="primary"
                  className="!mt-5 max-w-max"
                >
                  {block.button}
                </Button>
              </div>
              <div className="flex-grow space-y-2 pb-6">
                <div className="mb-6 h-px w-full bg-gray-100" />
                {block.includes.map((item) => (
                  <div key={item} className="flex px-6 text-xs">
                    <Icon
                      icon={Check}
                      size="sm"
                      className="relative top-1 me-2 text-primary"
                    />
                    <Text className="text-left">{item}</Text>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Legacy full-bleed gray band; boxed here since the static pages render inside the content container. */}
      <section className={SECTION_SPACING}>
        <div className="rounded-xl bg-gray-50 px-4 py-8 sm:px-8 md:py-12">
          <div className="mx-auto flex max-w-screen-md flex-col items-center gap-4 text-center">
            <Text as="h2" size="lg">
              {content.tech.title}
            </Text>
            <Text>{content.tech.description}</Text>
          </div>
          <SupplierLogoGrid
            assetBase={assetBase}
            logos={content.tech.partners}
            className="mt-8"
          />
          <Text size="md2" className="mt-8 text-center">
            {content.tech.titleSoon}
          </Text>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6">
            {content.tech.partnersSoon.map((src) => (
              <SupplierLogo key={src} assetBase={assetBase} src={src} />
            ))}
          </div>
        </div>
      </section>

      <section className={SECTION_SPACING}>
        <div className="grid gap-8 lg:grid-cols-2">
          {content.faq.map((group, groupIndex) => (
            <div key={group.title}>
              <Text as="h2" size="lg" className="mb-6">
                {group.title}
              </Text>
              <Accordion
                items={group.blocks.map((block, index) => ({
                  id: `supplier-faq-${groupIndex}-${index}`,
                  title: block.title,
                  content: (
                    <div className="prose-sa pb-2 text-left">
                      {block.text ? <p>{block.text}</p> : null}
                      {block.list ? (
                        <ul className="prose-sa">
                          {block.list.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ),
                }))}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
