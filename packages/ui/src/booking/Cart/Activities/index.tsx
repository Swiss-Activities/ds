import { useShallow } from "zustand/react/shallow";
import { Activity } from "../../Activity";
import { useCartStore } from "../store";
import { Skeleton } from "@swiss-activities/ui";

export const Activities = () => {
  const { cart, loadingState } = useCartStore(
    useShallow((state) => ({
      cart: state.cart,
      loadingState: state.loadingState,
    }))
  );

  if (loadingState === "loading") {
    return <Skeleton loading={loadingState === "loading"} amount={2} />;
  }

  if (!cart?.customData?.length) {
    return null;
  }

  return (
    <div className="space-y-2">
      {Object.values(cart.customData).map((data, index) => {
        return (
          <div key={data.activity?.id + index}>
            <Activity {...{ cart }} item={data} size="sm" widget />
          </div>
        );
      })}
    </div>
  );
};
