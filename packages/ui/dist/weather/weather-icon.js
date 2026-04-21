import { jsx as _jsx } from "react/jsx-runtime";
import { Cloud, CloudLightning, CloudRain, Sun } from "../icons";
import { Icon } from "../icon/icon";
import { resolveWeatherIconName, weatherIconColorMap, } from "./weather-icon.shared";
const weatherIcons = {
    sun: Sun,
    cloud: Cloud,
    "cloud-rain": CloudRain,
    "cloud-storm": CloudLightning,
};
export function renderWeatherIcon(icon, size = "lg") {
    const iconName = resolveWeatherIconName(icon);
    return (_jsx(Icon, { icon: weatherIcons[iconName], size: size, color: weatherIconColorMap[iconName] }));
}
