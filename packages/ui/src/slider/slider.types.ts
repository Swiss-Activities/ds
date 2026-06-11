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
  /** Above-the-fold slider (detail/hero gallery): the first slide loads
   * eagerly with high fetch priority — it is the page's LCP candidate. */
  firstSlideEager?: boolean;
  showNav?: boolean;
  showNavOnHover?: boolean;
  showCounter?: boolean;
  showIndicators?: boolean;
  loop?: boolean;
  className?: string;
  slideClassName?: string;
};
