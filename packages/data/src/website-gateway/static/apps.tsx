"use client";

import { useEffect } from "react";
import { Icon, Image, Text } from "@swiss-activities/ui";
import { Check } from "@swiss-activities/ui/icons";

import { APPS_IOS_URL, APPS_ANDROID_URL, DEFAULT_APPS_CONTENT } from "./content";
/**
 * `/apps/` — 1:1 port of the legacy apps page (website/modules/pages/apps):
 * two-column hero with the feature checklist and store badges on the left and
 * the CSS phone-frame mockups (ios.png/android.png) on the right. Like the
 * legacy page, mobile visitors are redirected straight to their store.
 */

export interface WebsiteGatewayAppsContent {
  /** Page `<title>` (head meta — not rendered by the component). */
  title: string;
  /** Meta description (head meta — not rendered by the component). */
  description: string;
  hero: {
    title: string;
    /** The legacy `{amount}` interpolation is the consumer's concern. */
    description: string;
    features: string[];
  };
  /** Store badge images (per-locale on the web side). */
  appStoreSrc: string;
  googlePlaySrc: string;
  appStoreHref: string;
  googlePlayHref: string;
}

/** Legacy phone-frame mockup: dark bezel, notch and home bar around a screenshot. */
function PhoneFrame({
  src,
  alt,
  width,
  height,
  primary,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  primary: boolean;
}) {
  if (primary) {
    return (
      <div className="relative z-10 rounded-[16px] bg-[#1a1a1a] p-[4px] shadow-2xl sm:rounded-[24px] sm:p-[6px] lg:rounded-[32px] lg:p-[8px]">
        <div className="relative overflow-hidden rounded-[12px] sm:rounded-[18px] lg:rounded-[24px]">
          <div className="absolute left-1/2 top-[4px] z-10 h-[12px] w-[40px] -translate-x-1/2 rounded-full bg-black sm:top-[6px] sm:h-[14px] sm:w-[50px] lg:top-[8px] lg:h-[18px] lg:w-[65px]" />
          <div className="absolute bottom-[4px] left-1/2 z-10 h-[4px] w-[50px] -translate-x-1/2 rounded-full bg-gray-300 sm:bottom-[6px] sm:h-[5px] sm:w-[70px] lg:bottom-[8px] lg:h-[6px] lg:w-[100px]" />
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="block h-auto w-[140px] sm:w-[180px] lg:w-[260px]"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="-ml-[30px] rounded-[14px] bg-[#1a1a1a] p-[4px] shadow-xl sm:-ml-[40px] sm:rounded-[22px] sm:p-[6px] lg:-ml-[50px] lg:rounded-[28px] lg:p-[8px]">
      <div className="relative overflow-hidden rounded-[10px] sm:rounded-[16px] lg:rounded-[20px]">
        <div className="absolute left-1/2 top-[3px] z-10 h-[10px] w-[32px] -translate-x-1/2 rounded-full bg-black sm:top-[5px] sm:h-[12px] sm:w-[42px] lg:top-[7px] lg:h-[15px] lg:w-[55px]" />
        <div className="absolute bottom-[3px] left-1/2 z-10 h-[3px] w-[40px] -translate-x-1/2 rounded-full bg-gray-300 sm:bottom-[5px] sm:h-[4px] sm:w-[58px] lg:bottom-[7px] lg:h-[5px] lg:w-[85px]" />
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="block h-auto w-[115px] sm:w-[150px] lg:w-[220px]"
        />
      </div>
    </div>
  );
}

export function WebsiteGatewayAppsPage({
  content = DEFAULT_APPS_CONTENT,
  assetBase = "/assets/apps",
  storeRedirect = true,
}: {
  content?: WebsiteGatewayAppsContent;
  /** Base path of the phone screenshots (`ios.png`, `android.png`). */
  assetBase?: string;
  /** Like legacy: send mobile visitors straight to their store. */
  storeRedirect?: boolean;
}) {
  useEffect(() => {
    if (!storeRedirect || typeof navigator === "undefined") return;
    const agent = navigator.userAgent;
    if (/iPhone|iPad|iPod/i.test(agent)) {
      window.location.href = APPS_IOS_URL;
    } else if (/Android/i.test(agent) && /Mobile/i.test(agent)) {
      window.location.href = APPS_ANDROID_URL;
    }
  }, [storeRedirect]);

  return (
    <div className="flex flex-col-reverse items-center gap-8 lg:grid lg:grid-cols-2 lg:gap-16">
      <div className="flex w-full flex-col gap-4">
        <Text as="h1" size="2xl">
          {content.hero.title}
        </Text>
        <Text size="md2" className="text-gray-600">
          {content.hero.description}
        </Text>
        <ul className="mt-4 space-y-3">
          {content.hero.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <span className="bg-primary/10 text-primary flex size-6 shrink-0 items-center justify-center rounded-full">
                <Icon icon={Check} size="sm" />
              </span>
              <Text>{feature}</Text>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-row gap-4">
          <a href={content.appStoreHref} target="_blank" rel="noreferrer">
            <Image src={content.appStoreSrc} alt="App Store" width={135} height={30} />
          </a>
          <a href={content.googlePlayHref} target="_blank" rel="noreferrer">
            <Image src={content.googlePlaySrc} alt="Google Play" width={151} height={30} />
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative flex items-center">
          <PhoneFrame
            src={`${assetBase}/ios.png`}
            alt="Swiss Activities iOS App"
            width={260}
            height={563}
            primary
          />
          <PhoneFrame
            src={`${assetBase}/android.png`}
            alt="Swiss Activities App"
            width={220}
            height={476}
            primary={false}
          />
        </div>
      </div>
    </div>
  );
}
