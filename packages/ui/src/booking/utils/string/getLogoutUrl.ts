export const getLogoutUrl = (locale: string) => {
  return `/api/auth/logout${
    locale !== "de_CH"
      ? `?returnTo=${encodeURIComponent(
          `/${locale.replace("_CH", "-ch")}`
        )}&t=${Date.now()}`
      : `?t=${Date.now()}`
  }`;
};
