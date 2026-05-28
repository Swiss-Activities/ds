import type { ReactNode } from "react";

export type MapPoint = {
  id: string;
  title: string;
  lat: number;
  lng: number;
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
