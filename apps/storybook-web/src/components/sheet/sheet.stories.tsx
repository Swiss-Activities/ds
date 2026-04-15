import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  SheetAuto,
  SheetFull,
  SheetWithDetent,
} from "@swiss-activities/ui";

const meta = {
  title: "Components/Sheet",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const faqItems = [
  {
    title: "What changes at the last detent?",
    text: "Once the sheet reaches its last detent, scrolling is handed to the internal scroll area instead of the swipe gesture.",
  },
  {
    title: "Why use this variant?",
    text: "This variant is useful when the first stop should tease content, and the last stop should unlock a full scrollable panel.",
  },
  {
    title: "What should live inside it?",
    text: "Filters, long forms, faceted search, and layered mobile browsing flows all fit well here.",
  },
  {
    title: "How should it feel?",
    text: "The first drag should step the sheet upward. After that, the sheet should behave like a normal scrollable panel.",
  },
  {
    title: "Can it still dismiss?",
    text: "Yes. Dragging back down, clicking outside, or using the close affordance will dismiss it.",
  },
];

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
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-sm">
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
      </div>
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
        <SheetAuto.Root
          presented={presented}
          onPresentedChange={setPresented}
        >
          <SheetAuto.Portal>
            <SheetAuto.View contentPlacement="bottom">
              <SheetAuto.Backdrop />
              <SheetAuto.CloseButton />
              <SheetAuto.Content className="flex max-h-[80dvh] flex-col overflow-hidden bg-white">
                <div className="px-5 pb-3 pt-2">
                  <SheetAuto.Handle />
                </div>
                <div className="px-4 pb-6">
                  <SheetAuto.Title className="text-xl font-semibold text-gray-950">
                    Travel date
                  </SheetAuto.Title>
                  <SheetAuto.Description className="mt-2 text-sm leading-6 text-gray-600">
                    Use the auto sheet for concise selections, confirmations, and compact mobile flows.
                  </SheetAuto.Description>
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
              </SheetAuto.Content>
            </SheetAuto.View>
          </SheetAuto.Portal>
        </SheetAuto.Root>
      </>
    );
  },
};

export const WithDetent: Story = {
  render: () => {
    const [presented, setPresented] = useState(false);

    return (
      <>
        <DemoPage
          title="Detent Drawer"
          description="This variant steps through an intermediate detent before unlocking full scrolling."
          onOpen={() => setPresented(true)}
        />
        <SheetWithDetent.Root
          presented={presented}
          onPresentedChange={setPresented}
        >
          <SheetWithDetent.Portal>
            <SheetWithDetent.View
              contentPlacement="bottom"
              detentHeight="52dvh"
            >
              <SheetWithDetent.Backdrop />
              <SheetWithDetent.CloseButton />
              <SheetWithDetent.Content className="grid h-[calc(100%-32px)] grid-rows-[min-content_1fr] bg-white">
                <div className="border-b border-solid border-gray-200 px-5 pb-4 pt-2">
                  <SheetWithDetent.Handle />
                  <SheetWithDetent.Title className="mt-4 text-xl font-semibold text-gray-950">
                    Filters
                  </SheetWithDetent.Title>
                  <SheetWithDetent.Description className="mt-2 text-sm leading-6 text-gray-600">
                    Drag once to step up. Keep going and the internal content takes over scrolling.
                  </SheetWithDetent.Description>
                </div>
                <SheetWithDetent.ScrollRoot>
                  <SheetWithDetent.ScrollView>
                    <SheetWithDetent.ScrollContent className="px-4 py-4">
                      <div className="grid gap-3">
                        {faqItems.map((item) => (
                          <div
                            key={item.title}
                            className="rounded-2xl border border-solid border-gray-200 bg-white p-4"
                          >
                            <h3 className="text-sm font-semibold text-gray-950">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-gray-700">
                              {item.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </SheetWithDetent.ScrollContent>
                  </SheetWithDetent.ScrollView>
                </SheetWithDetent.ScrollRoot>
              </SheetWithDetent.Content>
            </SheetWithDetent.View>
          </SheetWithDetent.Portal>
        </SheetWithDetent.Root>
      </>
    );
  },
};

export const Full: Story = {
  render: () => {
    const [presented, setPresented] = useState(false);
    const [query, setQuery] = useState("");

    const filtered = locations.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    return (
      <>
        <DemoPage
          title="Full Drawer"
          description="Use the full sheet when the mobile flow needs immersive search, larger forms, or full-screen browsing."
          onOpen={() => setPresented(true)}
        />
        <SheetFull.Root
          presented={presented}
          onPresentedChange={setPresented}
        >
          <SheetFull.Portal>
            <SheetFull.View>
              <SheetFull.Backdrop />
              <SheetFull.CloseButton />
              <SheetFull.Content className="grid grid-rows-[min-content_1fr] bg-white">
                <div className="border-b border-solid border-gray-200 px-5 pb-4 pt-2">
                  <SheetFull.Handle />
                  <SheetFull.Title className="mt-4 text-xl font-semibold text-gray-950">
                    Choose a station
                  </SheetFull.Title>
                  <SheetFull.Description className="mt-2 text-sm leading-6 text-gray-600">
                    The full sheet keeps the entire selection flow in one focused mobile surface.
                  </SheetFull.Description>
                  <SheetFull.AutoFocusTarget.Root timing="present" asChild>
                    <input
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Search station"
                      className="mt-4 w-full rounded-xl border border-solid border-gray-200 px-4 py-3 text-sm text-gray-950 outline-none placeholder:text-gray-400 focus:border-primary"
                    />
                  </SheetFull.AutoFocusTarget.Root>
                </div>
                <SheetFull.ScrollRoot>
                  <SheetFull.ScrollView>
                    <SheetFull.ScrollContent className="px-4 py-2">
                      <div className="flex flex-col">
                        {filtered.map((item) => (
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
                    </SheetFull.ScrollContent>
                  </SheetFull.ScrollView>
                </SheetFull.ScrollRoot>
              </SheetFull.Content>
            </SheetFull.View>
          </SheetFull.Portal>
        </SheetFull.Root>
      </>
    );
  },
};
