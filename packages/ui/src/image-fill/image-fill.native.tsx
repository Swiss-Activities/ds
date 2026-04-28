import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { renderImageValue } from "../utils/render-image";
import type { BaseImageFillProps } from "./image-fill.types";

export type ImageFillProps = BaseImageFillProps & Omit<ViewProps, "children">;

export function ImageFill({
  image,
  renderImage,
  backgroundColor = "#f3f4f6",
  className,
  ...props
}: ImageFillProps) {
  return (
    <View
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden",
        className
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {renderImageValue(image, renderImage)}
    </View>
  );
}
