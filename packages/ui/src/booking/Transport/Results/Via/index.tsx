import { Text } from "@swiss-activities/ui";
import { TransportTrip } from "../../../types/transport";

type ViaProps = {
  trip: TransportTrip;
};

export const Via = ({ trip }: ViaProps) => {
  return (
    <Text size="xs" className="text-gray-600">
      via {trip.via}
    </Text>
  );
};
