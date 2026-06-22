import { create } from "zustand";

type AffiliateStore = {
  data: {
    widgetLogoUrl?: string;
    widgetShowNavigation?: boolean;
  };
  affiliateLandingPage: string | null;
  setAffiliateLandingPage: (affiliateLandingPage: string | null) => void;
  setWidgetActivityId: (widgetActivity: string) => void;
  widgetActivityId: string;
};

export const useAffiliateStore = create<AffiliateStore>((set) => {
  let widgetBrandColorParam: string | undefined = undefined;
  let widgetLogoUrl: string | undefined = undefined;
  let widgetShowNavigation: boolean | undefined = undefined;

  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    widgetBrandColorParam = params.get("widgetBrandColor") ?? undefined;
    widgetLogoUrl = params.get("widgetLogoUrl") ?? undefined;
    widgetShowNavigation = params.get("widgetShowNavigation") === "true";

    if (widgetBrandColorParam) {
      const baseColorInput = widgetBrandColorParam.startsWith("#")
        ? widgetBrandColorParam
        : `#${widgetBrandColorParam}`;

      const lightenColor = (
        hexColor: string,
        percent: number
      ): string | undefined => {
        let hex = hexColor.startsWith("#") ? hexColor.slice(1) : hexColor;
        if (!/^[0-9A-Fa-f]{6}$/.test(hex)) return undefined;
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);
        r = Math.min(255, Math.round(r + (255 - r) * (percent / 100)));
        g = Math.min(255, Math.round(g + (255 - g) * (percent / 100)));
        b = Math.min(255, Math.round(b + (255 - b) * (percent / 100)));
        const toHex = (c: number) => c.toString(16).padStart(2, "0");
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
      };

      const darkenColor = (
        hexColor: string,
        percent: number
      ): string | undefined => {
        let hex = hexColor.startsWith("#") ? hexColor.slice(1) : hexColor;
        if (!/^[0-9A-Fa-f]{6}$/.test(hex)) return undefined;
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);
        r = Math.max(0, Math.round(r - r * (percent / 100)));
        g = Math.max(0, Math.round(g - g * (percent / 100)));
        b = Math.max(0, Math.round(b - b * (percent / 100)));
        const toHex = (c: number) => c.toString(16).padStart(2, "0");
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
      };

      const colorPrimary = baseColorInput;
      const colorDark = darkenColor(baseColorInput, 15);
      const colorMedium = lightenColor(baseColorInput, 30);
      const colorLight = lightenColor(baseColorInput, 90);

      document.documentElement.style.setProperty(
        "--color-primary",
        colorPrimary
      );
      if (colorDark)
        document.documentElement.style.setProperty("--color-dark", colorDark);
      if (colorMedium)
        document.documentElement.style.setProperty(
          "--color-medium",
          colorMedium
        );
      if (colorLight)
        document.documentElement.style.setProperty("--color-light", colorLight);
    }
  }

  return {
    data: {
      widgetLogoUrl,
      widgetShowNavigation,
    },
    affiliateLandingPage: null,
    setAffiliateLandingPage: (affiliateLandingPage) =>
      set({ affiliateLandingPage }),
    widgetActivityId: "",
    setWidgetActivityId: (widgetActivity) =>
      set({ widgetActivityId: widgetActivity }),
  };
});
