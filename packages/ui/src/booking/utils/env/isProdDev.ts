export const isProdDev = () => {
  return (
    !process.env.NEXT_PUBLIC_BASE_URL?.includes("staging") &&
    process.env.NODE_ENV === "development"
  );
};
