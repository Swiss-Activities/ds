import { Button } from "../button";
import { Logo } from "../logo";
import { Text } from "../text";
import { cn } from "../utils/cn";
import type {
  SiteFooterAppLinksProps,
  SiteFooterLink,
  SiteFooterPaymentMethodsProps,
  SiteFooterPartnerLogo,
  SiteFooterProps,
} from "./site-footer.types";

const footerBlockPadding = "py-10";
const linkClassName =
  "w-full text-sm font-medium text-gray-700 hover:underline xs:text-base";

function Separator() {
  return (
    <div className="sa-container">
      <div className="h-px w-full bg-gray-200" />
    </div>
  );
}

function FooterLink({ item }: { item: SiteFooterLink }) {
  if (item.external) {
    return (
      <a
        className={linkClassName}
        href={item.href}
        onClick={item.onClick}
        rel="nofollow"
        target="_blank"
      >
        <Text size="sm">{item.label}</Text>
      </a>
    );
  }

  return (
    <Button
      className={linkClassName}
      href={item.href}
      onClick={item.onClick}
      type="link"
    >
      <Text size="sm">{item.label}</Text>
    </Button>
  );
}

function FooterLinks({
  links,
  row = false,
}: {
  links: SiteFooterLink[];
  row?: boolean;
}) {
  return (
    <ul
      className={cn("my-0 flex flex-col gap-2 gap-x-8", {
        "flex-row flex-wrap": row,
      })}
    >
      {links.map((item) => (
        <li key={item.id}>
          <FooterLink item={item} />
        </li>
      ))}
    </ul>
  );
}

function PartnerLogo({ item }: { item: SiteFooterPartnerLogo }) {
  const image = (
    <img
      alt={item.alt}
      src={item.src}
      className={cn("block h-auto max-h-12 w-auto max-w-[160px]", item.className)}
    />
  );

  if (!item.href) return image;

  return (
    <a href={item.href} rel="nofollow" target="_blank">
      {image}
    </a>
  );
}

function SocialLink({ item }: { item: SiteFooterLink }) {
  return (
    <a
      aria-label={typeof item.label === "string" ? item.label : undefined}
      href={item.href}
      onClick={item.onClick}
      rel="nofollow"
      target="_blank"
      className="inline-flex h-8 w-8 items-center justify-center text-black transition-colors duration-100 ease-in hover:text-primary"
    >
      <span className="relative -top-0.5 flex [&>svg]:h-5 [&>svg]:w-5">
        {item.label}
      </span>
    </a>
  );
}

const defaultPaymentMethods = [
  { id: "twint", alt: "TWINT", src: "/assets/booking/twint.svg" },
  { id: "visa", alt: "Visa", src: "/assets/booking/visa.svg" },
  { id: "mastercard", alt: "Mastercard", src: "/assets/booking/mastercard.svg" },
  { id: "express", alt: "American Express", src: "/assets/booking/express.svg" },
  { id: "amex", alt: "Amex", src: "/assets/booking/amex.svg" },
  { id: "applepay", alt: "Apple Pay", src: "/assets/booking/applepay.svg" },
  { id: "ideal", alt: "iDEAL", src: "/assets/booking/ideal.svg" },
];

export function SiteFooterAppLinks({
  appStoreHref = "#",
  appStoreSrc = "/assets/appstore/app/de_CH.svg",
  center = false,
  className,
  googlePlayHref = "#",
  googlePlaySrc = "/assets/appstore/play/de_CH.png",
  label = null,
}: SiteFooterAppLinksProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        center && "items-center text-center",
        className
      )}
    >
      {label ? (
        <Text size="sm" bold black>
          {label}
        </Text>
      ) : null}
      <div className="flex flex-wrap items-center gap-2">
        <a href={appStoreHref} rel="nofollow" target="_blank">
          <img
            alt="App Store"
            src={appStoreSrc}
            className="block h-10 w-auto"
          />
        </a>
        <a href={googlePlayHref} rel="nofollow" target="_blank">
          <img
            alt="Google Play"
            src={googlePlaySrc}
            className="block h-10 w-auto"
          />
        </a>
      </div>
    </div>
  );
}

export function SiteFooterPaymentMethods({
  center = false,
  className,
  heading = null,
  methods = defaultPaymentMethods,
}: SiteFooterPaymentMethodsProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        center && "items-center text-center",
        className
      )}
    >
      {heading ? (
        <Text size="sm" bold black>
          {heading}
        </Text>
      ) : null}
      <div className="flex flex-wrap items-center gap-2">
        {methods.map((method) => (
          <img
            key={method.id}
            alt={method.alt}
            src={method.src}
            className={cn(
              "block h-6 w-auto rounded border border-solid border-gray-200 bg-white px-1.5 py-1",
              method.className
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function SiteFooter({
  affiliateWidget = null,
  appLinks = null,
  brand = <Logo size="sm" />,
  bottomText = null,
  className,
  languageSelector = null,
  legalLinks = [],
  newsletter = null,
  partnerLogos = [],
  paymentMethods = null,
  sections = [],
  socialLinks = [],
}: SiteFooterProps) {
  return (
    <section>
      {newsletter}
      <footer
        className={cn(
          "bg-gray-50 pb-[calc(env(safe-area-inset-left)+2.5rem)]",
          className
        )}
      >
        {partnerLogos.length > 0 ? (
          <>
            <div className={cn("sa-container", footerBlockPadding)}>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                {partnerLogos.map((item) => (
                  <PartnerLogo item={item} key={item.id} />
                ))}
              </div>
            </div>
            <Separator />
          </>
        ) : null}
        <div
          className={cn(
            "sa-container grid gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-5 xl:gap-16",
            footerBlockPadding
          )}
        >
          <div className="flex w-full max-w-[250px] flex-col gap-8">
            {brand}
            {languageSelector}
          </div>
          {sections.map((section) => (
            <div className="w-full max-w-[250px]" key={section.id}>
              <Text as="p" size="default" className="mb-2 xs:mb-3">
                {section.title}
              </Text>
              <FooterLinks links={section.links} />
            </div>
          ))}
        </div>
        {(appLinks || socialLinks.length > 0 || paymentMethods) ? (
          <>
            <Separator />
            <div
              className={cn(
                "sa-container flex flex-wrap justify-between gap-x-12 gap-y-8",
                footerBlockPadding
              )}
            >
              <div className="flex flex-wrap gap-x-12 gap-y-8">
                {appLinks}
                {socialLinks.length > 0 ? (
                  <div className="flex flex-wrap items-center gap-4">
                    {socialLinks.map((item) => (
                      <SocialLink item={item} key={item.id} />
                    ))}
                  </div>
                ) : null}
              </div>
              {paymentMethods ? (
                <div className="flex items-center">{paymentMethods}</div>
              ) : null}
            </div>
          </>
        ) : null}
        {(bottomText || legalLinks.length > 0) ? (
          <>
            <Separator />
            <div
              className={cn(
                "sa-container flex flex-wrap justify-between gap-10",
                footerBlockPadding
              )}
            >
              {bottomText ? <Text>{bottomText}</Text> : <span />}
              <FooterLinks row links={legalLinks} />
            </div>
          </>
        ) : null}
        {affiliateWidget}
      </footer>
    </section>
  );
}
