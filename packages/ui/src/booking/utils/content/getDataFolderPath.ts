import { isStagingDev } from "../env/isStagingDev";

export const getDataFolderPath = (condition = isStagingDev()) => {
  let folderPath = "var";
  if (condition) folderPath = `${folderPath}/_staging`;
  return folderPath;
};
