import { useShallow } from "zustand/react/shallow";
import { BookingTransportButton } from "./Button";
import { Content } from "./Content";
import { Places } from "./Places";
import { Results } from "./Results";
import { useTrips } from "./queries";
import { useTransportStore } from "./store";
import { useBookingStore } from "../store";
import { Drawer } from "../components/Drawer";
import { useI18n } from "../utils/i18n/useI18n";

type BookingTransportProps = {
  inDrawer?: boolean;
  disableTo?: boolean;
  toLoading?: boolean;
  autoFocusFrom?: boolean;
  bookingDate?: string;
  walkingDurationSeconds?: number;
};

export const BookingTransport = ({
  inDrawer,
  disableTo,
  toLoading,
  autoFocusFrom,
  bookingDate,
  walkingDurationSeconds,
}: BookingTransportProps) => {
  return (
    <>
      <div className={inDrawer ? "grid gap-8 pb-8" : "mx-auto grid gap-8"}>
        <div>
          <Places
            disableTo={disableTo}
            toLoading={toLoading}
            autoFocusFrom={autoFocusFrom}
          />
        </div>
        <Results
          bookingDate={bookingDate}
          walkingDurationSeconds={walkingDurationSeconds}
        />
      </div>
    </>
  );
};

export type MeetingPointInfo = {
  name?: string;
  address?: string;
  activity?: string;
  importantInfo?: string;
};

type TransportProps = {
  meetingPoint?: { latitude: number; longitude: number };
  meetingPointInfo?: MeetingPointInfo;
  bookingDate?: string;
  activityImageUrl?: string;
};

export const Transport = ({
  meetingPoint,
  meetingPointInfo,
  bookingDate,
  activityImageUrl,
}: TransportProps) => {
  const { t } = useI18n();
  const resetTransport = useTransportStore((state) => state.reset);
  const { selectedTrip } = useTrips();
  const { setReservation, setIsReservationLoaded, setTickets, isCheckout } =
    useBookingStore(
      useShallow((state) => ({
        setReservation: state.setReservation,
        setIsReservationLoaded: state.setIsReservationLoaded,
        setTickets: state.setTickets,
        isCheckout: state.isCheckout,
      }))
    );

  const handleClose = () => {
    setTickets({});
    resetTransport();
    setReservation(null);
    setIsReservationLoaded(false);
  };

  return (
    <Drawer
      ident="transport-modal"
      modal
      flush={true}
      bottom={selectedTrip ? <BookingTransportButton /> : null}
      bottomLarge={!isCheckout}
      desktopDrawer="right"
      title={t("Transport.bookTrip")}
      mobileTitle={false}
      classNameInner="bg-bg"
      onClose={handleClose}
    >
      <Content
        meetingPoint={meetingPoint}
        meetingPointInfo={meetingPointInfo}
        bookingDate={bookingDate}
        activityImageUrl={activityImageUrl}
      />
    </Drawer>
  );
};
