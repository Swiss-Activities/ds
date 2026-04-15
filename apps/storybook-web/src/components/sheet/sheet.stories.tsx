import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import "@silk-hq/components/unlayered-styles";
import {
  Card,
  Sheet,
} from "@swiss-activities/ui";

const meta = {
  title: "Components/Sheet",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const locations = [
  "Interlaken Ost",
  "Interlaken West",
  "Grindelwald Terminal",
  "Lauterbrunnen",
  "Wengen",
  "Kleine Scheidegg",
  "Jungfraujoch",
  "Bern",
  "Lucerne",
  "Zurich HB",
  "Basel SBB",
  "Geneva Cornavin",
  "Montreux",
  "Zermatt",
  "Zermatt Gornergrat",
  "Andermatt",
  "St. Moritz",
  "Davos Platz",
  "Arosa",
  "Brig",
  "Visp",
  "Sion",
  "Lausanne",
  "Vevey",
  "Spiez",
  "Thun",
  "Schwyz",
  "Engelberg",
  "Titlis Talstation",
  "Locarno",
  "Lugano",
  "Bellinzona",
  "Chur",
  "Bad Ragaz",
  "Saas-Fee",
];

function DemoPage({
  title,
  description,
  onOpen,
}: {
  title: string;
  description: string;
  onOpen: () => void;
}) {
  return (
    <div className="min-h-screen bg-bg px-4 py-8">
      <Card className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-primary">Drawer Demo</p>
        <h1 className="mt-2 text-3xl font-semibold text-gray-950">{title}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-700">
          {description}
        </p>
        <button
          type="button"
          onClick={onOpen}
          className="mt-6 inline-flex min-h-[48px] cursor-pointer items-center justify-center rounded-md border border-primary bg-primary px-4 py-2.5 text-sm font-medium text-white hover:border-dark hover:bg-dark"
        >
          Open sheet
        </button>
      </Card>
    </div>
  );
}

export const Auto: Story = {
  render: () => {
    const [presented, setPresented] = useState(false);

    return (
      <>
        <DemoPage
          title="Auto Drawer"
          description="Auto sheets sit on the bottom edge and size to their content. This is the lightest-weight variant for short flows."
          onOpen={() => setPresented(true)}
        />
        <Sheet.Root
          presented={presented}
          onPresentedChange={setPresented}
        >
          <Sheet.Portal>
            <Sheet.View contentPlacement="bottom">
              <Sheet.Backdrop />
              <Sheet.CloseButton />
              <Sheet.Content className="flex flex-col bg-white">
                <div className="px-5 pb-3 pt-2">
                  <Sheet.Handle />
                </div>
                <div className="px-4 pb-6">
                  <Sheet.Title className="text-xl font-semibold text-gray-950">
                    Travel date
                  </Sheet.Title>
                  <Sheet.Description className="mt-2 text-sm leading-6 text-gray-600">
                    Use the auto sheet for concise selections, confirmations, and compact mobile flows.
                  </Sheet.Description>
                  <div className="mt-6 grid gap-3">
                    {["Today", "Tomorrow", "This weekend"].map((option) => (
                      <button
                        key={option}
                        type="button"
                        className="flex cursor-pointer items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-left text-sm font-medium text-gray-900 hover:border-gray-300 hover:bg-gray-50"
                      >
                        <span>{option}</span>
                        <span className="text-xs text-gray-500">Flexible</span>
                      </button>
                    ))}
                  </div>
                </div>
              </Sheet.Content>
            </Sheet.View>
          </Sheet.Portal>
        </Sheet.Root>
      </>
    );
  },
};

export const Full: Story = {
  render: () => {
    const [presented, setPresented] = useState(false);

    return (
      <>
        <DemoPage
          title="Full Drawer"
          description="This uses the same sheet primitive as the compact version. It grows with content until it hits a height cap, then the body becomes scrollable."
          onOpen={() => setPresented(true)}
        />
        <Sheet.Root
          presented={presented}
          onPresentedChange={setPresented}
        >
          <Sheet.Portal>
            <Sheet.View contentPlacement="bottom">
              <Sheet.Backdrop />
              <Sheet.CloseButton />
              <Sheet.Content
                className="grid grid-rows-[min-content_1fr] overflow-hidden bg-white"
                data-testid="sheet-full-content"
              >
                <div className="border-b border-solid border-gray-200 px-5 pb-4 pt-2">
                  <Sheet.Handle />
                  <Sheet.Title className="mt-4 text-xl font-semibold text-gray-950">
                    Choose a station
                  </Sheet.Title>
                  <Sheet.Description className="mt-2 text-sm leading-6 text-gray-600">
                    The same bottom sheet can cover longer flows by letting the list scroll once the content exceeds the available height.
                  </Sheet.Description>
                </div>
                <Sheet.ScrollRoot className="min-h-0 h-full">
                  <Sheet.ScrollView
                    className="min-h-0 h-full"
                    data-testid="sheet-full-scroll"
                  >
                    <Sheet.ScrollContent className="px-4 py-2">
                      <div className="flex flex-col">
                        {locations.map((item) => (
                          <button
                            key={item}
                            type="button"
                            className="flex cursor-pointer items-center justify-between border-0 border-b border-solid border-gray-200 bg-transparent px-0 py-4 text-left text-sm font-medium text-gray-900 last:border-b-0 hover:text-primary"
                          >
                            <span>{item}</span>
                            <span className="text-xs font-normal text-gray-500">
                              Select
                            </span>
                          </button>
                        ))}
                      </div>
                    </Sheet.ScrollContent>
                  </Sheet.ScrollView>
                </Sheet.ScrollRoot>
              </Sheet.Content>
            </Sheet.View>
          </Sheet.Portal>
        </Sheet.Root>
      </>
    );
  },
};
