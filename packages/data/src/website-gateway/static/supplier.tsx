import type { ReactNode } from "react";
import { Accordion, Button, Card, cn, Icon, Text } from "@swiss-activities/ui";
import {
  Banknote,
  Check,
  PersonStanding,
  Phone,
  PiggyBank,
} from "@swiss-activities/ui/icons";

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
export const SUPPLIER_TYPEFORM_DE = "https://k3qlq2fyp9o.typeform.com/to/CxWJub7f";
export const SUPPLIER_TYPEFORM_FR = "https://k3qlq2fyp9o.typeform.com/to/QPvg6Lh7";
export const SUPPLIER_TYPEFORM_EN = "https://k3qlq2fyp9o.typeform.com/to/nKnNLVdc";

export const DEFAULT_SUPPLIER_CONTENT: WebsiteGatewaySupplierContent = {
  title: "Swiss Activities: der grösste Freizeitaktivitäten Marktplatz der Schweiz",
  description:
    "Swiss Activities ist der grösste Freizeitaktivitäten Marktplatz der Schweiz. Mit uns erreichst du mehr Kunden und steigerst deine Buchungen.",
  hero: {
    title: "Swiss Activities - Die Destination für Freizeitaktivitäten in der Schweiz",
    button: "Freizeitpartner werden",
    href: SUPPLIER_TYPEFORM_DE,
  },
  numbers: {
    title:
      "Wie wir bei Swiss Activities unsere Freizeitpartner seit der Gründung unterstützt haben",
    blocks: [
      {
        title: "Webseitenbesucher",
        number: "7'500'000",
        text: "potentielle Kunden",
      },
      {
        title: "Gästevermittlungen",
        number: ">300'000",
        text: "Gäste vermittelt",
      },
      {
        title: "Kundensupport",
        number: ">10'000",
        text: "Gespräche geführt",
      },
      {
        title: "Reservationssysteme",
        number: ">20",
        text: "Tickets anstatt Voucher",
      },
    ],
  },
  why: {
    title: "Warum deine Freizeitprodukte auf Swiss Activities aufschalten",
    sales: {
      title: "Neukunden",
      description:
        "Erhalte neue Kunden aus dem In- und Ausland und verbessere deine Auslastung.",
    },
    support: {
      title: "Automatisierung",
      description:
        "Swiss Activities übernimmt deinen bestehenden Verkaufsprozess und übermittelt die Transaktionen an dein System.",
    },
    finances: {
      title: "Kein Risiko",
      description:
        "Keine Fixkosten oder Vorausinvestitionen. Du bezahlst nur bei einem vermittelten Kunden.",
    },
    local: {
      title: "Erschliessung neuer Kundesgemente",
      description:
        "Verbinde dich mit dem Reseller-Netzwerk von Swiss Activities und erweitere deine Reichweite im In- und Ausland.",
    },
  },
  who: {
    title: "Über 500 Freizeitpartner arbeiten mit Swiss Activities",
    partners: [
      "partner/bergbahnen/rigi.png",
      "partner/bergbahnen/schilthorn.png",
      "partner/bergbahnen/jungfrau.jpeg",
      "partner/bergbahnen/engelberg.svg",
      "partner/bergbahnen/pilatus.jpeg",
      "partner/bergbahnen/monte-tamaro.png",
      "partner/bergbahnen/brienz.png",
      "partner/bergbahnen/gornergrat.png",
      "partner/destinationen/rheinfelden.png",
      "partner/destinationen/basel.svg",
      "partner/destinationen/winterthur.svg",
      "partner/destinationen/interlaken.png",
      "partner/attraktionen/ballenberg.png",
      "partner/attraktionen/bls.png",
      "partner/attraktionen/cgn.png",
      "partner/attraktionen/chillon.jpeg",
      "partner/attraktionen/maestrani.png",
      "partner/attraktionen/verkehrshaus.png",
      "partner/attraktionen/vier.png",
      "partner/outdoor/best-of-switzerland.jpeg",
      "partner/outdoor/kayak.jpeg",
      "partner/outdoor/outdoorch.jpeg",
      "partner/outdoor/paragliding.png",
      "partner/outdoor/wine-tours.webp",
      "partner/outdoor/zermatters.png",
    ],
  },
  pricing: {
    title: "Preismodell",
    subtitle: "Bezahle nur bei der erfolgreichen Vermilttung eines Kunden",
    description:
      "Swiss Activities hilft dir dabei, lokal und global die passenden Verkaufskanäle zu identifizieren und deine Freizeitprodukte dort zu verkaufen, wo deine potentiellen Kunden sind. Da Swiss Activities keine Setup-Gebühr hat, erschliesst du neue Verkaufskanäle ohne zusätzliche Investitionen.",
    blocks: [
      {
        cost: "18% + CHF 0.30",
        subcost: "exkl. MwSt.",
        button: "Freizeitpartner werden",
        buttonLink: SUPPLIER_TYPEFORM_DE,
        includes: [
          "Aufschaltung von Freizeitaktivitäten auf Swiss Activities",
          "Unlimitierte Erfassung von Freizeitaktivitäten",
          "Erstellung der Produktbeschriebe durch unser Content-Team",
          "Verbindung zu einem von über 20 Reservationssystemen",
          "Persönlicher Partner-Support per Chat und Telefon",
          "Übernahme der Gäste-Kommunikation bei Fragen rund um die Aktivitäten",
          "Bearbeitung von Buchungs- und Stornierungsanfragen der Gäste",
          "Überwachung und Kontrolle aller Buchungen und Stornierungen",
          "Überwachung und Kontrolle der Abrechnungen",
          "Cash-Settlement vereinheitlicht – Abrechnung über Swiss Activities",
          "Sicherstellung des Vertriebsprozesses (keine Vouchers, sondern Tickets)",
          "Automatischer Zugang zum Affiliate-Netzwerk",
          "Aufschaltung der Aktivitäten auf dem Reseller-Netzwerk",
        ],
      },
    ],
  },
  tech: {
    title: "Reservations- und Ticketingssysteme",
    description:
      "Neben der Aufschaltung und Digitalisierung von sämtlichen Schweizer Freizeitprodukten ist es ein zentrales Ziel von Swiss Activities, den Wiederverkaufsprozesses von Freizeitprodukten im In- und Ausland zu vereinfachen und zu automatisieren. Die Vertriebslandschaft wird immer komplexer und wir helfen Wiederverkäufern dabei, den Anschluss an die Kundensegmente nicht zu verlieren. Umso zentraler ist die direkte Verbindung zwischen unseren Freizeit-Partnern und Swiss Activities. Wir sind laufend daran, neue Systeme zu implementieren. Falls dein Reservations- und Ticketingssystem nicht vorhanden ist, kannst du dich gerne unter sales@swissactivities.com bei uns melden.",
    partners: [
      "technology/trekksoft.webp",
      "technology/regiondo.webp",
      "technology/tomas.webp",
      "technology/waldhart.webp",
      "technology/experiencebank.webp",
      "technology/skidata.webp",
      "technology/axess.webp",
      "technology/smeetz.webp",
      "technology/eatwith.webp",
      "technology/fareharbor.webp",
      "technology/bookingkit.webp",
      "technology/ntree.webp",
      "technology/secutix.webp",
      "technology/tourcms.webp",
      "technology/sbb.webp",
    ],
    titleSoon: "Bald verfügbar",
    partnersSoon: ["technology/feratel.webp"],
  },
  faq: [
    {
      title: "Allegmeine Informationen für Freizeit-Partner",
      blocks: [
        {
          title: "Wer kann Freizeitpartner von Swiss Activities werden?",
          text: "Partner von Swiss Activities kann werden, wer Freizeitaktivitäten in der Schweiz vertreiben möchte. Deine Angebote können sehr vielfältig sein und der Fantasie sind kaum Grenzen gesetzt. Wir haben Aktivitäten, Tickets, Abenteuer, Touren, Mieten usw. in rund 100 Kategorien. Dazu gehören Backkurse für Einhorntorten genauso wie Tandem Gleitschirmflüge oder Eintrittstickets in Museen. Wichtig ist, dass es sich um Angebote handelt, die entweder in der Schweiz stattfinden oder die innerhalb eines Tagesausfluges ab der Schweiz möglich sind.",
        },
        {
          title: "Welche Reservationssysteme kann ich mit Swiss Activities verbinden?",
          list: [
            "Trekksoft",
            "Regiondo",
            "Waldhart",
            "Experience Bank",
            "Skidata",
            "Axess",
            "Tomas",
            "Smeetz",
            "Eatwith",
            "Fareharbor",
            "Booking Kit",
            "N-Tree",
            "Secutix",
            "TourCMS",
            "Palisis",
            "Bald verfügbar sind: SBB  sowie Feratel",
          ],
        },
        {
          title:
            "Ich arbeite nicht mit einem Reservationssystem. Kann ich meine Aktivitäten trotzdem über Swiss Activities verkaufen?",
          text: "Auch wenn du nicht mit einem Reservationssystem arbeitest, kannst du deine Aktivitäten bei uns aufschalten. Wir erstellen in diesem Fall manuell einen Kalender gemäss deinen Angaben. Falls du gerne ein Reservationssystem implementieren möchtest, nimm bitte mit uns Kontakt auf. Wir beraten dich gerne zu diesem Thema. Die Informationen, die wir von dir benötigen, sind folgende:",
          list: [
            "Zeitraum (Datum)",
            "Startzeit(en)",
            "Dauer",
            "Cut-off (wie lange im Voraus muss der Kunde spätestens buchen?)",
            "Preise pro Kategorie (Erwachsene, Kinder, Miete etc.)",
            "maximal verfügbare Plätze pro Slot",
          ],
        },
        {
          title: "Welche Informationen werden bei einer Buchung übermittelt?",
          text: "Wenn ein Kunde eine Buchung bei Swiss Activities tätigt, erhält er eine Bestätigungs E-Mail mit allen wichtigen Informationen. Dazu gehören unter anderem auch deine Kontaktdaten, damit er sich bei Fragen direkt bei dir melden kann.",
          list: [
            "Name der Aktivität",
            "Datum",
            "Zeit",
            "Treffpunkt",
            "Anzahl gebuchte Tickets",
            "Deine Kontaktdaten (E-Mail und Telefon)",
          ],
        },
        {
          title:
            "Werden auf Swiss Activities die gleichen Preise für meine Aktivitäten publiziert wie auf meiner Webseite?",
          text: "Ja, bei uns bezahlt der Kunde gleich viel, wie wenn er direkt bei dir buchen würde. Dies ist für dich ebenso wichtig wie für uns. Falls die Preise an verschiedenen Orten unterschiedlich hoch sind, wird der Kunde das merken, was zu Reklamationen und Unverständnis führt. So laufen wir beide das Risiko, einen wiederkehrenden Kunden zu verlieren.",
        },
        {
          title: "Wie lange ist die Stornofrist bei Swiss Activities?",
          text: "Der Kunde hat bei Swiss Activities die Möglichkeit, bis 24 Stunden vor der Aktivität kostenlos zu stornieren. Wenn du eine nicht stornierbare Aktivität aufschalten möchtest, können wir das so übernehmen. Allerdings haben wir die Erfahrung gemacht, dass wir mehr Buchungen vermitteln bei Aktivitäten, die die Möglichkeit zur Stornierung anbieten. Solltest du die Buchung stornieren müssen, kannst du dies ebenfalls tun. Informiere dazu umgehend den Kunden und teile es uns ebenfalls mit, damit wir eine Rückerstattung veranlassen können. ",
        },
        {
          title: "Wie wird mit nachträglichen Stornierungen umgegangen?",
          text: "Falls wir über unser Stornierungsformular eine Anfrage für eine nachträgliche Stornierung erhalten, führen wir nie eine Rückerstattung aus, ohne vorher Rücksprache mit dir gehalten zu haben. Um Betrugsfälle zu vermeiden, holen wir immer dein Einverständnis ein, um die Schilderung des Kunden zu bestätigen. Nur, wenn wir dein OK haben, lösen wir nachträglich eine Rückerstattung aus.",
        },
      ],
    },
    {
      title: "Aufschaltungsprozess von Freizeit-Produkten",
      blocks: [
        {
          title: "Wie kann ich meine Angebote bei Swiss Activities aufschalten?",
          text: "Wenn du Freizeitpartner von Swiss Activities werden und deine Angebote aufschalten möchtest, gibt es folgende Schritte zu durchlaufen:",
          list: [
            "Melde dich zuerst als Freizeitpartner an.",
            "Fülle pro Aktivität, die du aufschalten möchtest, ein Formular aus. Den Link dazu erhältst du, nachdem wir deine Registrierung bestätigt haben.",
            "Wir schreiben und erfassen deine Aktivitäten in der Regel innerhalb von zwei Wochen.",
            "Sobald die Aktivitäten live sind, informieren wir dich per E-Mail.",
          ],
        },
        {
          title:
            "Welche Informationen werden für das Aufschalten meiner Aktivitäten benötigt?",
          text: "Nachdem du dich als Freizeitpartner bei uns angemeldet hast, senden wir dir ein Formular, über das du deine Aktivitäten eintragen kannst. Um diese aufschalten zu können, benötigen wir von dir folgende Angaben:",
          list: [
            "Angaben zum Reservationssystem (falls vorhanden)",
            "Titel der Aktivität",
            "Link zur Aktivität",
            "Mindestens 4 Fotos pro Aktivität",
            "Angaben zu Daten, Zeit und Dauer, falls du kein Reservationssystem nutzt",
            "Allfällige Informationen zu Alter, Sprachen, Gewicht usw.",
            "Eignung der Aktivität: Hund, Kinderwagen, Rollstuhl, Familien usw.",
            "Exakter Treffpunkt",
          ],
        },
        {
          title: "Kann ich meinen Eintrag jederzeit löschen?",
          text: "Ja, du kannst jederzeit vom Vertrag zurücktreten. Es gibt keine minimale Vertragslaufzeit und es entstehen aus der Kündigung keine Kosten.",
        },
        {
          title: "Was mache ich, wenn ich etwas in einer Aktivität ändern möchte?",
          text: "Falls du Änderungswünsche im Content hast oder Preise anpassen möchtest - sofern du kein Reservationssystem benutzt - kannst du uns dies per E-Mail mitteilen.",
        },
        {
          title: "Wie kontaktiere ich den Kunden?",
          text: "Nach jeder Buchung erhältst du eine Bestätigungs E-Mail von uns mit den Angaben des Kunden. Dort findest du seinen Namen, seine E-Mail Adresse und seine Telefonnummer, um ihn zu kontaktieren.",
        },
        {
          title: "Wie erhalte ich mein Geld?",
          text: "Die Auszahlung aller offenen Beträge erfolgt jeweils nach dem Servicedatum und wird zu Beginn des folgenden Monats automatisch überwiesen. Dabei werden sämtliche Buchungen, die im vergangenen Monat stattgefunden haben, gesammelt abgerechnet und in einer einzigen Auszahlung zusammengefasst.",
        },
      ],
    },
  ],
};

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
    <img
      alt=""
      loading="lazy"
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
        <img
          alt=""
          loading="lazy"
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
