import type { Price } from "./generated";

export type TRebateResponse = {
  code: string;
  provider: string;
  balance: Price;
  validUntil: string;
  isRedeemable: boolean;
};
