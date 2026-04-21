export declare const weatherIconColorMap: {
    readonly sun: "#facc15";
    readonly cloud: "#d1d5db";
    readonly "cloud-rain": "#d1d5db";
    readonly "cloud-storm": "#d1d5db";
};
export type ResolvedWeatherIconName = keyof typeof weatherIconColorMap;
export declare function resolveWeatherIconName(icon?: string | null): ResolvedWeatherIconName;
