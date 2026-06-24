import { describe, expect, it } from "bun:test";
import { semanticPalette } from "./colors";
import { componentTokens } from "./components";
import twTokens from "./tailwind.cjs";

/**
 * Pins the success-green token to one value across the three places it was
 * hand-copied (PRD TD6) — it had drifted: #17a34a in colors.ts/tailwind.cjs vs
 * #16a34a (tailwind green-600) in components.ts.
 */
describe("semantic success green — single source", () => {
  it("is tailwind green-600 (#16a34a), not the typo'd #17a34a", () => {
    expect(semanticPalette.green).toBe("#16a34a");
  });

  it("tailwind.cjs semantic.green matches the palette (no duplication drift)", () => {
    expect(twTokens.dsTailwindTokens.colors.semantic.green).toBe(semanticPalette.green);
  });

  it("the availability-select component token derives from the palette green", () => {
    expect(componentTokens.bookingFlow.availabilitySelect.selectedBorder).toBe(
      semanticPalette.green,
    );
    expect(componentTokens.bookingFlow.availabilitySelect.iconBackground).toBe(
      semanticPalette.green,
    );
  });
});
