"use client";

import { useSearchParams } from "../i18n/navigation";
import { useUser } from "./useUser";

export const useDistributorId = () => {
  const searchParams = useSearchParams();
  const { user } = useUser();

  const queryDistributorId = searchParams?.get("distributorId");
  if (queryDistributorId) {
    return queryDistributorId;
  }

  return user?.distributor?.invoiceApproved
    ? user?.distributor?.distributorId
    : null;
};
