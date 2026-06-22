export const logBookingFlowError = (error: unknown, context?: Record<string, unknown>) => {
  console.error("[booking-flow] error", error, context);
};
