import type { ReactNode } from "react";

export type MapPoint = {
  category?: string | null;
  id: string;
  priceLabel?: string | null;
  title: string;
  lat: number;
  lng: number;
  type?: "activity" | "non-bookable" | "point-of-interest" | null;
};

export type MapCenter = {
  lat: number;
  lng: number;
};

export type MapProps = {
  apiKey?: string;
  center?: MapCenter;
  className?: string;
  fallback?: ReactNode;
  height?: number | string;
  markers?: MapPoint[];
  options?: google.maps.MapOptions;
  zoom?: number;
};
