import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionBlogDetail } from "@swiss-activities/ui";
import { getContentBlocks } from "../../story-data";
import { Page } from "../page";

const meta = {
  title: "Sections/SectionBlogDetail",
  component: SectionBlogDetail,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SectionBlogDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Swiss Activities Team Tipps - 17 Tipps fuer deine Reise",
    image: {
      src: "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/0_SA_Team_Tipps_41dbc3ba15.jpg",
      alt: "Swiss Activities Team in der Natur",
    },
    backLabel: "Zurueck",
    backHref: "#",
    description:
      "Erhalte Reisetipps fuer deine Reise durch die Schweiz direkt vom Swiss Activities Team.",
    contentItems: getContentBlocks(),
  },
  render: (args) => (
    <Page className="bg-white">
      <SectionBlogDetail {...args} />
    </Page>
  ),
};
