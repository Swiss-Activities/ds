/**
 * The static one-off pages' content constants — pure data, no components.
 * Living apart keeps consumers that only need the copy (the web renderer's
 * localization layer, the storybook fixtures) from dragging every marketing
 * page component into their bundle. Type imports back into the component
 * files are erased at compile time, so there is no runtime edge.
 */
import type { WebsiteGatewayAffiliateContent } from "./affiliate";
import type { WebsiteGatewaySupplierContent } from "./supplier";
import type { WebsiteGatewayAppsContent } from "./apps";
import type { WebsiteGatewayAboutEmployee, WebsiteGatewayAboutContent } from "./about";
import type { WebsiteGatewayVouchersContent } from "./vouchers";

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

export const APPS_IOS_URL = "https://apps.apple.com/app/swiss-activities/id6450682217";

export const APPS_ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.swissactivities.app13776";

export const DEFAULT_APPS_CONTENT: WebsiteGatewayAppsContent = {
  title: "Swiss Activities App",
  description:
    "Erlebe die Schweiz mit der Swiss Activities App – entdecke, vergleiche und buche Freizeitaktivitäten direkt auf deinem Smartphone.",
  hero: {
    title: "Dein Schweizer Abenteuer in der Tasche",
    description:
      "Mit der Swiss Activities App erhältst du direkten Zugriff auf über 3000 Aktivitäten in der ganzen Schweiz. Finde Erlebnisse, buche in Sekunden und behalte all deine Tickets und Buchungen jederzeit im Blick.",
    features: [
      "Tickets jederzeit griffbereit",
      "Buchungen einfach verwalten",
      "Neue Erlebnisse für jeden Geschmack entdecken",
      "Tickets auch offline verfügbar",
    ],
  },
  appStoreSrc: "/assets/appstore/app/de_CH.svg",
  googlePlaySrc: "/assets/appstore/play/de_CH.png",
  appStoreHref: APPS_IOS_URL,
  googlePlayHref: APPS_ANDROID_URL,
};

export const DEFAULT_ABOUT_EMPLOYEES: WebsiteGatewayAboutEmployee[] = [
  {
    id: "1",
    name: "Mathias Graf",
    role: "Co-Founder",
    imageUrl:
      "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/DSC_01031_b9fbd8f3c2.jpg",
  },
  {
    id: "3",
    name: "Elke Huber",
    role: "Content Writer",
    imageUrl:
      "https://fra1.digitaloceanspaces.com/contentapi.staging.swissactivities/70a55f8607c96dfc84396f6e0b2d668d.jpeg",
  },
  {
    id: "8",
    name: "Seraina Zellweger",
    role: "Head of Content",
    imageUrl:
      "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/DSC_01000_24cd3d349a.jpg",
  },
  {
    id: "9",
    name: "Reto Graf",
    role: "Board Member",
    imageUrl:
      "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/1609586423766_1_35f7a6bf5e.jpeg",
  },
  {
    id: "10",
    name: "Philippe Gerber",
    role: "Advisory Board",
    imageUrl:
      "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/1629504317881_48ed3c208c.jpeg",
  },
  {
    id: "11",
    name: "Stephan Zimmermann",
    role: "Chairman of the Board",
    imageUrl:
      "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/1640336933099_44100ffa05.jpeg",
  },
  {
    id: "12",
    name: "Dennis Josek",
    role: "Design/Frontend developer",
    imageUrl:
      "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/DSC_01011_5c888c6bd3.jpg",
  },
  {
    id: "14",
    name: "Walter Schärer",
    role: "Advisory Board",
    imageUrl:
      "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/1638386121138_035ce5d4dc.jpeg",
  },
  {
    id: "15",
    name: "Dr. Martin Widmer",
    role: "Advisory Board",
    imageUrl:
      "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/1622664341759_68f1b701fd.jpeg",
  },
  {
    id: "18",
    name: "Sandip Limbachiya",
    role: "Senior Backend Developer",
    imageUrl:
      "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/Sandip_fuer_Webseite_8bbdd39ba5.png",
  },
  {
    id: "20",
    name: "Michael Jenny",
    role: "Board Member",
    imageUrl:
      "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/1640246023162_4b0b1fd744.jpeg",
  },
  {
    id: "23",
    name: "Denis Bruch",
    role: "Head of Operations",
    imageUrl: "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/denis_6654e6f9da.png",
  },
  {
    id: "24",
    name: "Marco Demont",
    role: "Chief Sales Officer",
    imageUrl:
      "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/2023_08_16_15_41_18_195c3677bb.png",
  },
];

