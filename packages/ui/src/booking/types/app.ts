declare global {
  interface Window {
    Intercom: any;
    dataLayer: any;
    Cookiebot: any;
    hbspt: any;
    gtag: any;
    ttq: any;
    fbq: any;
    botpress: any;
    botpressWebChat: any;
  }
}

type TAppParams = {
  locale: string;
  id: string;
  offerId: string;
};

type TAppSearchParams = {
  [key: string]: string;
};

export type { TAppParams, TAppSearchParams };
