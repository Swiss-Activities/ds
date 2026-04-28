import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Icon,
  SectionNonBookable,
  type SectionNonBookableProps,
} from "@swiss-activities/ui";
import {
  Check,
  Clock3,
  Flame,
  MapPin,
  Mountain,
  Store,
  Ticket,
} from "@swiss-activities/ui/icons";
import { getRelatedActivityItems } from "../../story-data";
import { Page } from "../page";

const relatedActivities = getRelatedActivityItems();

function image(src: string, alt: string) {
  return { src, alt };
}

const stories = {
  museum: {
    title: "Museum Hans Erni",
    categoryLabel: "Museum",
    categoryTitleLabel: "Kategorie",
    locationLabel: "Region Luzern | Luzern",
    locationTitleLabel: "Ort",
    images: [
      image(
        "https://www.museums.ch/admin/data/files/organisation_image/image/1309/_an_5755-min_list.jpg",
        "Museum Hans Erni"
      ),
      image(
        "https://www.museums.ch/admin/data/files/organisation_image/image/1309/_an_5755-min_detail.jpg",
        "Ausstellung Museum Hans Erni"
      ),
    ],
    description:
      "Das Hans Erni-Museum auf dem Gelaende des Verkehrshauses der Schweiz in Luzern zeigt auf mehreren Etagen einen Querschnitt durch das umfassende Werk des Schweizer Malers.",
    highlights: [
      {
        icon: <Icon icon={Clock3} size="md" />,
        title: "Geoeffnet",
        subtitle: "Heute bis 17:00",
      },
      {
        icon: <Icon icon={Check} size="md" />,
        title: "Empfohlen fuer Besuch",
        subtitle: "3 h",
      },
      {
        icon: <Icon icon={Store} size="md" />,
        title: "Befindet sich",
        subtitle: "Luzern",
      },
      {
        icon: <Icon icon={Ticket} size="md" />,
        title: "Aktuelle Sonderausstellungen",
        subtitle: "Im Eintrittspreis enthalten",
      },
    ],
    detailSections: [
      {
        title: "Empfehlungen",
        items: [
          { label: "Museumsbesuch", status: "available" },
          { label: "KulturLegi", status: "available" },
          { label: "Familienfreundlich", status: "available" },
        ],
      },
      {
        title: "Infrastruktur",
        items: [
          { label: "Museumsshop", status: "available" },
          { label: "Cafe", status: "available" },
          { label: "Parkplaetze", status: "available" },
        ],
      },
    ],
    sourceLabel: "Zur Website",
    sourceHref: "#",
    relatedActivitiesTitle: "Weitere Museen in Luzern",
  },
  swimming: {
    title: "Strandbad Buchhorn",
    categoryLabel: "Schwimmbad",
    categoryTitleLabel: "Kategorie",
    locationLabel: "Region St.Gallen | Arbon",
    locationTitleLabel: "Ort",
    images: [
      image(
        "https://static.stnet.ch/sospo/images/329/1533-m.jpg",
        "Strandbad Buchhorn"
      ),
    ],
    description:
      "Ruhige, idyllische Lage am Bodensee, historische Badehuette aus den Anfaengen der oeffentlichen Badekultur. Vom Schweizer Heimatschutz als eines der schoensten Baeder der Schweiz ausgezeichnet.",
    highlights: [
      {
        icon: <Icon icon={Clock3} size="md" />,
        title: "Geoeffnet bis 19:00",
        subtitle: "Empfohlene Besuchszeit: 3 h",
      },
      {
        icon: <Icon icon={MapPin} size="md" />,
        title: "Leicht erreichbar",
        subtitle: "Direkt am Bodensee",
      },
      {
        icon: <Icon icon={Mountain} size="md" />,
        title: "15 Minuten entfernt von Zuerich",
        subtitle: "Sommer und Badesaison",
      },
    ],
    detailSections: [
      {
        title: "Ausstattung",
        items: [
          { label: "Schwimmbahn", value: "50 m" },
          { label: "Kiosk", status: "available" },
          { label: "Diving Board", status: "available" },
          { label: "Slide", status: "unavailable" },
        ],
      },
      {
        title: "Infrastruktur",
        items: [
          { label: "Changing Rooms", value: "2" },
          { label: "Showers", status: "available" },
          { label: "Lockers", status: "unavailable" },
          { label: "Food Service", status: "unavailable" },
        ],
      },
    ],
    sourceLabel: "Details ansehen",
    sourceHref: "#",
    relatedActivitiesTitle: "Weitere Spielplaetze in Kuesnacht",
  },
  fireplace: {
    title: "Feuerstelle Hasenrain II",
    categoryLabel: "Feuerstelle",
    categoryTitleLabel: "Kategorie",
    locationLabel: "Region Zuerich | Uetikon am See",
    locationTitleLabel: "Ort",
    images: [
      image(
        "https://api.grillstelle.ch/images/148/288.jpg",
        "Feuerstelle Hasenrain II"
      ),
      image(
        "https://api.grillstelle.ch/images/148/289.jpg",
        "Feuerstelle im Wald"
      ),
    ],
    description:
      "Eine von zwei Feuerstellen mit verstellbarem Rost auf dem Hasenrain-Aussichtspunkt oberhalb Albisrieden. Die Waldhuette gleich nebenan kann via albisrieden.ch gemietet werden.",
    highlights: [
      {
        icon: <Icon icon={Clock3} size="md" />,
        title: "Geoeffnet",
        subtitle: "Jederzeit zugaenglich",
      },
      {
        icon: <Icon icon={Flame} size="md" />,
        title: "Lohnt Besuch",
        subtitle: "Picknick und Feuerstelle",
      },
      {
        icon: <Icon icon={MapPin} size="md" />,
        title: "An bester Aussichtslage",
        subtitle: "Albisriedenstrasse 53, 8047 Zuerich",
      },
    ],
    detailSections: [
      {
        title: "Ausstattung",
        items: [
          { label: "Grillrost", status: "available" },
          { label: "Feuerholz", status: "available" },
          { label: "Unterstand", status: "unavailable" },
          { label: "Tisch", status: "available" },
        ],
      },
      {
        title: "Besonderheiten",
        items: [
          { label: "Aussichtspunkt", status: "available" },
          { label: "Mietbare Huette", status: "available" },
          { label: "Spielplatz in der Naehe", status: "unavailable" },
        ],
      },
    ],
    sourceLabel: "Quelle oeffnen",
    sourceHref: "#",
    relatedActivitiesTitle: "Weitere Feuerstellen in Zuerich",
  },
  playground: {
    title: "Spielplatz Hornanlage",
    categoryLabel: "Spielplatz",
    categoryTitleLabel: "Kategorie",
    locationLabel: "Region Zuerich | Kuesnacht",
    locationTitleLabel: "Ort",
    images: [
      image(
        "https://images.unsplash.com/photo-1596997000103-e597b3ca50df?auto=format&fit=crop&w=1400&q=80",
        "Spielplatz Hornanlage"
      ),
    ],
    description:
      "Reise mit diesem Jungfraujoch Ticket ab Interlaken auf das Jungfraujoch. Auch bekannt als Top of Europe gibt das Jungfraujoch mit Europas hoechstem Bahnhof auf 3454 m u. M. einen spielerischen Rahmen.",
    highlights: [
      {
        icon: <Icon icon={Clock3} size="md" />,
        title: "Geoeffnet",
        subtitle: "Jederzeit zugaenglich",
      },
      {
        icon: <Icon icon={Check} size="md" />,
        title: "Lohnt Besuch",
        subtitle: "Fuer Familien geeignet",
      },
      {
        icon: <Icon icon={MapPin} size="md" />,
        title: "Direkt am Zuerichsee",
        subtitle: "Seestrasse, 8700 Kuesnacht",
      },
    ],
    detailSections: [
      {
        title: "Spielgeraete",
        items: [
          { label: "Bauchschaukel", value: "2" },
          { label: "Klettergeraet", status: "available" },
          { label: "Sandkasten", status: "available" },
          { label: "Turmrutsche", status: "available" },
        ],
      },
      {
        title: "Infrastruktur",
        items: [
          { label: "Oeffentliche Toiletten", value: "2" },
          { label: "Sitz- und Liegewiese", status: "available" },
          { label: "Trinkwasser", status: "unavailable" },
        ],
      },
    ],
    sourceLabel: "Details ansehen",
    sourceHref: "#",
    relatedActivitiesTitle: "Weitere Spielplaetze in Kuesnacht",
  },
  castle: {
    title: "Schloss Vullierens",
    categoryLabel: "Schloss / Ruine",
    categoryTitleLabel: "Kategorie",
    locationLabel: "Region Waadt | Vullierens",
    locationTitleLabel: "Ort",
    images: [
      image(
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=80",
        "Schloss Vullierens"
      ),
    ],
    description:
      "Das Schloss Vullierens, auf den Grundmauern einer Burg aus dem 13. Jahrhundert errichtet, gilt als beispielhaft fuer die Architektur des fruehen 18. Jahrhunderts.",
    highlights: [
      {
        icon: <Icon icon={Clock3} size="md" />,
        title: "Saisonal geoeffnet",
        subtitle: "Gaerten und Schlosspark",
      },
      {
        icon: <Icon icon={MapPin} size="md" />,
        title: "Historischer Ort",
        subtitle: "Waadtlaender Landschaft",
      },
      {
        icon: <Icon icon={Ticket} size="md" />,
        title: "Besuch vor Ort",
        subtitle: "Eintritt je nach Saison",
      },
    ],
    detailSections: [
      {
        title: "Besuch",
        items: [
          { label: "Schlosspark", status: "available" },
          { label: "Gartenanlage", status: "available" },
          { label: "Familien geeignet", status: "available" },
        ],
      },
      {
        title: "Infrastruktur",
        items: [
          { label: "Parkplaetze", status: "available" },
          { label: "Restaurant", status: "available" },
          { label: "OeV erreichbar", status: "available" },
        ],
      },
    ],
    sourceLabel: "Quelle oeffnen",
    sourceHref: "#",
    relatedActivitiesTitle: "Weitere Schloesser und Ruinen",
  },
  movie: {
    title: "The Old Man & the Gun",
    categoryLabel: "Film",
    categoryTitleLabel: "Kategorie",
    locationLabel: "Cinefile",
    locationTitleLabel: "Ort",
    images: [
      image(
        "https://img.cinefile.ch/content/images/poster150/c1nef1l311357f61-c1c7-445c-905e-8045c7ad1e31.jpg",
        "The Old Man & the Gun"
      ),
    ],
    description:
      "Forrest Tucker fuehrt ein Leben von Bankraub zu Bankraub. Sein Alter haelt ihn nicht von dem ungewoehnlichen und erfuellenden Beruf ab.",
    highlights: [
      {
        icon: <Icon icon={Ticket} size="md" />,
        title: "Online verfuegbar",
        subtitle: "Streamen auf Cinefile",
      },
      {
        icon: <Icon icon={Clock3} size="md" />,
        title: "Spielfilm",
        subtitle: "Unterhaltung fuer zuhause",
      },
      {
        icon: <Icon icon={Check} size="md" />,
        title: "Redaktionell ausgewaehlt",
        subtitle: "Filmempfehlung",
      },
    ],
    detailSections: [
      {
        title: "Film",
        items: [
          { label: "Genre", value: "Krimi" },
          { label: "Streaming", status: "available" },
          { label: "Kinostart", value: "2018" },
        ],
      },
      {
        title: "Verfuegbarkeit",
        items: [
          { label: "Online ansehen", status: "available" },
          { label: "Familienangebot", status: "unavailable" },
        ],
      },
    ],
    sourceLabel: "Film ansehen",
    sourceHref: "#",
    relatedActivitiesTitle: "Weitere Filme",
  },
  exhibition: {
    title: "Dauerausstellung Museum Burg Zug",
    categoryLabel: "Ausstellung",
    categoryTitleLabel: "Kategorie",
    locationLabel: "Museum Burg Zug",
    locationTitleLabel: "Ort",
    images: [
      image(
        "https://www.museums.ch/admin/data/files/page_event/header_image/1504/01_9_header.jpg?lm=1771580926",
        "Dauerausstellung Museum Burg Zug"
      ),
    ],
    description:
      "Im Museum Burg Zug wird Geschichte lebendig. Ob Hellebarde oder historisches Handwerk, die Ausstellung laesst Gaeste aktiv an damals teilhaben.",
    highlights: [
      {
        icon: <Icon icon={Clock3} size="md" />,
        title: "Dauerausstellung",
        subtitle: "Ganzjaehrig aktiv",
      },
      {
        icon: <Icon icon={Store} size="md" />,
        title: "Museum Burg Zug",
        subtitle: "Zug",
      },
      {
        icon: <Icon icon={Ticket} size="md" />,
        title: "Eintritt",
        subtitle: "Informationen vor Ort",
      },
    ],
    detailSections: [
      {
        title: "Ausstellung",
        items: [
          { label: "Aktiv", status: "available" },
          { label: "Permanent", status: "available" },
          { label: "Familien geeignet", status: "available" },
        ],
      },
      {
        title: "Museum",
        items: [
          { label: "Oeffnungszeiten vorhanden", status: "available" },
          { label: "Website", status: "available" },
        ],
      },
    ],
    sourceLabel: "Zur Ausstellung",
    sourceHref: "#",
    relatedActivitiesTitle: "Mehr in diesem Museum",
  },
  castleEvent: {
    title: "Streichtrio Douze Cordes",
    categoryLabel: "Schloss-Event",
    categoryTitleLabel: "Kategorie",
    locationLabel: "Schloss Jegenstorf",
    locationTitleLabel: "Ort",
    images: [
      image(
        "https://d37dhr5745n0y2.cloudfront.net/d/50/9e/d509e463e26dc6a40243b489d5fa3c3fdc89cf47_926041906.jpg",
        "Schloss Jegenstorf"
      ),
    ],
    description:
      "Am 29. Mai um 19:00 Uhr findet im Schloss Jegenstorf ein Streichtrio-Konzert mit Meisterwerken aus dem 18. Jahrhundert statt.",
    highlights: [
      {
        icon: <Icon icon={Clock3} size="md" />,
        title: "29. Mai, 19:00 Uhr",
        subtitle: "Einmalige Veranstaltung",
      },
      {
        icon: <Icon icon={MapPin} size="md" />,
        title: "Schloss Jegenstorf",
        subtitle: "Historischer Veranstaltungsort",
      },
      {
        icon: <Icon icon={Ticket} size="md" />,
        title: "Preisinfo",
        subtitle: "Tickets und Eintritt vor Ort",
      },
    ],
    detailSections: [
      {
        title: "Veranstaltung",
        items: [
          { label: "Konzert", status: "available" },
          { label: "Startzeit", value: "19:00" },
          { label: "Eintritt", status: "available" },
        ],
      },
      {
        title: "Ort",
        items: [
          { label: "Schloss", status: "available" },
          { label: "Homepage", status: "available" },
        ],
      },
    ],
    sourceLabel: "Event ansehen",
    sourceHref: "#",
    relatedActivitiesTitle: "Weitere Events im Schloss",
  },
} satisfies Record<string, SectionNonBookableProps>;

