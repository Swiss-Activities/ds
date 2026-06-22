export const openConsent = () => {
  try {
    window.Cookiebot.renew();
  } catch (e) {}
};
