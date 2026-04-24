import type { CardRender } from "../card/card.types";
import type { ImageValue, RenderImage } from "../utils/render-image";

export type ActivityCardRender = CardRender;

export type BaseActivityCardProps = {
  image: ImageValue | null;
  title: string;
  score: number;
  reviewCount: number;
  priceLabel: string;
  price: string;
  loading?: boolean;
  pending?: boolean;
  renderImage?: RenderImage;
  className?: string;
  render?: ActivityCardRender;
};
