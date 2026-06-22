import trim from "lodash/trim";
import i18n from "../../data/i18n";

export const pagePathToArray = (path: string, filter = false) => {
  const trimmedPath = trim(path, "/").split("/");

  if (filter) {
    return trimmedPath.filter(
      (segment) => !i18n.localesLowerDashes.includes(segment)
    );
  }

  return trimmedPath;
};
