"use client";

import { useEffect, useState } from "react";
import { ImageFill } from "../image-fill";
import { Skeleton } from "../skeleton";
import {
  isImageSource,
  type ImageValue,
  type RenderImage,
} from "../utils/render-image";

type SectionNonBookableMediaProps = {
  image?: ImageValue | null;
  renderImage?: RenderImage;
};

export function SectionNonBookableMedia({
  image,
  renderImage,
}: SectionNonBookableMediaProps) {
  const imageSource = isImageSource(image) ? image : null;
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
  }, [imageSource?.src]);

  return (
    <>
      <ImageFill
        image={image}
        mode="contain"
        renderImage={renderImage}
        onImageLoad={() => setImageLoaded(true)}
        onImageError={() => setImageLoaded(true)}
      />
      {imageSource ? (
        <Skeleton
          full
          loading={!imageLoaded}
          classNameItems="!rounded-none"
        />
      ) : null}
    </>
  );
}
