import path from "path";
import { isStagingDev } from "../env/isStagingDev";

export const getDataFolderPath = (condition = isStagingDev()) => {
  let folderPath = path.join(".", "var");
  if (condition) folderPath = path.join(folderPath, "_staging");
  return folderPath;
};
