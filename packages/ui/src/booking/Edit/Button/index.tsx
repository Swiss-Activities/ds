import { useShallow } from "zustand/react/shallow";
import { Inner, type InnerProps } from "../Inner";
import { type BookingStore, useBookingStore } from "../../store";
import { Button } from "@swiss-activities/ui";

type EditButtonProps = {
  active: BookingStore["active"];
  onClick?: () => void;
} & InnerProps;

export const EditButton = ({ active, onClick, ...rest }: EditButtonProps) => {
  const { active: activeBooking } = useBookingStore(
    useShallow((state) => ({
      active: state.active,
    }))
  );

  return (
    <Button
      {...{ onClick }}
      id={`info-header-button-${active}`}
      variant="ghost"
      className="flex h-auto min-h-7 w-full justify-between border-none p-0 shadow-none hover:bg-transparent hover:[&_*]:no-underline"
    >
      <Inner {...rest} showActive activeType={active === activeBooking} />
    </Button>
  );
};
