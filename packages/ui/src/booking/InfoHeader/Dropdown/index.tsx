import React, { useState } from "react";
import { ChevronDown, Copy } from "lucide-react";
import { useUrlObject } from "../../UrlState/hooks";
import { Button } from "@swiss-activities/ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/DropdownMenu";
import { useI18n } from "../../utils/i18n/useI18n";
import { useUser } from "../../utils/user/useUser";

export const InfoHeaderDropdown = () => {
  const { t } = useI18n();
  const { user } = useUser();
  const [open, setOpen] = useState(false);
  const { getHrefWithObjString } = useUrlObject();

  const handleCopy = () => {
    setOpen(false);
    navigator.clipboard.writeText(getHrefWithObjString());
  };

  if (!user?.isAdmin) return null;

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          id="booking-dropdown"
          variant="transparent"
          size="xs"
          className="relative -end-0.5 -top-0.5"
          data-restore-url={getHrefWithObjString()}
        >
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleCopy}>
          {t("general.copyUrl")}
          <Copy />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
