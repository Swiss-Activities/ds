import type { ViewProps } from "react-native";
import { ScrollView, Text, View } from "react-native";
import Svg, {
  Defs,
  LinearGradient,
  Rect,
  Stop,
} from "react-native-svg";
import { Icon } from "../icon/icon.native";
import { ChevronRight } from "../icons/index.native";
import { dsMobileTokens } from "../tokens/mobile";
import type { BaseBreadcrumbsProps } from "./breadcrumbs.types";

export type BreadcrumbsProps = BaseBreadcrumbsProps &
  Omit<ViewProps, "children">;

export function Breadcrumbs({
  items,
  white = false,
  ignoreLast = false,
  gradient = false,
  className: _className,
  style,
  ...props
}: BreadcrumbsProps) {
  const tokens = dsMobileTokens.components.breadcrumb;

  return (
    <View style={[{ position: "relative" }, style]} {...props}>
      {gradient ? (
        <Svg
          pointerEvents="none"
          width={tokens.gradientWidth}
          height="100%"
          style={{ position: "absolute", right: 0, top: 0, bottom: 0, zIndex: 10 }}
        >
          <Defs>
            <LinearGradient id="breadcrumbs-gradient" x1="100%" y1="0%" x2="0%" y2="0%">
              <Stop
                offset="0%"
                stopColor={
                  gradient === "gray"
                    ? tokens.grayGradientColor
                    : tokens.whiteGradientColor
                }
              />
              <Stop
                offset="100%"
                stopColor={
                  gradient === "gray"
                    ? tokens.grayGradientColor
                    : tokens.whiteGradientColor
                }
                stopOpacity={0}
              />
            </LinearGradient>
          </Defs>
          <Rect width="100%" height="100%" fill="url(#breadcrumbs-gradient)" />
        </Svg>
      ) : null}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            paddingRight: 40,
          }}
        >
          {items.map((item, index) => {
            const isLast = ignoreLast && items.length === index + 1;

            return (
              <View
                key={`${item.href}-${item.label}-${index}`}
                style={{ alignItems: "center", flexDirection: "row" }}
              >
                <Text
                  style={{
                    color: isLast
                      ? white
                        ? tokens.whiteCurrentColor
                        : tokens.currentColor
                      : white
                        ? tokens.whiteItemColor
                        : tokens.itemColor,
                    fontFamily: tokens.fontFamily,
                    fontSize: tokens.fontSize,
                    lineHeight: tokens.lineHeight,
                  }}
                >
                  {item.label}
                </Text>
                {items.length > index + 1 && (
                  <View style={{ paddingHorizontal: 6 }}>
                    <Icon
                      icon={ChevronRight}
                      size="xs"
                      color={
                        white
                          ? tokens.whiteSeparatorColor
                          : tokens.separatorColor
                      }
                      strokeWidth={2}
                    />
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
