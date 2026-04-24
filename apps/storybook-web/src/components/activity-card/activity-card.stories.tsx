import type { Meta, StoryObj } from "@storybook/react-vite";
import { ActivityCard, type ActivityCardProps } from "@swiss-activities/ui";
import { getActivityItems } from "../../story-data";

const items = getActivityItems();
const gatewayTypeItems = [
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
    type: "non-bookable",
    title: "Stocktuerli",
    image: {
      src: "https://api.grillstelle.ch/images/428/888.jpg",
      alt: "Stocktuerli",
    },
    subtitle: "Volketswil",
    category: "Feuerstelle",
  },
] satisfies ActivityCardProps[];

const meta = {
  title: "Components/ActivityCard",
  component: ActivityCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    score: {
      control: { type: "number", min: 0, max: 5, step: 0.1 },
    },
    reviewCount: {
      control: { type: "number", min: 0 },
    },
  },
} satisfies Meta<typeof ActivityCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: items[0],
  render: (args) => (
    <div className="w-[280px]">
      <ActivityCard {...args} />
    </div>
  ),
};

export const CliffWalk: Story = {
  args: items[1],
  render: (args) => (
    <div className="w-[280px]">
      <ActivityCard {...args} />
    </div>
  ),
};

export const GatewayTypes: Story = {
  args: gatewayTypeItems[0],
  render: () => (
    <div className="grid w-[920px] grid-cols-3 gap-6">
      {gatewayTypeItems.map((item) => (
        <ActivityCard key={item.type} {...item} />
      ))}
    </div>
  ),
};
