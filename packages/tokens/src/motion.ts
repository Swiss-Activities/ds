export const dsDurations = {
  instant: 0,
  /** Press-in: a control shrinking under the finger. */
  press: 90,
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

/**
 * Springs for movement (positions, sizes, sheets, press release), in the
 * perceptual parameters every current engine takes: `duration` is the
 * perceived duration in ms, `dampingRatio` 1 = no overshoot. Reanimated 4
 * reads both as they are; SwiftUI's `.spring(duration:bounce:)` and Motion's
 * `visualDuration`/`bounce` take `bounce = 1 - dampingRatio` and seconds.
 * The presets are Apple's (WWDC23 «Animate with springs»): smooth = bounce
 * 0, snappy = 0.15, bouncy = 0.3; `release` is the ≈ 80 % damping WWDC18
 * recommends after a gesture with momentum.
 *
 *   smooth  — positions, sizes, sheets opened by a tap
 *   snappy  — chips, segments, step changes, press release
 *   bouncy  — success moments and the mascot only
 *   release — sheet snap, swipe, dismiss (pass the gesture's velocity)
 *   gentle  — full-height sheets
 *
 * Opacity and colour do not spring: they take a duration and an easing.
 */
export const dsSprings = {
  smooth: { duration: 500, dampingRatio: 1 },
  snappy: { duration: 450, dampingRatio: 0.85 },
  bouncy: { duration: 500, dampingRatio: 0.7 },
  release: { duration: 450, dampingRatio: 0.8 },
  gentle: { duration: 550, dampingRatio: 1 },
} as const;

export type SpringToken = keyof typeof dsSprings;

/** How far a pressed target shrinks: cards a little less than controls. */
export const dsPressScale = {
  card: 0.98,
  control: 0.97,
} as const;

export const dsMotion = {
  durations: dsDurations,
  easings: dsEasings,
  easingsCss: dsEasingsCss,
  springs: dsSprings,
  pressScale: dsPressScale,
} as const;

export type DsMotion = typeof dsMotion;
