export const isStagingDev = () => {
  return (
    process.env.NODE_ENV === "development" &&
    process.env.NEXT_PUBLIC_BOOKINGAPI_HOST?.includes("staging")
  );
};
