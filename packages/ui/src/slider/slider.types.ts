import type { ImageValue, RenderImage } from "../utils/render-image";

export type BaseSliderProps = {
  slides: ImageValue[];
  renderImage?: RenderImage;
  showNav?: boolean;
  showCounter?: boolean;
  loop?: boolean;
  className?: string;
};
