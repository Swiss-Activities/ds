import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon, SectionFeatureBand } from "@swiss-activities/ui";
import { Check, Globe, House, UserRound } from "@swiss-activities/ui/icons";
import { Page } from "../page";

const meta = {
  title: "Sections/SectionFeatureBand",
  component: SectionFeatureBand,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SectionFeatureBand>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        id: "experiences",
        icon: <Icon icon={Globe} size="lg" />,
        title: "12,000+ Swiss experiences",
        description:
          "Bookable activities, free things to do, and stories - the complete guide.",
      },
      {
        id: "curated",
        icon: <Icon icon={House} size="lg" />,
        title: "Curated by Swiss editors",
        description:
          "Every listing reviewed by a local. No copy-paste from global directories.",
      },
      {
        id: "cancellation",
        icon: <Icon icon={Check} size="lg" />,
        title: "Free cancellation",
        description: "On every bookable activity, up to 24 hours before.",
      },
      {
        id: "support",
        icon: <Icon icon={UserRound} size="lg" />,
        title: "5-star Swiss support",
        description:
          "Locally based team in Zurich. Replies in DE, FR, IT, EN within an hour.",
      },
    ],
  },
  render: (args) => (
    <Page>
      <div className="sa-container">
        <SectionFeatureBand {...args} className="pt-6" />
      </div>
    </Page>
  ),
};
