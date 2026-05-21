"use client";

import { ImageFill } from "../image-fill";
import { Skeleton } from "../skeleton";
import { useImageLoadState } from "../use-image-load-state";
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
  const {
    imageContainerRef,
    imageLoaded,
    handleImageError,
    handleImageLoad,
  } = useImageLoadState<HTMLDivElement>({
    sourceKey: imageSource?.src,
  });

  return (
    <div ref={imageContainerRef} className="relative h-full w-full">
      {imageSource ? (
        <Skeleton
          full
          loading={!imageLoaded}
          className="z-0"
          classNameItems="!rounded-none"
        />
      ) : null}
      <ImageFill
        image={image}
        mode="contain"
        renderImage={renderImage}
        backgroundColor="transparent"
        className="relative z-10"
        onImageLoad={handleImageLoad}
        onImageError={handleImageError}
      />
    </div>
  );
}
