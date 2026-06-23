import { useEffect, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import { useCartStore } from "../../../Cart/store";
import { useCheckoutStore } from "../../store";
import { Button } from "@swiss-activities/ui";
import { Checkbox } from "../../../components/Form/Checkbox";
import { Text } from "@swiss-activities/ui";
import { useI18n } from "../../../utils/i18n/useI18n";

export const ImportantAgree = () => {
  const { t } = useI18n();
  const [showMore, setShowMore] = useState(false);

  const { cart } = useCartStore(
    useShallow((state) => ({
      cart: state.cart,
    }))
  );

  const {
    hasImportant,
    setHasImportant,
    hasImportantChecked,
    setHasImportantChecked,
  } = useCheckoutStore(
    useShallow((state) => ({
      hasImportant: state.hasImportant,
      setHasImportant: state.setHasImportant,
      hasImportantChecked: state.hasImportantChecked,
      setHasImportantChecked: state.setHasImportantChecked,
    }))
  );

  const activitiesData = cart.customData
    ?.map((data) => data.activity)
    .filter((act) => act?.summary?.infoConfirmationRequired);

  useEffect(() => {
    if (
      !cart?.customData?.length ||
      activitiesData?.length === 0 ||
      hasImportant
    ) {
      return;
    }
    setHasImportant(true);
  }, [activitiesData, cart]);

  if (!cart?.customData?.length) return null;

  return activitiesData.length ? (
    <div
      id="important-agree"
      className="rounded-md border border-dashed border-gray-300 p-3"
    >
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] sm:gap-8">
        <Checkbox
          required
          title={t("booking.important")}
          name="importantAgree"
          controlled
          selected={hasImportantChecked}
          onChange={(e) => setHasImportantChecked(e as unknown as boolean)}
        />
        <Button
          onClick={() => setShowMore(!showMore)}
          as="div"
          size="sm"
          className="mt-0.5"
          text={
            showMore ? t("booking.importantHide") : t("booking.importantShow")
          }
        />
      </div>
      {showMore && (
        <div className="mt-3 space-y-3 sm:ms-8 [&_*]:!text-xs">
          {activitiesData.map((e) => {
            return (
              <div>
                <Text black bold className="mb-1">
                  {e.info.title}
                </Text>
                <div
                  className="prose-sa [&_li]:mb-0 [&_li]:mt-1 [&_p]:mb-0 [&_p]:mt-1 [&_ul]:mb-0"
                  dangerouslySetInnerHTML={{
                    __html: e.info.important_information,
                  }}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  ) : null;
};
