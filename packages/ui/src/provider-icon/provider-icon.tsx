import type { ComponentType } from "react";
import { Icon, type IconProps } from "../icon/icon";
import {
  Check,
  Globe,
  House,
  UserRound,
  type LucideProps,
} from "../icons";
import type {
  LucideProviderIconName,
  ProviderIconDescriptor,
} from "./provider-icon.shared";

export type ProviderIconProps = Omit<IconProps, "icon"> & {
  icon?: ProviderIconDescriptor | null;
};

const lucideIcons = {
  check: Check,
  globe: Globe,
  house: House,
  "user-round": UserRound,
} satisfies Record<LucideProviderIconName, ComponentType<LucideProps>>;

export function ProviderIcon({ icon, ...props }: ProviderIconProps) {
  if (!icon || icon.provider !== "lucide") {
    return null;
  }

  return <Icon icon={lucideIcons[icon.name]} {...props} />;
}
