export const dsDurations = {
  instant: 0,
  fast: 120,
  base: 200,
  slow: 320,
  slower: 480,
} as const;

export type DurationToken = keyof typeof dsDurations;

export const dsEasings = {
  standard: [0.2, 0, 0, 1] as const,
  decelerate: [0, 0, 0.2, 1] as const,
  accelerate: [0.4, 0, 1, 1] as const,
  sharp: [0.4, 0, 0.6, 1] as const,
  emphasized: [0.2, 0, 0, 1.05] as const,
} as const;

export type EasingToken = keyof typeof dsEasings;

const toCssCubic = (curve: readonly [number, number, number, number]) =>
  `cubic-bezier(${curve.join(", ")})`;

export const dsEasingsCss = {
  standard: toCssCubic(dsEasings.standard),
  decelerate: toCssCubic(dsEasings.decelerate),
  accelerate: toCssCubic(dsEasings.accelerate),
  sharp: toCssCubic(dsEasings.sharp),
  emphasized: toCssCubic(dsEasings.emphasized),
} as const;

export const dsMotion = {
  durations: dsDurations,
  easings: dsEasings,
  easingsCss: dsEasingsCss,
} as const;

export type DsMotion = typeof dsMotion;
