import type { CountryCode } from "libphonenumber-js";
import { create } from "zustand";

export const defaultData = {
  countryCode: "CH",
  email: "",
  confirmEmail: "",
  fullName: "",
  lastName: "",
  notes: "",
  phoneNumber: "",
} as {
  countryCode: CountryCode;
  email: string;
  confirmEmail: string;
  fullName: string;
  lastName: string;
  notes?: string;
  phoneNumber: string;
};

export type CheckoutStore = {
  data: typeof defaultData;
  setData: (
    data:
      | typeof defaultData
      | ((prev: typeof defaultData) => typeof defaultData)
  ) => void;

  dataPayyo: {
    paymentMethod?: string;
    paymentMethodCardId?: string;
    paymentMethodSaveCard?: boolean;
  };
  setDataPayyo: (dataPayyo: CheckoutStore["dataPayyo"]) => void;

  hasImportant: boolean;
  setHasImportant: (hasImportant: CheckoutStore["hasImportant"]) => void;

  hasImportantChecked: boolean;
  setHasImportantChecked: (
    hasImportantChecked: CheckoutStore["hasImportantChecked"]
  ) => void;

  isLoading: boolean;
  setIsLoading: (isLoading: CheckoutStore["isLoading"]) => void;

  reset: () => void;
};

export const useCheckoutStore = create<CheckoutStore>((set, get) => ({
  data: defaultData,
  setData: (dataOrUpdater) =>
    set({
      data:
        typeof dataOrUpdater === "function"
          ? dataOrUpdater(get().data)
          : dataOrUpdater,
    }),

  dataPayyo: {
    paymentMethod: "",
    paymentMethodCardId: "",
    paymentMethodSaveCard: false,
  },
  setDataPayyo: (dataPayyo) => {
    const currentDataPayyo = get().dataPayyo;
    set({
      dataPayyo: {
        ...currentDataPayyo,
        ...dataPayyo,
      },
    });
  },

  hasImportant: false,
  setHasImportant: (hasImportant) => set({ hasImportant }),

  hasImportantChecked: false,
  setHasImportantChecked: (hasImportantChecked) => set({ hasImportantChecked }),

  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),

  reset: () =>
    set({
      isLoading: false,
      dataPayyo: {
        paymentMethod: "",
        paymentMethodCardId: "",
        paymentMethodSaveCard: false,
      },
    }),
}));
