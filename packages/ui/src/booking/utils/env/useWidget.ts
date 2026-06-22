import { usePathname } from "../i18n/navigation";
import i18n from "../../data/i18n";

export const useWidget = () => {
  const path = usePathname();
  if (!path) return false;

  return (
    path.includes("/w/") ||
    path.includes("/w-booking/") ||
    i18n.localesLowerDashes.some((locale) => path.includes(`/${locale}/w/`)) ||
    i18n.localesLowerDashes.some((locale) =>
      path.includes(`/${locale}/w-booking/`)
    ) ||
    path.includes("&widget=true")
  );
};
