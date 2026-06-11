import type { Meta, StoryObj } from "@storybook/react-vite";
import { WebsiteGatewayPageContent } from "@swiss-activities/data";

/** The 404 body the web renderer prerenders per locale (full chrome there). */
const meta = {
  title: "Pages/Not Found",
  parameters: { layout: "fullscreen" },
  args: {
    locale: "de_CH",
    page: {
      type: "not-found",
      labels: {
        title: "Seite nicht gefunden.",
        text: "Diese Seite existiert nicht.",
        cta: "Zurück zur Startseite",
      },
      homeHref: "/",
    },
  },
  render: (args) => (
    <main className="min-h-screen bg-white">
      <WebsiteGatewayPageContent {...args} />
    </main>
  ),
} satisfies Meta<typeof WebsiteGatewayPageContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
