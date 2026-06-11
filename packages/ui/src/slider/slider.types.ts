import type {
  ImageValue,
  RenderImage,
  RenderImageOptions,
} from "../utils/render-image";

export type BaseSliderProps = {
  slides: ImageValue[];
  renderImage?: RenderImage;
  /** Sizing/loading hints for the default slide image render. */
  imageOptions?: RenderImageOptions;
  showNav?: boolean;
  showNavOnHover?: boolean;
  showCounter?: boolean;
  showIndicators?: boolean;
  loop?: boolean;
  className?: string;
  slideClassName?: string;
};
