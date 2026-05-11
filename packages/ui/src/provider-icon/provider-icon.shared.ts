export const lucideProviderIconNames = [
  "check",
  "globe",
  "house",
  "user-round",
] as const;

export type LucideProviderIconName =
  (typeof lucideProviderIconNames)[number];

export type ProviderIconDescriptor = {
  provider: "lucide";
  name: LucideProviderIconName;
};
