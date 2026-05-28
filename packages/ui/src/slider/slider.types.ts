import type { ImageValue, RenderImage } from "../utils/render-image";

export type BaseSliderProps = {
  slides: ImageValue[];
  renderImage?: RenderImage;
  showNav?: boolean;
  showNavOnHover?: boolean;
  showCounter?: boolean;
  showIndicators?: boolean;
  loop?: boolean;
  className?: string;
  slideClassName?: string;
};
