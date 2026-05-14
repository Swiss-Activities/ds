// Back-compat shim. The native-compat layer (Text, Button, font
// helpers) now lives in `@swiss-activities/native-ui`. Existing
// imports `@swiss-activities/ui/native-compat` keep working so this
// is non-breaking, but prefer the new package for net-new code so
// the mobile-app's resolver never reaches the web-side `ui` graph.
export * from "@swiss-activities/native-ui/native-compat";
