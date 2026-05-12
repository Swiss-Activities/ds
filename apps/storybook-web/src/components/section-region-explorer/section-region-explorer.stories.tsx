import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  SectionRegionExplorer,
  type RegionExplorerTile,
} from "@swiss-activities/ui";
import { Page } from "../page";

const cantonTiles: RegionExplorerTile[] = [
  {
    id: "bs",
    label: "BS",
    name: "Basel-Stadt",
    count: 130,
    tone: "mid",
    position: { row: 1, column: 4 },
  },
  {
    id: "sh",
    label: "SH",
    name: "Schaffhausen",
    count: 15,
    position: { row: 1, column: 6 },
  },
  {
    id: "ju",
    label: "JU",
    name: "Jura",
    count: 2,
    position: { row: 2, column: 2 },
  },
  {
    id: "bl",
    label: "BL",
    name: "Basel-Landschaft",
    count: 270,
    tone: "mid",
    position: { row: 2, column: 3 },
  },
  {
    id: "ag",
    label: "AG",
    name: "Aargau",
    count: 310,
    tone: "mid",
    position: { row: 2, column: 4 },
  },
  {
    id: "zh",
    label: "ZH",
    name: "Zürich",
    count: 1442,
    tone: "high",
    position: { row: 2, column: 5 },
  },
  {
    id: "tg",
    label: "TG",
    name: "Thurgau",
    count: 151,
    tone: "mid",
    position: { row: 2, column: 6 },
  },
  {
    id: "ar",
    label: "AR",
    name: "Appenzell Ausserrhoden",
    count: 6,
    position: { row: 2, column: 7 },
  },
  {
    id: "ne",
    label: "NE",
    name: "Neuenburg",
    count: 2,
    position: { row: 3, column: 3 },
  },
  {
    id: "so",
    label: "SO",
    name: "Solothurn",
    count: 80,
    tone: "mid",
    position: { row: 3, column: 4 },
  },
  {
    id: "lu",
    label: "LU",
    name: "Luzern",
    count: 145,
    tone: "mid",
    position: { row: 3, column: 5 },
  },
  {
    id: "zg",
    label: "ZG",
    name: "Zug",
    count: 89,
    tone: "mid",
    position: { row: 3, column: 6 },
  },
  {
    id: "sg",
    label: "SG",
    name: "St. Gallen",
    count: 167,
    tone: "mid",
    position: { row: 3, column: 7 },
  },
  {
    id: "ai",
    label: "AI",
    name: "Appenzell Innerrhoden",
    count: 2,
    position: { row: 3, column: 8 },
  },
  {
    id: "vd",
    label: "VD",
    name: "Waadt",
    count: 84,
    tone: "mid",
    position: { row: 4, column: 2 },
  },
  {
    id: "fr",
    label: "FR",
    name: "Freiburg",
    count: 25,
    position: { row: 4, column: 3 },
  },
  {
    id: "be",
    label: "BE",
    name: "Bern",
    count: 505,
    tone: "high",
    position: { row: 4, column: 4 },
  },
  {
    id: "nw",
    label: "NW",
    name: "Nidwalden",
    count: 3,
    position: { row: 4, column: 5 },
  },
  {
    id: "sz",
    label: "SZ",
    name: "Schwyz",
    count: 130,
    tone: "mid",
    position: { row: 4, column: 6 },
  },
  {
    id: "gl",
    label: "GL",
    name: "Glarus",
    count: 8,
    position: { row: 4, column: 7 },
  },
  {
    id: "gr",
    label: "GR",
    name: "Graubünden",
    count: 50,
    tone: "mid",
    position: { row: 4, column: 8 },
  },
  {
    id: "ge",
    label: "GE",
    name: "Genf",
    count: 0,
    position: { row: 5, column: 1 },
  },
  {
    id: "vs",
    label: "VS",
    name: "Wallis",
    count: 6,
    position: { row: 5, column: 4 },
  },
  {
    id: "ow",
    label: "OW",
    name: "Obwalden",
    count: 3,
    position: { row: 5, column: 6 },
  },
  {
    id: "ur",
    label: "UR",
    name: "Uri",
    count: 1,
    position: { row: 5, column: 7 },
  },
  {
    id: "ti",
    label: "TI",
    name: "Tessin",
    count: 28,
    position: { row: 6, column: 5 },
  },
];

function InteractiveExample() {
  const [activeTileId, setActiveTileId] = useState("zh");

  return (
    <SectionRegionExplorer
      activeTileId={activeTileId}
      className="py-6"
      onTileClick={(tile) => setActiveTileId(tile.id)}
      tiles={cantonTiles}
      title="Explore by region"
    />
  );
}

const meta = {
  title: "Sections/SectionRegionExplorer",
  component: SectionRegionExplorer,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SectionRegionExplorer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Explore by region",
    tiles: cantonTiles,
    activeTileId: "zh",
  },
  render: (args) => (
    <Page>
      <div className="sa-container">
        <SectionRegionExplorer {...args} className="py-6" />
      </div>
    </Page>
  ),
};

export const List: Story = {
  args: {
    title: "Explore by region",
    tiles: cantonTiles,
    activeTileId: "zh",
    variant: "list",
  },
  render: (args) => (
    <Page>
      <div className="sa-container">
        <SectionRegionExplorer {...args} className="py-6" />
      </div>
    </Page>
  ),
};

export const Interactive: Story = {
  render: () => {
    return (
      <Page>
        <div className="sa-container">
          <InteractiveExample />
        </div>
      </Page>
    );
  },
};
