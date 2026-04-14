import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionProduct, SectionReviewGrid, ContentBlocks, Rating, InfoBadge, Text, Card, Button } from "@swiss-activities/ui";

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function FireIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

const images = [
  <img key="1" src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Jungfraujoch_Plateau_Sonnenaufgang_Aletschgletscher_6b8bb53632.jpg" alt="Jungfraujoch" />,
  <img key="2" src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Grindelwald_First_Cliff_Walk_Eiger_Moench_Jungfrau_Bergpanorama_4653546e26.jpg" alt="Grindelwald" />,
  <img key="3" src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/omar_m_j_F7_U3wadbd0_unsplash_f301eb283f.jpg" alt="Pilatus" />,
  <img key="4" src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Jungfraujoch_Plateau_Sonnenaufgang_Aletschgletscher_6b8bb53632.jpg" alt="Jungfraujoch 2" />,
  <img key="5" src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Grindelwald_First_Cliff_Walk_Eiger_Moench_Jungfrau_Bergpanorama_4653546e26.jpg" alt="Grindelwald 2" />,
  <img key="6" src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/omar_m_j_F7_U3wadbd0_unsplash_f301eb283f.jpg" alt="Pilatus 2" />,
  <img key="7" src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Jungfraujoch_Plateau_Sonnenaufgang_Aletschgletscher_6b8bb53632.jpg" alt="Jungfraujoch 3" />,
  <img key="8" src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Grindelwald_First_Cliff_Walk_Eiger_Moench_Jungfrau_Bergpanorama_4653546e26.jpg" alt="Grindelwald 3" />,
  <img key="9" src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/omar_m_j_F7_U3wadbd0_unsplash_f301eb283f.jpg" alt="Pilatus 3" />,
  <img key="10" src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Jungfraujoch_Plateau_Sonnenaufgang_Aletschgletscher_6b8bb53632.jpg" alt="Jungfraujoch 4" />,
  <img key="11" src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Grindelwald_First_Cliff_Walk_Eiger_Moench_Jungfrau_Bergpanorama_4653546e26.jpg" alt="Grindelwald 4" />,
  <img key="12" src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/omar_m_j_F7_U3wadbd0_unsplash_f301eb283f.jpg" alt="Pilatus 4" />,
];

