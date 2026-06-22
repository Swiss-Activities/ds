import type { Commission } from "./generated";
import { TUser } from "./user";

type TSupplier = {
  supplierId: number;
  id: string;
  name: string;
  bookingNotificationsEmail: string;
  countryCode: string;
  website: string;
  verificationSystem: string;
  locale: string;
  commission: Commission;
  serviceReferences: { data: Record<string, unknown> };
  contentApiId: number;
  user?: TUser | null;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  country_code: string;
};

export type { TSupplier };
