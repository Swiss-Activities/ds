import type { Meta, StoryObj } from "@storybook/react-vite";
import { heroTitles } from "@swiss-activities/dummy-data";
import {
  Button,
  SectionActivityGrid,
  type SectionActivityGridProps,
} from "@swiss-activities/ui";
import { getActivityItems } from "../../story-data";
import { Page } from "../page";

const gatewayTypeActivities = [
  {
    type: "activity",
    title: "Ticket Eiger Express ab Terminal Grindelwald",
    image: {
      src: "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Eiger_Express_Grindelwald_Eigernordwand_Weitansicht_Kabine_rechts_f1841d7182.jpg",
      alt: "Eiger Express",
    },
    subtitle: "Grindelwald",
    score: 4.62,
    reviewCount: 50,
    priceLabel: "pro Person",
    price: "ab CHF 37.60",
  },
  {
    type: "non-bookable-event",
    title: "Sammlungsfieber",
    image: {
      src: "https://www.museums.ch/admin/data/files/page_event/header_image/393/museums_freigestellt_g-1955_header.jpg?lm=1762950180",
      alt: "Sammlungsfieber",
    },
    subtitle: "Kunstmuseum St.Gallen",
    category: "Ausstellung",
    dateRange: "Bis 31. Dez. 2028",
  },
  {
    type: "non-bookable-event",
    title: "Kaarel Kurismaa: Intermezzo",
    image: {
      src: "https://www.museums.ch/admin/data/files/page_event/header_image/1504/01_9_header.jpg?lm=1771580926",
      alt: "Kaarel Kurismaa: Intermezzo",
    },
    subtitle: "Kunsthalle Zuerich",
    category: "Ausstellung",
    dateRange: "Bis 25. Mai",
  },
  {
    type: "non-bookable",
    title: "Stocktuerli",
    image: {
      src: "https://api.grillstelle.ch/images/428/888.jpg",
      alt: "Stocktuerli",
    },
    subtitle: "Volketswil",
    category: "Feuerstelle",
  },
  {
    type: "non-bookable",
    title: "Burg Hohenklingen",
    image: {
      src: "https://www.myswitzerland.com/-/media/dam/resources/experience/h/o/hohenklingen%20castle/images%20all%20season/64482_32001800.jpeg",
      alt: "Burg Hohenklingen",
    },
    subtitle: "Stein am Rhein",
    category: "Schloss / Ruine",
  },
] satisfies SectionActivityGridProps["activities"];

const imageFallbackActivities = [
  {
    type: "activity",
    title: "Ticket Eiger Express ab Terminal Grindelwald",
    image: {
      src: "https://example.invalid/eiger-express.jpg",
      alt: "Eiger Express",
    },
    score: 4.62,
    reviewCount: 50,
    priceLabel: "pro Person",
    price: "ab CHF 37.60",
  },
  {
    type: "non-bookable-event",
    title: "Sammlungsfieber",
    image: {
      src: "https://example.invalid/sammlungsfieber.jpg",
      alt: "Sammlungsfieber",
    },
    subtitle: "Kunstmuseum St.Gallen",
    category: "Ausstellung",
    dateRange: "Bis 31. Dez. 2028",
  },
  {
    type: "activity",
    title: "Static image renderer failure",
    image: {
      src: "https://example.invalid/static-renderer.jpg",
      alt: "Static image renderer failure",
    },
    score: 4.8,
    reviewCount: 24,
    priceLabel: "pro Person",
    price: "ab CHF 49",
    renderImage: ({ src, alt }) => (
      <img src={src} alt={alt ?? ""} className="h-full w-full object-cover" />
    ),
  },
] satisfies SectionActivityGridProps["activities"];

const meta = {
  title: "Sections/SectionActivityGrid",
  component: SectionActivityGrid,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SectionActivityGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: heroTitles.sectionActivityGrid,
    activities: getActivityItems(),
  },
  render: (args) => (
    <Page>
      <div className="sa-container">
        <SectionActivityGrid {...args} className="pt-6" />
      </div>
    </Page>
  ),
};

export const WithAction: Story = {
  args: {
    title: heroTitles.sectionActivityGrid,
    activities: getActivityItems(),
    action: <Button type="secondary" size="sm" text="Mehr sehen" />,
  },
  render: (args) => (
    <Page>
      <div className="sa-container">
        <SectionActivityGrid {...args} className="pt-6" />
      </div>
    </Page>
  ),
};

export const GatewayTypes: Story = {
  args: {
    title: "Gateway card types",
    activities: gatewayTypeActivities,
  },
  render: (args) => (
    <Page>
      <div className="sa-container">
        <SectionActivityGrid {...args} className="pt-6" />
      </div>
    </Page>
  ),
};

export const ImageFallback: Story = {
  args: {
    title: "Image fallback",
    activities: imageFallbackActivities,
  },
  render: (args) => (
    <Page>
      <div className="sa-container">
        <SectionActivityGrid {...args} className="pt-6" />
      </div>
    </Page>
  ),
};