const meta = {
  title: "Sections/SectionProduct",
  component: SectionProduct,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SectionProduct>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Ab Interlaken: Ticket Jungfraujoch inkl. Sitzplatzreservation",
    images,
    backLabel: "Interlaken",
    backHref: "#",
    breadcrumbs: [
      { label: "Region Bern", href: "#" },
      { label: "Interlaken", href: "#" },
      { label: "Jungfraujoch", href: "#" },
    ],
    children: (
      <>
        <div className="mt-4 flex items-center gap-6 lg:mt-6">
          <Rating score={4.7} stacked />
          <div className="h-8 w-px bg-gray-200" />
          <InfoBadge
            icon={<TrophyIcon />}
            title="Bestseller"
            subtitle="Jungfraujoch"
          />
          <div className="h-8 w-px bg-gray-200" />
          <InfoBadge
            icon={<FireIcon />}
            title="Beliebt"
            subtitle="Familien"
          />
        </div>
        <Text className="mt-4 max-w-screen-sm text-balance lg:mt-6">
          Reise mit diesem Jungfraujoch Ticket ab Interlaken auf das Jungfraujoch. Auch bekannt als "Top of Europe" liegt das Jungfraujoch mit Europas höchstem Bahnhof auf 3454 m ü. M.
        </Text>
      </>
    ),
  },
  render: (args) => (
    <div className="min-h-screen bg-white">
      <SectionProduct {...args} className="py-6 lg:py-8" />
      <section className="bg-bg py-8">
        <div className="sa-container">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-7">
            <Card noPadding render={({ className, children }) => <Button variant="ghost" className={`${className} !justify-start !text-left !p-3`}>{children}</Button>}>
              <InfoBadge
                icon={<ClockIcon />}
                title="Derzeit geschlossen"
                subtitle="Öffnet morgen 08:15"
              />
            </Card>
            <Card noPadding render={({ className, children }) => <Button variant="ghost" className={`${className} !justify-start !text-left !p-3`}>{children}</Button>}>
              <InfoBadge
                icon={<CloudIcon />}
                title="Leicht Bewölkt"
                subtitle="-17° / 14°"
              />
            </Card>
            <Card noPadding render={({ className, children }) => <Button variant="ghost" className={`${className} !justify-start !text-left !p-3`}>{children}</Button>}>
              <InfoBadge
                icon={<MapPinIcon />}
                title="2 h von Zürich"
                subtitle="Interlaken Ost"
              />
            </Card>
            <Card noPadding render={({ className, children }) => <Button variant="ghost" className={`${className} !justify-start !text-left !p-3`}>{children}</Button>}>
              <InfoBadge
                icon={<StarIcon />}
                title="Sehr beliebt"
                subtitle="202 Bewertungen"
              />
            </Card>
          </div>
        </div>
        <SectionReviewGrid
          title="Bewertungen"
          as="div"
          className="pt-6"
          reviews={[
          {
            author: "Willhelmine",
            countryCode: "CH",
            date: "3 days ago",
            rating: 5,
            upvoteCount: 24,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla...",
            images: [
              <img key="1" src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Grindelwald_First_Cliff_Walk_Eiger_Moench_Jungfrau_Bergpanorama_4653546e26.jpg" alt="Photo 1" />,
              <img key="2" src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/omar_m_j_F7_U3wadbd0_unsplash_f301eb283f.jpg" alt="Photo 2" />,
              <img key="3" src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Jungfraujoch_Plateau_Sonnenaufgang_Aletschgletscher_6b8bb53632.jpg" alt="Photo 3" />,
            ],
            translatedFrom: "Chinese (simplified)",
          },
          {
            author: "Marco",
            countryCode: "DE",
            date: "1 week ago",
            rating: 5,
            upvoteCount: 12,
            text: "Tolles Erlebnis! Die Aussicht vom Jungfraujoch ist atemberaubend. Würde es jedem empfehlen der in der Schweiz ist.",
          },
          {
            author: "Sarah",
            countryCode: "GB",
            date: "2 weeks ago",
            rating: 4,
            upvoteCount: 8,
            text: "Amazing experience! The train ride through the Eiger was spectacular. Only downside was the crowds at the top.",
          },
          {
            author: "Yuki",
            countryCode: "JP",
            date: "3 weeks ago",
            rating: 5,
            upvoteCount: 15,
            text: "素晴らしい体験でした。アレッチ氷河の景色は一生忘れません。チケットの予約もスムーズでした。",
            translatedFrom: "Japanese",
          },
          {
            author: "Pierre",
            countryCode: "FR",
            date: "1 month ago",
            rating: 5,
            upvoteCount: 6,
            text: "Une expérience inoubliable! La vue depuis le Sphinx est à couper le souffle. Je recommande vivement.",
            translatedFrom: "French",
          },
          ]}
        />
      </section>
      <section className="py-8">
        <div className="sa-container">
          <ContentBlocks
            items={[
              {
                id: "leistungen",
                title: "Leistungen",
                content: "<p>Jungfraujoch Ticket ab Interlaken und zurück</p><p>Sitzplatzreservation</p><p>Zugang Aussichtsplattform Sphinx, Plateau und Eispalast</p>",
              },
              {
                id: "hoehepunkte",
                title: "Höhepunkte",
                content: "<ul><li>Fahre mit der spektakulären Jungfraubahn durch das Massiv des Eiger und Mönch zum \"Top of Europe\"</li><li>Buche deine garantierte Sitzplatzreservation gleich mit und reise ohne Warteschlange aufs Jungfraujoch</li><li>Betrachte den Gletscher aus nächster Nähe bei einem Zwischenhalt an der Station Eismeer</li><li>Wähle deine Strecke via Lauterbrunnen oder via Grindelwald</li><li>Geniesse die Aussicht auf die Eiger Nordwand bei Anreise über Grindelwald</li><li>Komme am höchstgelegenen Bahnhof Europas auf 3454 m ü. M. an</li><li>Besuche die Aussichtsplattform Sphinx mit Blick über den Aletschgletscher</li><li>Bestaune die Eisskulpturen im Eispalast auf dem Jungfraujoch</li><li>Vergnüge dich im Schnee, auch im Sommer!</li></ul>",
              },
              {
                id: "ticket-jungfraujoch",
                title: "Ticket Jungfraujoch ab Interlaken",
                content: "<p>Ab Interlaken Ost kannst du mit deinem Jungfraujoch Ticket zwischen zwei Routen auswählen – entweder über Lauterbrunnen oder über Grindelwald.</p><p>Über <strong>Grindelwald</strong> fährst du ab Grindelwald Terminal mit der Seilbahn \"Eiger Express\" zur Station Eigergletscher. In nur 15 min bringt dich die 2020 eröffnete, moderne Seilbahn ab Grindelwald zur Station.</p><p>Über <strong>Lauterbrunnen</strong> bringt dich die Zahnradbahn via Wengen zur Kleinen Scheidegg.</p><p>Strecke Interlaken Ost - Grindelwald: ca. 90 min | Strecke Interlaken Ost - Lauterbrunnen: ca. 120 min</p>",
              },
              {
                id: "praktische-informationen",
                title: "Praktische Informationen",
                content: "<p>Hunde benötigen ein eigenes Ticket zwischen Eigergletscher und Jungfraujoch sowie retour.</p><h3>Mit Rollstuhl oder Kinderwagen unterwegs</h3><p>Mit Rollstuhl oder Kinderwagen ist eine Anreise mit der 3S-Bahn Eiger Express ab Grindelwald Terminal anzuraten.</p><h3>Swiss Activities Tipp</h3><p>Eine ca. 45-minütige Wanderung führt dich zwischen März und Oktober vom Jungfraujoch über den Gletscher zur Mönchsjochhütte auf 3657 m ü. M.</p>",
              },
              {
                id: "wichtige-informationen",
                title: "Wichtige Informationen",
                content: "<p>Finde dich mindestens 10 min vor der reservierten Zeit am Bahnhof Interlaken (Bergfahrt) und Jungfraujoch Bahnhof (Talfahrt) ein.</p><p>Ziehe warme Kleider an, auch im Sommer.</p>",
              },
            ]}
          />
        </div>
      </section>
    </div>
  ),
};
