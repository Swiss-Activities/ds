import { Card, Icon, Image, Text, cn } from "@swiss-activities/ui";
import {
  Banknote,
  BookMarked,
  CalendarDays,
  Contact,
  CreditCard,
  Earth,
  Globe,
  HandCoins,
  Luggage,
  Network,
  PersonStanding,
  Phone,
  Rocket,
  Route,
  Sprout,
  UserRound,
  Users,
} from "@swiss-activities/ui/icons";

/**
 * `/ueber-uns/` — 1:1 port of the legacy about page
 * (website/modules/pages/aboutUs/index.tsx + its SectionBlock): hero
 * two-column with the floating image collage, "Wer wir sind", the milestone
 * timeline on the gray gradient, the two alternating image/bordered-text
 * blocks, the nine-card customer promise grid and the team/advisory groups.
 * All copy via props; German defaults are the legacy `pages.about_us.*`
 * strings verbatim (including source typos). Employees arrive via a prop —
 * the legacy page loaded them from the content dump at build time.
 */

export interface WebsiteGatewayAboutEmployee {
  id: string;
  name: string;
  role: string;
  imageUrl: string | null;
}

export interface WebsiteGatewayAboutContent {
  hero: { title: string; text: string };
  who: { title: string; text: string };
  start: {
    title: string;
    text: string;
    milestones: Array<{ date: string; title: string }>;
  };
  partner: { title: string; text: string };
  kunden: { title: string; text: string };
  promise: { title: string; list: string[] };
  team: { title: string };
}

/**
 * The Swiss Activities team — snapshot of the legacy content dump
 * (website var/employees.json; the legacy build baked it the same way).
 * Roles are not localized on the legacy site either.
 */
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

/** Legacy milestone icon row (rocket-launch, suitcase, globe, person-skiing, seedling, address-book, users). */
const MILESTONE_ICONS = [Rocket, Luggage, Globe, PersonStanding, Sprout, Contact, Users];

/** Legacy promise icon row (phone, sitemap, calendar-days, book-bookmark, creative-commons-nc, credit-card, route, money-bill-simple-wave, earth-europe). */
const PROMISE_ICONS = [
  Phone,
  Network,
  CalendarDays,
  BookMarked,
  HandCoins,
  CreditCard,
  Route,
  Banknote,
  Earth,
];

const isAdvisory = (employee: WebsiteGatewayAboutEmployee) =>
  employee.role.includes("Advisory") ||
  employee.role.includes("Chairman") ||
  employee.role.includes("Board");

const employeeImageClass =
  "h-[100px] w-[100px] rounded-lg object-cover lg:h-[200px] lg:w-[200px] lg:self-center lg:justify-self-center";

