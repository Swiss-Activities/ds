import { ImageFill } from "../image-fill";
import type { ImageValue, RenderImage } from "../utils/render-image";

type SectionNonBookableMediaProps = {
  image?: ImageValue | null;
  renderImage?: RenderImage;
  /** The detail page's main media is its LCP — load it eagerly. */
  priority?: boolean;
};

export function SectionNonBookableMedia({
  image,
  renderImage,
  priority,
}: SectionNonBookableMediaProps) {
  return (
    <div className="relative h-full w-full">
      <ImageFill
        image={image}
        mode="contain"
        renderImage={renderImage}
        backgroundColor="transparent"
        priority={priority}
        className="relative z-10"
        sizes="(min-width: 1024px) 66vw, 100vw"
      />
    </div>
  );
}
