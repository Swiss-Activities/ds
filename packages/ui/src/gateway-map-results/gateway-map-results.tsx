import { lazy, Suspense, type ComponentType } from "react";
import type { GatewayMapResultsProps } from "./gateway-map-results.types";

// The Google Maps stack (~10% of the client bundle) lives in the impl
// module: the browser only fetches it when map results actually render
// (first switch to map view); SSR — which never opens the map but must not
// suspend — gets it synchronously.
const Impl: ComponentType<GatewayMapResultsProps> =
  typeof window === "undefined"
    ? (await import("./gateway-map-results-impl")).default
    : lazy(() => import("./gateway-map-results-impl"));

export function GatewayMapResults(props: GatewayMapResultsProps) {
  return (
    <Suspense fallback={null}>
      <Impl {...props} />
    </Suspense>
  );
}
