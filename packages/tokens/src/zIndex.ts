export const dsZIndex = {
  base: 0,
  raised: 1,
  sticky: 10,
  navigation: 20,
  dropdown: 30,
  overlay: 40,
  sheet: 50,
  modal: 100,
  popover: 150,
  toast: 200,
  tooltip: 250,
  debug: 9999,
} as const;

export type ZIndexToken = keyof typeof dsZIndex;
