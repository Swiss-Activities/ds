import { usePathname } from "../i18n/navigation";
import i18n from "../../data/i18n";

export const useChat = () => {
  const path = usePathname();
  if (!path) return false;

  return (
    path.includes("/chat/") ||
    i18n.localesLowerDashes.some((locale) => path.includes(`/${locale}/chat/`))
  );
};