export const DEFAULT_ABOUT_CONTENT: WebsiteGatewayAboutContent = {
  hero: {
    title: "Schweizer Freizeitaktivitäten finden",
    text: "Swiss Activities ist deine Destination für Freizeitaktivitäten in der Schweiz. Auf Swiss Activities findest du unzählige Freizeitaktivitäten, kannst diese miteinander vergleichen und mit wenigen Klicks buchen. Nie war es leichter, in der Schweiz Aktivitäten für deine Freizeit zu finden.",
  },
  who: {
    title: "Wer wir sind",
    text: "Wir sind ein motiviertes Team, das für Freizeitaktivitäten in der Schweiz brennt. Wir kennen das Land und die Leute. Selber neue Aktivitäten auszuprobieren ist unsere Leidenschaft. Darum haben wir Swiss Activities entwickelt.",
  },
  start: {
    title: "Unser Start",
    text: "Als wir im 2020 feststellten, dass wir nicht mehr Reisen konnten, haben wir eine Schweizer Freizeitaktivitäten Plattform gesucht mit Ausrichtung auf die Schweizerinnen und Schweizer, aber keine gefunden. Dass war der Startschuss der Freizeitaktivitäten Destination Swiss Activities.",
    milestones: [
      { date: "März 2020", title: "Bootstrapping Swiss Activities als Geschäftsmodell" },
      { date: "März 2021", title: "Firmengründung" },
      { date: "Juni 2021", title: "Lancierung eigene Plattform" },
      { date: "September 2021", title: "500 live buchbare Aktivitäten aufgeschaltet" },
      { date: "Dezember 2021", title: "Pre-Seed Kapitalrunde abgeschlossen" },
      { date: "März 2021", title: "Lancierung Affiliate Programm" },
      { date: "Mai 2021", title: "Lancierung B2B Partner Programm" },
    ],
  },
  partner: {
    title: "Wir helfen dir, neue Kundinnen und Kunden zu gewinnen",
    text: "Swiss Activities hilft dir, neue Kundinnen und Kunden zu finden. Wir arbeiten täglich daran, Swiss Activities zur grössten Destination für Freizeitaktivitäten in der Schweiz zu machen. Tausende von Menschen kommen jeden Tag auf www.swissactivities.com, um nach Freizeitaktivitäten in der Schweiz zu suchen. Indem du dein Angebot auf Swiss Activities zeigst, erreichst du neue Kundinnen und Kunden.",
  },
  kunden: {
    title: "Eine Destination mit allen Freizeitaktivitäten in der Schweiz ",
    text: "Unser Ziel ist es, alle Freizeitaktivitäten in der ganzen Schweiz auf www.swissactivities.com auffindbar zu machen. Damit machen wir das Finden, Vergleichen und Buchen von Freizeitaktivitäten für alle einfacher.",
  },
  promise: {
    title: "Unser Kunden-Versprechen",
    list: [
      "kein aufwändiges Telefonieren",
      "keine endlose Recherche auf unzähligen Webseiten",
      "direkt prüfbare Verfügbarkeiten",
      "sofortige Reservationen ohne Umweg",
      "keine Zusatzkosten Kosten",
      "unkomplizierte und schnelle Zahlungsmöglichkeiten",
      "keine mühsamen Warteschlangen",
      "Übersicht von attraktiven Vergünstigungen",
      "lokale Angebote",
    ],
  },
  team: {
    title: "Das Swiss Activities Team",
  },
};

export const VOUCHER_SHOP_DE =
  "https://shop.e-guma.ch/swiss-activities/de/gutscheine?promocode=2024discount";

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
