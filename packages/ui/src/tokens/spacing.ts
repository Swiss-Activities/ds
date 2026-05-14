export const dsSpacing = {
  0: 0,
  px: 1,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 10,
  3: 12,
  3.5: 14,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
  28: 112,
  32: 128,
} as const;

export type SpacingToken = keyof typeof dsSpacing;

export const dsSpacingSemantic = {
  none: dsSpacing[0],
  hairline: dsSpacing.px,
  xs: dsSpacing[1],
  sm: dsSpacing[2],
  md: dsSpacing[3],
  lg: dsSpacing[4],
  xl: dsSpacing[6],
  "2xl": dsSpacing[8],
  "3xl": dsSpacing[12],
  "4xl": dsSpacing[16],
  screenGutter: dsSpacing[4],
  sectionGap: dsSpacing[6],
  cardPadding: dsSpacing[4],
  stackTight: dsSpacing[2],
  stackDefault: dsSpacing[3],
  stackLoose: dsSpacing[5],
} as const;

export type SpacingSemanticToken = keyof typeof dsSpacingSemantic;
