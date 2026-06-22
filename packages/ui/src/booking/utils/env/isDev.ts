import { isProdDev } from "./isProdDev";
import { isStagingDev } from "./isStagingDev";

export const isDev = () => isStagingDev() || isProdDev();
