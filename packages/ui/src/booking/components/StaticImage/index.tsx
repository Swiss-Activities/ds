import { Image as DSImage } from "@swiss-activities/ui";
import type { ImageProps } from "@swiss-activities/ui";

type StaticImageProps = ImageProps & {
  fill?: boolean;
  public?: boolean;
};

export const StaticImage = ({
  fill: _fill,
  public: _public,
  alt = "",
  ...rest
}: StaticImageProps) => {
  return <DSImage alt={alt} {...rest} />;
};
