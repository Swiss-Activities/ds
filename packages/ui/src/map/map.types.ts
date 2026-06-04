import type { ReactNode } from "react";
import type { BaseActivityCardProps } from "../activity-card/activity-card.types";

export type MapMarkerCard = Omit<BaseActivityCardProps, "className">;

export type MapPoint = {
  card?: MapMarkerCard;
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

export type MapBounds = {
  east: number;
  north: number;
  south: number;
  west: number;
};

export type MapProps = {
  activeMarkerId?: string | null;
  apiKey?: string;
  center?: MapCenter;
  className?: string;
  fallback?: ReactNode;
  height?: number | string;
  markers?: MapPoint[];
  markersInteractive?: boolean;
  options?: google.maps.MapOptions;
  onBoundsChange?: (bounds: MapBounds) => void;
  recenterKey?: number;
  zoom?: number;
};
