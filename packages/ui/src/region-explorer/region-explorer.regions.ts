export type TourismRegionDefinition = {
  id: string;
  label: string;
  aliases: string[];
  cantons: string[];
};

export const tourismRegionDefinitions: TourismRegionDefinition[] = [
  {
    id: "region-aargau",
    label: "Aargau & Solothurn",
    aliases: ["region-aargau", "aargau", "ag", "so"],
    cantons: ["AG", "SO"],
  },
  {
    id: "region-bern",
    label: "Bern Region",
    aliases: ["region-bern", "bern", "be"],
    cantons: ["BE"],
  },
  {
    id: "region-basel",
    label: "Basel Region",
    aliases: ["region-basel", "basel", "bs", "bl"],
    cantons: ["BS", "BL"],
  },
  {
    id: "region-jura-und-drei-seen-land",
    label: "Jura & Three-Lakes",
    aliases: [
      "region-jura-und-drei-seen-land",
      "region-jura",
      "jura",
      "ju",
      "ne",
    ],
    cantons: ["JU", "NE"],
  },
  {
    id: "region-genf",
    label: "Geneva",
    aliases: ["region-genf", "genf", "geneva", "ge"],
    cantons: ["GE"],
  },
  {
    id: "region-luzern-vierwaldstaettersee",
    label: "Lucerne - Lake Lucerne",
    aliases: [
      "region-luzern-vierwaldstaettersee",
      "region-luzern",
      "luzern",
      "lucerne",
      "lu",
      "ur",
      "sz",
      "ow",
      "nw",
    ],
    cantons: ["LU", "UR", "SZ", "OW", "NW"],
  },
  {
    id: "region-fribourg",
    label: "Fribourg Region",
    aliases: ["region-fribourg", "fribourg", "freiburg", "fr"],
    cantons: ["FR"],
  },
  {
    id: "region-genfersee",
    label: "Vaud / Lake Geneva",
    aliases: ["region-genfersee", "genfersee", "lake-geneva", "vaud", "vd"],
    cantons: ["VD"],
  },
  {
    id: "region-ostschweiz-lichtenstein",
    label: "Eastern Switzerland / Liechtenstein",
    aliases: [
      "region-ostschweiz-lichtenstein",
      "region-ostschweiz",
      "ostschweiz",
      "eastern-switzerland",
      "gl",
      "sh",
      "ar",
      "ai",
      "sg",
      "tg",
    ],
    cantons: ["GL", "SH", "AR", "AI", "SG", "TG"],
  },
  {
    id: "region-wallis",
    label: "Valais",
    aliases: ["region-wallis", "wallis", "valais", "vs"],
    cantons: ["VS"],
  },
  {
    id: "region-zuerich",
    label: "Zurich Region",
    aliases: ["region-zuerich", "zurich", "zuerich", "zh", "zg"],
    cantons: ["ZH", "ZG"],
  },
  {
    id: "region-graubuenden",
    label: "Graubunden",
    aliases: ["region-graubuenden", "graubuenden", "graubunden", "gr"],
    cantons: ["GR"],
  },
  {
    id: "region-tessin",
    label: "Ticino",
    aliases: ["region-tessin", "tessin", "ticino", "ti"],
    cantons: ["TI"],
  },
];
