import { Button } from "@swiss-activities/ui";
import { Drawer } from "../../components/Drawer";
import { useDrawerStore } from "../../store/drawer";
import { Text } from "@swiss-activities/ui";
import { useI18n } from "../../utils/i18n/useI18n";
import { openChat } from "../../utils/thirdParty/openChat";

export const CheckoutError = () => {
  const { t } = useI18n();
  const closeDrawer = useDrawerStore((state) => state.close);

  const handleTryAgain = () => {
    window.location.reload();
  };

  const handleOpenChat = () => {
    closeDrawer("checkout-error");
    setTimeout(() => {
      openChat();
    }, 250);
  };

  return (
    <Drawer ident="checkout-error" modal notCloseable>
      <div className="flex flex-col gap-4">
        <Text size="default" className="text-center">
          {t("general.somethingWentWrongContact")}
        </Text>
        <div className="grid grid-cols-1 gap-4">
          <Button
            type="primary"
            onClick={handleTryAgain}
            text={t("general.tryAgain")}
          />
          {/*<Button*/}
          {/*  type="secondary"*/}
          {/*  onClick={handleOpenChat}*/}
          {/*  text={t("general.openChat")}*/}
          {/*/>*/}
        </div>
      </div>
    </Drawer>
  );
};
