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
    __NEXT_DATA__?: {
      props?: {
        pageProps?: {
          pageType?: string;
          page?: { title?: string };
        };
      };
    };
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