export function WebsiteGatewayAboutPage({
  content = DEFAULT_ABOUT_CONTENT,
  assetBase = "/assets/about",
  employees = [],
}: {
  content?: WebsiteGatewayAboutContent;
  /** Base path of the static about imagery (img-1.jpg … img-6.jpg). */
  assetBase?: string;
  employees?: WebsiteGatewayAboutEmployee[];
}) {
  const blocks = [
    {
      title: content.partner.title,
      text: content.partner.text,
      img: `${assetBase}/img-4.jpg`,
      reverse: false,
    },
    {
      title: content.kunden.title,
      text: content.kunden.text,
      img: `${assetBase}/img-5.jpg`,
      reverse: true,
    },
  ];

  const teamGroups = [
    { title: content.team.title, members: employees.filter((employee) => !isAdvisory(employee)) },
    // The "Advisory" heading is hardcoded on the legacy page too.
    { title: "Advisory", members: employees.filter(isAdvisory) },
  ];

  return (
    <div>
      <section>
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-20 xl:gap-32">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <div className="h-[300px] overflow-hidden lg:h-auto">
              <Image
                src={`${assetBase}/img-1.jpg`}
                alt=""
                width={600}
                height={500}
                className="h-[300px] w-full object-cover lg:h-auto lg:rounded-xl"
              />
            </div>
            <div className="absolute -start-16 bottom-20 hidden h-[180px] w-[120px] overflow-hidden rounded-xl shadow-xl xl:block xl:w-[150px]">
              <Image
                src={`${assetBase}/img-2.jpg`}
                alt=""
                width={200}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -end-14 top-20 hidden h-[175px] w-[100px] overflow-hidden rounded-xl shadow-xl lg:block xl:w-[120px]">
              <Image
                src={`${assetBase}/img-3.jpg`}
                alt=""
                width={200}
                height={175}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-16 left-1/2 hidden h-[150px] w-[150px] -translate-x-1/2 overflow-hidden rounded-xl shadow-xl lg:block xl:w-[200px]">
              <Image
                src={`${assetBase}/img-4.jpg`}
                alt=""
                width={200}
                height={150}
                className="h-full w-full object-cover"
              />
            </div>
            {/* The legacy page floats a decorative red doodle SVG over the collage — intentionally omitted. */}
          </div>
          <div className="mt-6 flex w-full flex-col gap-4 lg:col-start-1 lg:row-start-1 lg:mt-0">
            <Text as="h1" size="xl">
              {content.hero.title}
            </Text>
            <Text size="display" className="max-w-screen-sm xl:me-8">
              {content.hero.text}
            </Text>
          </div>
        </div>
      </section>

      <section className="pt-8 md:pt-12 lg:pt-16 xl:pt-20">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 lg:gap-20 xl:gap-32">
          <div className="relative md:col-start-1 md:row-start-1">
            <Image
              src={`${assetBase}/img-6.jpg`}
              alt=""
              width={500}
              height={400}
              className="h-60 w-full rounded-xl object-cover saturate-[115%]"
            />
            {/* The legacy page floats a decorative red doodle SVG over this image — intentionally omitted. */}
          </div>
          <div className="mt-6 flex w-full flex-col gap-4 md:col-start-2 md:row-start-1 md:mt-0">
            <Text as="h2" size="lg">
              {content.who.title}
            </Text>
            <Text size="display" className="max-w-screen-sm">
              {content.who.text}
            </Text>
          </div>
        </div>
      </section>

      <section className="pt-8 md:pt-12 lg:pt-16 xl:pt-20">
        <div className="rounded-xl bg-gradient-to-bl from-gray-50 via-gray-100 to-slate-50 px-4 py-8 md:px-8 md:py-12 lg:py-16">
          <div className="space-y-8 md:flex md:flex-col md:items-center md:justify-center md:space-y-10 md:text-center lg:space-y-12">
            <div className="relative z-10 flex flex-col items-center gap-4 text-center">
              <Text as="h2" size="lg">
                {content.start.title}
              </Text>
              <Text size="display" className="max-w-screen-md">
                {content.start.text}
              </Text>
            </div>
            <div className="relative z-10 w-full space-y-4 md:mx-auto md:max-w-screen-sm">
              {content.start.milestones.map((milestone, index) => {
                const MilestoneIcon = MILESTONE_ICONS[index % MILESTONE_ICONS.length]!;
                const hasConnector = index !== content.start.milestones.length - 1;

                return (
                  <div
                    key={`milestone-${index}`}
                    className="grid w-full grid-cols-[50px_1fr] gap-4 md:max-w-screen-md"
                  >
                    <div className="flex flex-col items-center">
                      <Icon icon={MilestoneIcon} size="lg" className="text-primary" />
                      {hasConnector && <div className="my-2 h-full w-px bg-gray-200" />}
                    </div>
                    <Card
                      noPadding
                      className={cn("flex flex-col items-start p-3 text-left md:p-5", {
                        "mb-4 pb-3": hasConnector,
                      })}
                    >
                      <div className="flex flex-col">
                        <Text size="sm" className="me-4" gray>
                          {milestone.date}
                        </Text>
                        <Text size="display" bold black>
                          {milestone.title}
                        </Text>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {blocks.map((block, index) => (
        <section key={`block-${index}`} className="pt-8 md:pt-12 lg:pt-16 xl:pt-20">
          <div
            className={cn("md:grid md:gap-8 xl:gap-16", {
              "md:grid-cols-[300px_1fr]": !block.reverse,
              "md:grid-cols-[1fr_300px]": block.reverse,
            })}
          >
            <Image
              src={block.img}
              alt=""
              width={500}
              height={400}
              className="h-44 w-full rounded-xl object-cover lg:h-full"
            />
            <div
              className={cn(
                "mt-6 flex flex-col gap-4 md:mt-0 md:rounded-lg md:border md:border-solid md:border-gray-200 md:p-8 lg:p-8 xl:p-16",
                { "md:col-start-1 md:row-start-1": block.reverse }
              )}
            >
              <Text as="h2" size="lg">
                {block.title}
              </Text>
              <Text size="display">{block.text}</Text>
            </div>
          </div>
        </section>
      ))}

      <section className="pt-8 md:pt-12 lg:pt-16 xl:pt-20">
        <div className="flex flex-col items-center justify-center space-y-8 text-center md:space-y-10 lg:space-y-12">
          <Text as="h2" size="lg">
            {content.promise.title}
          </Text>
          <div className="grid w-full gap-4 sm:grid-cols-3 lg:gap-8">
            {content.promise.list.map((item, index) => {
              const PromiseIcon = PROMISE_ICONS[index % PROMISE_ICONS.length]!;

              return (
                <Card key={`promise-${index}`} className="flex h-auto w-full flex-col items-center">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <Icon icon={PromiseIcon} size="lg" className="text-primary" />
                    <div className="max-w-[230px]">
                      <Text size="display" bold>
                        {item}
                      </Text>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pt-8 md:pt-12 lg:pt-16 xl:pt-20">
        <div className="rounded-xl bg-gray-50 px-4 py-8 md:px-8 md:py-12 lg:py-16">
          <div className="flex flex-col items-center justify-center space-y-10 text-center md:space-y-12 lg:space-y-14 xl:space-y-16">
            {teamGroups.map((group, index) => (
              <div className="w-full" key={`group-${index}`}>
                <Text as="h2" size="lg">
                  {group.title}
                </Text>
                <div className="relative z-10 mt-8 grid w-full gap-6 md:grid-cols-2 lg:grid-cols-5">
                  {group.members.map((employee) => (
                    <div
                      key={employee.id}
                      className="grid w-full grid-cols-[100px_1fr] gap-6 lg:grid-cols-1"
                    >
                      {employee.imageUrl ? (
                        <Image
                          src={employee.imageUrl}
                          alt={employee.name}
                          width={400}
                          height={400}
                          className={employeeImageClass}
                        />
                      ) : (
                        <div
                          className={cn(
                            "flex items-center justify-center bg-gray-100 text-gray-700",
                            employeeImageClass
                          )}
                        >
                          <Icon icon={UserRound} size="lg" />
                        </div>
                      )}
                      <div className="flex flex-col items-start justify-start lg:items-center lg:justify-center">
                        <Text size="md2" className="flex">
                          {employee.name}
                        </Text>
                        <Text className="!text-gray-700">{employee.role}</Text>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
