import { Button, Text } from "@swiss-activities/ui";

export type WebsiteGatewayNotFoundLabels = {
  /** Big headline ("Seite nicht gefunden."). */
  title: string;
  /** One-liner under it ("Diese Seite existiert nicht."). */
  text: string;
  /** Primary CTA ("Zurück zur Startseite"). */
  cta: string;
};

/**
 * The 404 body — the legacy FourOhFour anatomy (centered headline + copy +
 * home CTA) rendered inside the full page chrome; the header search sits
 * right above, so no extra search trigger is needed.
 */
export function WebsiteGatewayNotFound({
  labels,
  homeHref,
}: {
  labels: WebsiteGatewayNotFoundLabels;
  homeHref: string;
}) {
  return (
    <section className="pt-8 md:pt-12 lg:pt-16 xl:pt-20">
      <div className="sa-container">
        <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
          <Text as="span" size="2xl" gray aria-hidden className="!text-gray-200">
            404
          </Text>
          <Text as="h1" size="lg">
            {labels.title}
          </Text>
          <Text size="default" gray>
            {labels.text}
          </Text>
          <Button type="primary" href={homeHref} className="mt-2">
            {labels.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
