import { Fragment, useMemo } from "react";
import { Footprints, MapPin } from "lucide-react";
import { Card } from "../../../Card";
import { Title } from "../../../Title";
import { MeetingPointInfo } from "../..";
import { Legend } from "../../Legend";
import { TripLeg } from "./Leg";
import { Transfer } from "./Transfer";
import { useTrips } from "../../queries";
import { Skeleton } from "@swiss-activities/ui";
import { Text } from "@swiss-activities/ui";
import { useI18n } from "../../../utils/i18n/useI18n";
import { useGetTripDetails } from "../../../query/transport/trip";

type WalkingDirections =
  | {
      distance: { text: string; value: number } | null;
      duration: { text: string; value: number } | null;
    }
  | undefined;

type TripDetailsProps = {
  walkingDirections?: WalkingDirections;
  meetingPointInfo?: MeetingPointInfo;
  activityImageUrl?: string;
  tripId?: string;
};

export const TripDetails = ({
  walkingDirections,
  meetingPointInfo,
  activityImageUrl,
  tripId: tripIdProp,
}: TripDetailsProps) => {
  const { t, locale } = useI18n();
  const { selectedTrip } = useTrips();

  const tripId = tripIdProp || selectedTrip?.tripId || selectedTrip?.id || "";

  const { data: detailedTrip, isLoading } = useGetTripDetails(
    { tripId, locale },
    !!tripId
  );

  const legs = detailedTrip?.legs || [];

  const allAttributes = useMemo(() => {
    const attributeMap = new Map<string, { text: string; code: string }>();
    legs.forEach((leg) => {
      leg.attributes?.forEach((attr) => {
        if (!attributeMap.has(attr.code)) {
          attributeMap.set(attr.code, attr);
        }
      });
    });
    return Array.from(attributeMap.values());
  }, [legs]);

  if (!selectedTrip && !tripIdProp) return null;

  return (
    <div>
      <Title>{t("Transport.checkDetails")}</Title>
      {isLoading ? (
        <Skeleton loading amount={1} size="md" classNameItems="!h-[100px]" />
      ) : legs.length > 0 ? (
        <div id="trip-details" className="space-y-2">
          {legs.map((leg, index) => (
            <Fragment key={index}>
              <TripLeg
                leg={leg}
                isFirst={index === 0}
                isLast={index === legs.length - 1}
              />
              {index < legs.length - 1 && (
                <Transfer
                  arrivalTime={leg.end.time}
                  departureTime={legs[index + 1].start.time}
                />
              )}
            </Fragment>
          ))}
          {walkingDirections?.distance && (
            <Card paddingNone className="p-3">
              <div className="flex items-center justify-center gap-2">
                <Footprints size={14} className="text-gray-600" />
                <Text size="sm" className="text-gray-700">
                  {t("Transport.walking")}
                </Text>
                <Text size="sm" className="text-gray-600">
                  {walkingDirections.distance.text}
                  {walkingDirections.duration
                    ? `, ${walkingDirections.duration.text}`
                    : ""}
                </Text>
              </div>
            </Card>
          )}
          {meetingPointInfo?.name && (
            <Card paddingNormalised>
              <div className="flex items-start gap-3">
                {activityImageUrl && (
                  <img
                    src={activityImageUrl}
                    alt=""
                    className="size-20 shrink-0 rounded-lg object-cover"
                  />
                )}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="shrink-0 text-gray-600" />
                    <Text size="sm" className="font-bold text-black">
                      {t("Transport.distanceToMeetingPoint")}
                    </Text>
                  </div>
                  <Text size="sm" className="text-gray-700">
                    {meetingPointInfo.name}
                  </Text>
                </div>
              </div>
            </Card>
          )}
          <Legend attributes={allAttributes} variant="expanded" />
        </div>
      ) : (
        <Skeleton loading amount={1} size="md" classNameItems="!h-[100px]" />
      )}
    </div>
  );
};
