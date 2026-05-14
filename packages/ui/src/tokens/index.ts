// Back-compat shim. Tokens now live in `@swiss-activities/tokens`; this
// barrel kept so `import ... from '@swiss-activities/ui/tokens'` keeps
// working for existing consumers. Prefer the dedicated package for new
// imports — it has zero React/CVA deps.
export * from "@swiss-activities/tokens";
