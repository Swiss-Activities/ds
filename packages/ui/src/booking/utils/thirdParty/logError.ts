export const logError = (error: unknown, context?: Record<string, unknown>) => {
  console.error("[booking] error", error, context);
};