function SectionNonBookableStoryPage(args: SectionNonBookableProps) {
  return (
    <Page className="bg-white">
      <SectionNonBookable {...args} relatedActivities={relatedActivities} />
    </Page>
  );
}

const meta = {
  title: "Sections/SectionNonBookable",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<SectionNonBookableProps>;

export const Museum: Story = {
  args: stories.museum,
  render: (args) => <SectionNonBookableStoryPage {...args} />,
};

export const SwimmingBathing: Story = {
  args: stories.swimming,
  render: (args) => <SectionNonBookableStoryPage {...args} />,
};

export const Fireplace: Story = {
  args: stories.fireplace,
  render: (args) => <SectionNonBookableStoryPage {...args} />,
};

export const Playground: Story = {
  args: stories.playground,
  render: (args) => <SectionNonBookableStoryPage {...args} />,
};

export const CastleRuin: Story = {
  args: stories.castle,
  render: (args) => <SectionNonBookableStoryPage {...args} />,
};

export const Movie: Story = {
  args: stories.movie,
  render: (args) => <SectionNonBookableStoryPage {...args} />,
};

export const Exhibition: Story = {
  args: stories.exhibition,
  render: (args) => <SectionNonBookableStoryPage {...args} />,
};

export const CastleEvent: Story = {
  args: stories.castleEvent,
  render: (args) => <SectionNonBookableStoryPage {...args} />,
};
