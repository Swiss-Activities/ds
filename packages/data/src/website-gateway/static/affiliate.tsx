import type { ReactNode } from "react";
import { Accordion, Button, Card, Icon, Text } from "@swiss-activities/ui";
import { FileCode, Percent, PersonStanding, SquarePen, Ticket, UserRound } from "@swiss-activities/ui/icons";

import { DEFAULT_AFFILIATE_CONTENT } from "./content";
/**
 * `/affiliate/` — 1:1 port of the legacy affiliate page
 * (website/modules/pages/affiliate/index.tsx): centered hero with the
 * three-step list joined by dashed connectors and the Tapfiliate signup CTA,
 * a 6-card advantages grid, and the FAQ accordion list (answers carry inline
 * HTML links). All copy via props; German defaults are the legacy
 * `pages.affiliate.*` strings verbatim.
 */

export interface WebsiteGatewayAffiliateContent {
  hero: {
    title: string;
    description: string;
    steps: string[];
    button: string;
    /** Tapfiliate signup URL (locale-dependent on the legacy site). */
    href: string;
  };
  advantagesTitle: string;
  advantages: Array<{ title: string; text: string }>;
  faqTitle: string;
  /** Answer strings may contain inline HTML (links). */
  faq: Array<{ title: string; text: string }>;
}

const ADVANTAGE_ICONS = [PersonStanding, Percent, SquarePen, UserRound, Ticket, FileCode];

/** Legacy IconCard: DS Card with icon, bold title, body text. */
export function StaticIconCard({
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

export function WebsiteGatewayAffiliatePage({
  content = DEFAULT_AFFILIATE_CONTENT,
}: {
  content?: WebsiteGatewayAffiliateContent;
}) {
  return (
    <div>
      <section>
        <div className="mx-auto flex max-w-screen-md flex-col items-center gap-4 text-center">
          <Text as="h1" size="xl">
            {content.hero.title}
          </Text>
          <Text>{content.hero.description}</Text>
          <ul>
            {content.hero.steps.map((step, index) => (
              <li key={step}>
                {index !== 0 ? (
                  <span className="mx-auto my-1 block h-8 w-px border-l border-dashed border-gray-300" />
                ) : null}
                <Text as="span" bold black>
                  {step}
                </Text>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 flex">
          <Button href={content.hero.href} target="_blank" className="mx-auto" type="primary">
            {content.hero.button}
          </Button>
        </div>
      </section>

      <section className="pt-8 md:pt-12 lg:pt-16 xl:pt-20">
        <Text as="h2" size="lg" className="mb-6 text-center">
          {content.advantagesTitle}
        </Text>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {content.advantages.map((advantage, index) => {
            const GlyphIcon = ADVANTAGE_ICONS[index % ADVANTAGE_ICONS.length]!;
            return (
              <StaticIconCard
                key={advantage.title}
                icon={<Icon icon={GlyphIcon} size="lg" className="text-primary" />}
                title={advantage.title}
                text={advantage.text}
              />
            );
          })}
        </div>
      </section>

      <section className="pt-8 md:pt-12 lg:pt-16 xl:pt-20">
        <Text as="h2" size="lg" className="mb-6">
          {content.faqTitle}
        </Text>
        <Accordion
          items={content.faq.map((item, index) => ({
            id: `affiliate-faq-${index}`,
            title: item.title,
            content: (
              <div
                className="prose-sa pb-2 text-left"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            ),
          }))}
        />
      </section>
    </div>
  );
}
