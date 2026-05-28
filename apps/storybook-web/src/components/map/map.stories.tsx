import type { Meta, StoryObj } from "@storybook/react-vite";
import { Map, type MapPoint } from "@swiss-activities/ui";

const apiKey =
  import.meta.env.VITE_GOOGLE_MAPS_API_KEY ??
  import.meta.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ??
  "";

const markers = [
  {
    id: "jungfraujoch",
    title: "Jungfraujoch",
    lat: 46.5475,
    lng: 7.9801,
  },
  {
    id: "grindelwald-first",
    title: "Grindelwald First",
    lat: 46.6595,
    lng: 8.0532,
  },
  {
    id: "schynige-platte",
    title: "Schynige Platte",
    lat: 46.6553,
    lng: 7.9081,
  },
  {
    id: "harder-kulm",
    title: "Harder Kulm",
    lat: 46.6971,
    lng: 7.8529,
  },
  {
    id: "lauterbrunnen",
    title: "Lauterbrunnen Valley",
    lat: 46.5935,
    lng: 7.9091,
  },
] satisfies MapPoint[];

const meta = {
  title: "Components/Map",
  component: Map,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    apiKey,
    center: { lat: 46.658, lng: 7.98 },
    markers,
    zoom: 10,
  },
} satisfies Meta<typeof Map>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="p-8">
      <Map {...args} />
    </div>
  ),
};

export const MissingApiKey: Story = {
  args: {
    apiKey: "",
    fallback: (
      <div className="px-6 text-center">
        <p className="m-0 text-sm font-medium text-gray-900">
          Google Maps key missing
        </p>
        <p className="m-0 mt-1 text-xs text-gray-500">
          Set VITE_GOOGLE_MAPS_API_KEY or NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.
        </p>
      </div>
    ),
  },
  render: (args) => (
    <div className="p-8">
      <Map {...args} />
    </div>
  ),
};
