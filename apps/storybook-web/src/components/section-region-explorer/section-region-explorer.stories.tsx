import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  SectionRegionExplorer,
  type RegionExplorerTile,
} from "@swiss-activities/ui";
import { Page } from "../page";

const cantonTiles: RegionExplorerTile[] = [
  { id: "bs", label: "BS", position: { row: 1, column: 4 } },
  { id: "sh", label: "SH", position: { row: 1, column: 6 } },
  { id: "ju", label: "JU", position: { row: 2, column: 2 } },
  { id: "bl", label: "BL", position: { row: 2, column: 3 } },
  { id: "ag", label: "AG", position: { row: 2, column: 4 } },
  { id: "zh", label: "ZH", position: { row: 2, column: 5 } },
  { id: "tg", label: "TG", position: { row: 2, column: 6 } },
  { id: "ar", label: "AR", position: { row: 2, column: 7 } },
  { id: "ne", label: "NE", position: { row: 3, column: 3 } },
  { id: "so", label: "SO", position: { row: 3, column: 4 } },
  { id: "lu", label: "LU", position: { row: 3, column: 5 } },
  { id: "zg", label: "ZG", position: { row: 3, column: 6 } },
  { id: "sg", label: "SG", position: { row: 3, column: 7 } },
  { id: "ai", label: "AI", position: { row: 3, column: 8 } },
  { id: "vd", label: "VD", position: { row: 4, column: 2 } },
  { id: "fr", label: "FR", position: { row: 4, column: 3 } },
  { id: "be", label: "BE", position: { row: 4, column: 4 } },
  { id: "nw", label: "NW", position: { row: 4, column: 5 } },
  { id: "sz", label: "SZ", position: { row: 4, column: 6 } },
  { id: "gl", label: "GL", position: { row: 4, column: 7 } },
  { id: "gr", label: "GR", position: { row: 4, column: 8 } },
  { id: "ge", label: "GE", position: { row: 5, column: 1 } },
  { id: "vs", label: "VS", position: { row: 5, column: 4 } },
  { id: "ow", label: "OW", position: { row: 5, column: 6 } },
  { id: "ur", label: "UR", position: { row: 5, column: 7 } },
  { id: "ti", label: "TI", position: { row: 6, column: 5 } },
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
