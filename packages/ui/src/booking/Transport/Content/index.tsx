import { useEffect, useRef } from "react";
import dynamic from "../../utils/dynamic";
import { useShallow } from "zustand/react/shallow";
import { Card } from "../../Card";
import { ContentShell } from "../../Content";
import { Total } from "../../Total";
import { BookingTransport } from "..";
import { MeetingPointInfo } from "..";
import { InfoHeader } from "../InfoHeader";
import { TransportPersonalizedOptions } from "../PersonalizedOptions";
import { Products } from "../Products";
import { TripContent } from "../Results/Trip";
import { TripDetails } from "../Results/TripDetails";
import { Tickets } from "../Tickets";
import { useTickets } from "../Tickets/hooks";
import { useTrips } from "../queries";
import {
  useTransportStore,
  useTransportStoreLocal,
} from "../store";
import { useMeetingPointPrefill } from "../useMeetingPointPrefill";
import { Trash } from "../../Trash";
import { useBookingStore } from "../../store";
import { Loader } from "@swiss-activities/ui";
import { Skeleton } from "@swiss-activities/ui";
import { useGetDirections } from "../../query/transport/directions";
import { useGetPlaces } from "../../query/transport/places";

const Checkout = dynamic(
  () =>
    import("../../Checkout").then((m) => ({
      default: m.Checkout,
    })),
  { ssr: false }
);

type ContentProps = {
  meetingPoint?: { latitude: number; longitude: number };
  meetingPointInfo?: MeetingPointInfo;
  bookingDate?: string;
  activityImageUrl?: string;
};

export const Content = ({
  meetingPoint,
  meetingPointInfo,
  bookingDate,
  activityImageUrl,
}: ContentProps) => {
  const { isLoading: isLoadingTickets } = useTickets();
  const { selectedTrip } = useTrips();
  const { active, setActive } = useTransportStore(
    useShallow((state) => ({
      active: state.active,
      setActive: state.setActive,
    }))
  );

  const { reservation, isCheckout } = useBookingStore(
    useShallow((state) => ({
      reservation: state.reservation,
      isCheckout: state.isCheckout,
    }))
  );

  const { setSelectedTrip, from } = useTransportStoreLocal(
    useShallow((state) => ({
      setSelectedTrip: state.setSelectedTrip,
      from: state.from,
    }))
  );

  const hasMeetingPoint =
    meetingPoint !== undefined &&
    meetingPoint.latitude !== 0 &&
    meetingPoint.longitude !== 0;

  const { isLoading: isLoadingMeetingPoint } =
    useMeetingPointPrefill(meetingPoint);

  const { data: stationPlaces } = useGetPlaces(
    {
      coordinates: hasMeetingPoint
        ? {
            latitude: meetingPoint!.latitude,
            longitude: meetingPoint!.longitude,
          }
        : undefined,
    },
    hasMeetingPoint
  );

  const stationGeo = stationPlaces?.[0]?.geoPosition;
  const hasDirectionsParams = hasMeetingPoint && !!stationGeo;

  const directionsParams = hasDirectionsParams
    ? {
        origin: {
          lat: stationGeo.latitude,
          lng: stationGeo.longitude,
        },
        destination: {
          lat: meetingPoint!.latitude,
          lng: meetingPoint!.longitude,
        },
      }
    : null;

  const { data: walkingDirections } = useGetDirections(
    directionsParams ? { ...directionsParams, mode: "walking" } : null,
    hasDirectionsParams
  );

  const hasInitializedSearchDefaults = useRef(false);
  useEffect(() => {
    if (hasInitializedSearchDefaults.current || !bookingDate) return;

    const parsed = new Date(bookingDate);
    const isAllDay =
      parsed.getHours() === 0 &&
      parsed.getMinutes() === 0 &&
      parsed.getSeconds() === 0;

    if (isAllDay) {
      hasInitializedSearchDefaults.current = true;
      const arrivalDate = new Date(parsed);
      arrivalDate.setHours(9, 0, 0, 0);

      useTransportStoreLocal.setState({
        direction: "to",
        calendarDate: parsed,
        time: arrivalDate,
        trips: {},
      });
      return;
    }

    hasInitializedSearchDefaults.current = true;

    const arrivalDate = new Date(parsed);

    useTransportStoreLocal.setState({
      direction: "to",
      calendarDate: arrivalDate,
      time: arrivalDate,
      trips: {},
    });
  }, [bookingDate]);

  useEffect(() => {
    if (reservation) {
      setActive("trash");
    }
  }, [reservation, setActive]);

  const walkingDurationSeconds = walkingDirections?.duration?.value;

  const isCalculatingArrival =
    hasMeetingPoint && bookingDate && !hasInitializedSearchDefaults.current;

  if (isCheckout) {
    return (
      <ContentShell>
        <Checkout />
        <div className="-mx-2 block w-full pb-8 lg:-mx-6" />
      </ContentShell>
    );
  }

  if (!selectedTrip) {
    if (isCalculatingArrival) {
      return (
        <ContentShell>
          <div className="flex flex-1 items-center justify-center">
            <Loader />
          </div>
        </ContentShell>
      );
    }

    return (
      <ContentShell>
        <BookingTransport
          inDrawer
          disableTo={hasMeetingPoint}
          toLoading={isLoadingMeetingPoint}
          autoFocusFrom={!!bookingDate && !from}
          bookingDate={bookingDate}
          walkingDurationSeconds={walkingDurationSeconds}
        />
      </ContentShell>
    );
  }

  const activeScreen = {
    trip: (
      <TripDetails
        walkingDirections={walkingDirections}
        meetingPointInfo={meetingPointInfo}
        activityImageUrl={activityImageUrl}
      />
    ),
    tickets: <Tickets />,
    products: <Products />,
    personalized: <TransportPersonalizedOptions />,
    total: <Total />,
    trash: <Trash />,
  };

  return (
    <ContentShell>
      <div className="flex flex-col space-y-6">
        {reservation && isLoadingTickets ? (
          <Skeleton loading={true} amount={2} size="md" />
        ) : (
          <>
            <Card className="flex flex-col">
              <TripContent
                trip={selectedTrip}
                heading
                onEdit={hasMeetingPoint ? () => setSelectedTrip("") : undefined}
              />
              <InfoHeader />
            </Card>
            {activeScreen[active]}
          </>
        )}
      </div>
      <div className="-mx-2 block w-full pb-8 lg:-mx-6" />
    </ContentShell>
  );
};
