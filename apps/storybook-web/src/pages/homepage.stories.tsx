import { useState } from "react";
import type { StoryObj } from "@storybook/react-vite";
import { SectionHero, SectionActivityGrid } from "@swiss-activities/ui";
import { Page } from "../components/page";
import type { ActivityItem } from "@swiss-activities/ui";

function Sun() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
      <circle cx="12" cy="12" r="5" />
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      />
    </svg>
  );
}

function Cloud() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-300">
      <path d="M19.36 10.04A7.49 7.49 0 0 0 4.5 11.5a4.5 4.5 0 0 0 0 9h14a5 5 0 0 0 .86-9.96z" />
    </svg>
  );
}

function CloudRain() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-300">
      <path d="M19.36 10.04A7.49 7.49 0 0 0 4.5 11.5a4.5 4.5 0 0 0 0 9h14a5 5 0 0 0 .86-9.96z" />
      <line stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" x1="8" y1="22" x2="8" y2="24" />
      <line stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" x1="12" y1="22" x2="12" y2="24" />
      <line stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" x1="16" y1="22" x2="16" y2="24" />
    </svg>
  );
}

function CloudStorm() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-300">
      <path d="M19.36 10.04A7.49 7.49 0 0 0 4.5 11.5a4.5 4.5 0 0 0 0 9h14a5 5 0 0 0 .86-9.96z" />
      <path fill="#fbbf24" d="M11 14h3l-2 4h2l-3 5v-5h-2z" />
    </svg>
  );
}

const days = [
  { id: "0", label: "Heute", icon: <Sun />, low: 6, high: 22 },
  { id: "1", label: "Mi", icon: <Cloud />, low: 6, high: 22 },
  { id: "2", label: "Do", icon: <CloudRain />, low: 6, high: 22 },
  { id: "3", label: "Fr", icon: <CloudStorm />, low: 6, high: 22 },
  { id: "4", label: "Sa", icon: <Sun />, low: 8, high: 24 },
  { id: "5", label: "So", icon: <Cloud />, low: 7, high: 21 },
  { id: "6", label: "Mo", icon: <CloudRain />, low: 5, high: 19 },
  { id: "7", label: "Di", icon: <Sun />, low: 7, high: 23 },
  { id: "8", label: "Mi", icon: <CloudStorm />, low: 4, high: 18 },
  { id: "9", label: "Do", icon: <Cloud />, low: 6, high: 20 },
  { id: "10", label: "Fr", icon: <Sun />, low: 8, high: 25 },
  { id: "11", label: "Sa", icon: <CloudRain />, low: 5, high: 17 },
  { id: "12", label: "So", icon: <Cloud />, low: 7, high: 21 },
  { id: "13", label: "Mo", icon: <Sun />, low: 9, high: 26 },
  { id: "14", label: "Di", icon: <CloudStorm />, low: 3, high: 16 },
  { id: "15", label: "Mi", icon: <Cloud />, low: 5, high: 19 },
  { id: "16", label: "Do", icon: <Sun />, low: 7, high: 22 },
  { id: "17", label: "Fr", icon: <CloudRain />, low: 4, high: 18 },
  { id: "18", label: "Sa", icon: <Sun />, low: 8, high: 24 },
  { id: "19", label: "So", icon: <Cloud />, low: 6, high: 20 },
  { id: "20", label: "Mo", icon: <CloudStorm />, low: 3, high: 15 },
  { id: "21", label: "Di", icon: <Sun />, low: 7, high: 23 },
  { id: "22", label: "Mi", icon: <CloudRain />, low: 5, high: 19 },
  { id: "23", label: "Do", icon: <Cloud />, low: 6, high: 21 },
  { id: "24", label: "Fr", icon: <Sun />, low: 9, high: 27 },
  { id: "25", label: "Sa", icon: <CloudRain />, low: 4, high: 17 },
  { id: "26", label: "So", icon: <Sun />, low: 8, high: 25 },
];

const activities: ActivityItem[] = [
  {
    image: (
      <img
        src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Jungfraujoch_Plateau_Sonnenaufgang_Aletschgletscher_6b8bb53632.jpg"
        alt="Jungfraujoch"
      />
    ),
    title: "Ab Interlaken: Ticket Jungfraujoch inkl. Sitzplatzreservation",
    score: 4.7,
    reviewCount: 100,
    priceLabel: "pro Person",
    price: "ab CHF 233.80",
  },
  {
    image: (
      <img
        src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Grindelwald_First_Cliff_Walk_Eiger_Moench_Jungfrau_Bergpanorama_4653546e26.jpg"
        alt="Grindelwald First Cliff Walk"
      />
    ),
    title: "Grindelwald: First Cliff Walk by Tissot",
    score: 4.5,
    reviewCount: 64,
    priceLabel: "pro Person",
    price: "ab CHF 68.00",
  },
  {
    image: (
      <img
        src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/omar_m_j_F7_U3wadbd0_unsplash_f301eb283f.jpg"
        alt="Pilatus"
      />
    ),
    title: "Luzern: Tagespass Pilatus — Seilbahn, Zahnradbahn & Schifffahrt",
    score: 4.8,
    reviewCount: 215,
    priceLabel: "pro Person",
    price: "ab CHF 119.00",
  },
  {
    image: (
      <img
        src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Jungfraujoch_Plateau_Sonnenaufgang_Aletschgletscher_6b8bb53632.jpg"
        alt="Harder Kulm"
      />
    ),
    title: "Interlaken: Harder Kulm — Top of Interlaken Ticket",
    score: 4.6,
    reviewCount: 87,
    priceLabel: "pro Person",
    price: "ab CHF 42.00",
  },
  {
    image: (
      <img
        src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Grindelwald_First_Cliff_Walk_Eiger_Moench_Jungfrau_Bergpanorama_4653546e26.jpg"
        alt="First Top of Adventure"
      />
    ),
    title: "Grindelwald: First — Top of Adventure Ticket",
    score: 4.4,
    reviewCount: 53,
    priceLabel: "pro Person",
    price: "ab CHF 74.00",
  },
  {
    image: (
      <img
        src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/omar_m_j_F7_U3wadbd0_unsplash_f301eb283f.jpg"
        alt="Zürichsee"
      />
    ),
    title: "Zürich: Stadtrundfahrt mit Schifffahrt auf dem Zürichsee",
    score: 4.3,
    reviewCount: 142,
    priceLabel: "pro Person",
    price: "ab CHF 56.00",
  },
];

export default {
  title: "Pages/Homepage",
  parameters: { layout: "fullscreen" },
};

export const Default: StoryObj = {
  render: () => {
    const [selected, setSelected] = useState("0");
    return (
      <Page>
        <SectionHero
          title="Interlaken"
          image={
            <img
              src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Jungfraujoch_Plateau_Sonnenaufgang_Aletschgletscher_6b8bb53632.jpg"
              alt="Interlaken"
            />
          }
          days={days}
          selected={selected}
          onSelect={setSelected}
          className="pb-6"
        />
        <SectionActivityGrid
          title="Beliebte Aktivitäten in Interlaken"
          activities={activities}
          className="py-6"
        />
      </Page>
    );
  },
};
