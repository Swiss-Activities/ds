export const iconSizes = ["xs", "sm", "default", "md", "lg"] as const;

export type IconSize = (typeof iconSizes)[number];

export const iconPixelSizes: Record<IconSize, number> = {
  xs: 12,
  sm: 14,
  default: 16,
  md: 20,
  lg: 24,
};

export const defaultIconStrokeWidth = 1.8;
