import { useEffect, useRef } from "react";
import { PersonalizedOptions } from "../../PersonalizedOptions";
import { usePersonalizationFields } from "../Tickets/personalizationHooks";
import { sendTransportEvent } from "../tracking";
import { Skeleton } from "@swiss-activities/ui";

export const TransportPersonalizedOptions = () => {
  const { isLoading } = usePersonalizationFields();
  const hasFiredRef = useRef(false);

  useEffect(() => {
    if (!isLoading && !hasFiredRef.current) {
      hasFiredRef.current = true;
      sendTransportEvent("transport_add_information");
    }
  }, [isLoading]);

  if (isLoading) {
    return <Skeleton loading={true} amount={3} />;
  }

  return <PersonalizedOptions />;
};
