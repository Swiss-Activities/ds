import type { ReactNode } from "react";
import { Accordion, Button, Card, Icon, Text } from "@swiss-activities/ui";
import { FileCode, Percent, PersonStanding, SquarePen, Ticket, UserRound } from "@swiss-activities/ui/icons";

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

export const AFFILIATE_SIGNUP_DE =
  "https://swissactivities.tapfiliate.com/publisher/signup/swiss-activities-affiliate-programm-deutsch/";
export const AFFILIATE_SIGNUP_EN =
  "https://swissactivities.tapfiliate.com/publisher/signup/swiss-activities-affiliate-program/";

export const DEFAULT_AFFILIATE_CONTENT: WebsiteGatewayAffiliateContent = {
  hero: {
    title: "Werde jetzt Affiliate Partner von Swiss Activities",
    description:
      "Registriere dich für das Affiliate Programm von Swiss Activities und profitiere von attraktiven Einbindungstools, 1% bis 5 % Kommission und 45 Tagen Cookie Laufdauer.",
    steps: [
      "Melde dich an",
      "Implementiere unsere Aktivitäten",
      "Generiere Buchungen und verdiene dabei Geld",
    ],
    button: "Jetzt anmelden",
    href: AFFILIATE_SIGNUP_DE,
  },
  advantagesTitle: "Was sind deine Vorteile als Affiliate-Partner von Swiss Activities?",
  advantages: [
    {
      title: "1'500+ Freizeitaktivitäten",
      text: "Als Affiliate-Partner von Swiss Activities hast du mit wenigen Klicks Zugriff auf über 1'500 Freizeitaktivitäten in der ganzen Schweiz.",
    },
    {
      title: "Attraktive Konditionen",
      text: "Für jede vermittelte Buchung erhältst du 1% bis 5% Kommission. Die Cookie Laufzeit beträgt 45 Tage.",
    },
    {
      title: "Inspiriere deine Leser",
      text: "Belebe deinen Blog oder deine Webseite mit inspirierenden Inhalten und helfe deiner Community, bei der Freizeitplanung Zeit zu sparen.",
    },
    {
      title: "Unkomplizierte Anmeldung",
      text: "Profitiere von einer unkomplizierten und schnellen Anmeldung.",
    },
    {
      title: "Direkter Ticketverkauf",
      text: "Du hast die Möglichkeit, Tickets direkt auf deiner Webseite zu verkaufen, ohne deine Leser zu uns weiterzuleiten.",
    },
    {
      title: "Custom HTML",
      text: "Dank unseren vielseitig und ansprechend gestalteten Custom HTML Tools kannst du deine Verkaufsmöglichkeiten personalisieren.",
    },
  ],
  faqTitle: "Die wichtigsten Fragen beantwortet",
  faq: [
    {
      title: "Wie funktioniert die Anmeldung zum Affiliate Programm von Swiss Activities?",
      text: "Melde dich im Formular auf dieser Seite mit allen erforderlichen Angaben an. Wir werden deine Anmeldung innerhalb eines Arbeitstages prüfen und dir deine Login-Daten bei Annahme per E-Mail zukommen lassen.",
    },
    {
      title: "Wie kann ich mich in mein Affiliate Partner Dashboard einloggen?",
      text: "Bei deiner Registrierung definierst du dein persönliches Passwort. Sobald wir deine Angaben geprüft haben, wirst du benachrichtigt und kannst dich über <a href='https://swissactivities.tapfiliate.com/login' target='_blank'>diesen Link</a> in dein Affiliate Dashboard einloggen.",
    },
    {
      title: "Wo finde ich weitere Informationen zum Affiliate Programm?",
      text: "In unserem Helpdesk findest du einerseits die <a href='https://intercom.help/swiss-activities/de/collections/3916117-affiliate-moglichkeiten-zur-einbindung' target='_blank'>Ersten Schritte</a> sowie die wichtigsten Fragen zur <a href='https://intercom.help/swiss-activities/de/collections/3916117-affiliate-moglichkeiten-zur-einbindung' target='_blank'>Einbindung unserer Aktivitäten</a> beschrieben. Ausserdem erhältst du nach deiner Registrierung eine Reihe von E-Mails mit hilfreichen Tipps.",
    },
    {
      title: "Wer kann Affiliate Partner von Swiss Activities werden?",
      text: "Wenn du einen Blog oder eine Webseite betreibst, die einen Bezug zum Schweizer Tourismus, zu Freizeitaktivitäten in der Schweiz oder zum Reisen allgemein hat, kannst du dich für unser Affiliate Programm registrieren. Auch wenn du einen Instagram, Pinterest oder Facebook Account hast, über den du einen Affiliate Link einfügen kannst, kannst du dich bei uns anmelden.",
    },
    {
      title: "Kann ich mich vom Affiliate Programm wieder abmelden?",
      text: "Selbstverständlich. Du bist an keine Mindestlaufzeit gebunden. Solltest du dein Konto löschen wollen, lass es uns per E-Mail oder per Chat wissen und wir werden alles Notwendige veranlassen.",
    },
    {
      title: "Wie viel Kommission erhalte ich pro vermittelte Buchung?",
      text: "Du erhältst zwischen 1% und 5% Kommission, wenn du uns einen Kunden vermittelst, der die Aktivität durchführt. Sollte der Kunde seine Buchung stornieren, können wir dir leider keine Kommission auszahlen.",
    },
  ],
};

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
        <div className="overflow-hidden rounded-lg border border-solid border-gray-200 px-4">
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
        </div>
      </section>
    </div>
  );
}
