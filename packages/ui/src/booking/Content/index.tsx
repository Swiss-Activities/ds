import { type ReactNode, useEffect } from "react";
import { InfoIcon, TicketIcon } from "lucide-react";
import dynamic from "../utils/dynamic";
import { useShallow } from "zustand/react/shallow";
import { BookingCalendar } from "../Calendar/BookingCalendar";
import { BookingCalendarV2 } from "../Calendar/BookingCalendarV2";
import { Card } from "../Card";
import { InfoHeader } from "../InfoHeader";
import { Offers } from "../Offers";
import { OffersV2 } from "../OffersV2";
import { PersonalizedOptions } from "../PersonalizedOptions";
import { PoweredBy } from "../PoweredBy";
import { Tickets } from "../Tickets";
import { TicketsV2 } from "../TicketsV2";
import { Total } from "../Total";
import { TripContent } from "../Transport/Results/Trip";
import { useTrip } from "../Transport/queries";
import { Trash } from "../Trash";
import { WidgetActivity } from "../WidgetActivity";
import { useBookingStore } from "../store";
import { useMessagesStore } from "../store/messages";
import { ChatButton } from "../stubs";
import { useSearchStore } from "../store/search";
import { Skeleton } from "@swiss-activities/ui";
import { useAffiliateStore } from "../store/affiliateStore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";
import { cn } from "../utils/css/cn";
import { useWidget } from "../utils/env/useWidget";
import { useI18n } from "../utils/i18n/useI18n";

const Checkout = dynamic(
  () =>
    import("../Checkout").then((m) => ({
      default: m.Checkout,
    })),
  { ssr: false }
);

type ContentShellProps = {
  children?: ReactNode;
};

export const ContentShell = ({ children }: ContentShellProps) => {
  return (
    <div className="flex flex-col pt-4 lg:h-[calc(var(--vh)-54px-97px)] lg:pt-6">
      {children}
    </div>
  );
};

type ContentProps = {
  children?: ReactNode;
};

export const Content = ({ children }: ContentProps) => {
  const { t } = useI18n();
  const isWidget = useWidget();
  const { data } = useAffiliateStore(
    useShallow((state) => ({
      data: state.data,
    }))
  );
  const {
    active,
    flowType,
    isChat,
    isCheckout,
    isLoading,
    isRestore,
    reservation,
    setError,
    setWidgetTab,
    widgetTab,
  } = useBookingStore(
    useShallow((state) => ({
      active: state.active,
      flowType: state.flowType,
      isChat: state.isChat,
      isCheckout: state.isCheckout,
      isLoading: state.isLoading,
      isRestore: state.isRestore,
      reservation: state.reservation,
      setError: state.setError,
      setWidgetTab: state.setWidgetTab,
      widgetTab: state.widgetTab,
    }))
  );
  let [date] = useSearchStore((state) => [state.date, state.setDate]);
  const { createNewConversation } = useMessagesStore();
  const isTransport = !!reservation?.tripId;
  const { data: trip, isLoading: isLoadingTrip } = useTrip(
    reservation?.tripId || ""
  );

  const activeScreen: Partial<Record<typeof active, ReactNode>> = {
    offers: flowType === "offers-date" ? <OffersV2 /> : <Offers />,
    tickets: flowType === "offers-date" ? <TicketsV2 /> : <Tickets />,
    date:
      flowType === "offers-date" ? <BookingCalendarV2 /> : <BookingCalendar />,
    personalized: <PersonalizedOptions />,
    total: <Total />,
    trash: <Trash />,
  };

  useEffect(() => {
    setError(null);
  }, [active]);

  const logo = data?.widgetLogoUrl ? (
    <img
      src={data?.widgetLogoUrl}
      alt="logo"
      className="mx-auto mt-4 w-full max-w-[150px] lg:mx-0 lg:mt-0"
    />
  ) : null;

  if (isTransport) {
    return (
      <ContentShell>
        {isLoadingTrip ? (
          <Skeleton loading={true} amount={2} size="md" />
        ) : (
          <div className="flex flex-col space-y-6">
            {trip && (
              <Card>
                <TripContent
                  trip={trip}
                  heading
                  hideEdit
                  ticketStyle
                  reservation={reservation}
                />
              </Card>
            )}
            <Trash />
          </div>
        )}
      </ContentShell>
    );
  }

  return (
    <ContentShell>
      <Skeleton loading={isLoading} amount={3} />
      <div
        className={cn("flex flex-col space-y-6", {
          hidden: isLoading && !isCheckout,
        })}
      >
        {isCheckout ? (
          <Checkout />
        ) : data?.widgetShowNavigation || isChat || isRestore ? (
          <Tabs
            value={widgetTab}
            onValueChange={(value) =>
              setWidgetTab(value as "booking" | "activity")
            }
          >
            {logo}
            <TabsList
              className={cn("mb-4 grid w-full grid-cols-2", {
                "mt-4": data?.widgetLogoUrl,
              })}
            >
              <TabsTrigger value="booking">
                <TicketIcon className="me-2 hidden w-4 shrink-0 xs:block" />
                {t("offerCard.bookNow")}
              </TabsTrigger>
              <TabsTrigger value="activity">
                <InfoIcon className="me-2 hidden w-4 shrink-0 xs:block" />
                {t("pages.confirmation.more")}
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="booking"
              className="flex flex-col space-y-8"
              forceMount
            >
              <InfoHeader />
              {
                activeScreen[
                  !date && flowType === "date-offers" ? "date" : active
                ]
              }
              {flowType !== "offers-date" && <ChatButton className="mt-8" />}
              {children}
            </TabsContent>
            <TabsContent value="activity" forceMount>
              <WidgetActivity />
            </TabsContent>
          </Tabs>
        ) : (
          <>
            {logo}
            <InfoHeader />
            {
              activeScreen[
                !date && flowType === "date-offers" ? "date" : active
              ]
            }
            {flowType !== "offers-date" && (
              <ChatButton className="mt-8" onClick={createNewConversation} />
            )}
            {children}
          </>
        )}
      </div>
      <div className="-mx-2 block w-full pb-8 lg:-mx-6" />
      {isWidget && <PoweredBy />}
    </ContentShell>
  );
};
