import { describe, expect, it } from "bun:test";
import { dsMobileTokens } from "./mobile";
import { dsDurations, dsPressScale, dsSprings } from "./motion";

describe("motion tokens", () => {
  it("durations run from the press to the slowest step", () => {
    const { instant, press, fast, base, slow, slower } = dsDurations;
    expect([instant, press, fast, base, slow, slower]).toEqual(
      [instant, press, fast, base, slow, slower].sort((a, b) => a - b),
    );
  });

  it("every spring settles: a positive duration and a damping ratio in (0, 1]", () => {
    for (const spring of Object.values(dsSprings)) {
      expect(spring.duration).toBeGreaterThan(0);
      expect(spring.dampingRatio).toBeGreaterThan(0);
      expect(spring.dampingRatio).toBeLessThanOrEqual(1);
    }
  });

  it("a press shrinks, and a card less than a control", () => {
    expect(dsPressScale.control).toBeLessThan(dsPressScale.card);
    expect(dsPressScale.card).toBeLessThan(1);
  });

  it("the mobile aggregator carries the springs and the press scale", () => {
    expect(dsMobileTokens.motion.springs).toBe(dsSprings);
    expect(dsMobileTokens.motion.pressScale).toBe(dsPressScale);
  });
});
