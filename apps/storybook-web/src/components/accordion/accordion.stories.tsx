import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion, Text } from "@swiss-activities/ui";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        title: "Detaillierte Beschreibung",
        content: (
          <Text>
            Reise mit diesem Jungfraujoch Ticket ab Interlaken auf das
            Jungfraujoch. Auch bekannt als "Top of Europe" liegt das
            Jungfraujoch mit Europas höchstem Bahnhof auf 3454 m ü. M.
          </Text>
        ),
      },
      {
        title: "Wichtige Informationen",
        content: (
          <Text>
            Bitte bringen Sie warme Kleidung mit. Die Temperaturen auf dem
            Jungfraujoch können auch im Sommer unter 0°C fallen.
          </Text>
        ),
      },
      {
        title: "Barrierefreiheit",
        content: (
          <Text>
            Die Jungfraubahn und das Jungfraujoch sind weitgehend
            barrierefrei zugänglich.
          </Text>
        ),
      },
      {
        title: "Inkludierte Leistungen",
        content: (
          <Text>
            Hin- und Rückfahrt ab Interlaken Ost, Sitzplatzreservation,
            Eintritt zu allen Attraktionen auf dem Jungfraujoch.
          </Text>
        ),
      },
    ],
    className: "max-w-[500px]",
  },
};
