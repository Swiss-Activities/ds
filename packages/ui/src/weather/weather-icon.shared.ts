export const weatherIconColorMap = {
  sun: "#facc15",
  cloud: "#d1d5db",
  "cloud-rain": "#d1d5db",
  "cloud-storm": "#d1d5db",
} as const;

export type ResolvedWeatherIconName = keyof typeof weatherIconColorMap;

const weatherIconAliases = {
  sun: "sun",
  sunny: "sun",
  clear: "sun",
  cloud: "cloud",
  cloudy: "cloud",
  "partly-cloudy": "cloud",
  partly_cloudy: "cloud",
  rain: "cloud-rain",
  rainy: "cloud-rain",
  "cloud-rain": "cloud-rain",
  cloud_rain: "cloud-rain",
  storm: "cloud-storm",
  thunder: "cloud-storm",
  "cloud-storm": "cloud-storm",
  cloud_storm: "cloud-storm",
} as const satisfies Record<string, ResolvedWeatherIconName>;

export function resolveWeatherIconName(
  icon?: string | null
): ResolvedWeatherIconName {
  if (!icon) {
    return "cloud";
  }

  return weatherIconAliases[icon.toLowerCase() as keyof typeof weatherIconAliases] ?? "cloud";
}
