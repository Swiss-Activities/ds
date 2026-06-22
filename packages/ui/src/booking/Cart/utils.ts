import { secureLocalStorage } from "../utils/data/secureLocalStorage";

export const lockCartRestore = () => {
  secureLocalStorage.setItem("cartRestoreLock", "true");
};

export const unlockCartRestore = () => {
  secureLocalStorage.removeItem("cartRestoreLock");
};

export const hasCartRestoreLock = () => {
  return secureLocalStorage.getItem("cartRestoreLock") === "true";
};
