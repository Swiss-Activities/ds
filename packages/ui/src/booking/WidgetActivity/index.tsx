import { useShallow } from "zustand/react/shallow";
import { useBookingStore } from "../store";
import { Activity as Act } from "../stubs";

export const WidgetActivity = () => {
  const { activity } = useBookingStore(
    useShallow((state) => ({
      activity: state.activity,
    }))
  );

  if (!activity) return null;

  return <Act {...{ activity }} inline={true} />;
};
