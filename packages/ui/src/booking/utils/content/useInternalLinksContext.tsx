import { useContext, createContext, ReactNode } from "react";

const InternalLinksContext = createContext(null);

export const InternalLinksProvider = ({
  internalLinks,
  children,
}: {
  internalLinks: null;
  children: ReactNode;
}) => {
  return (
    <InternalLinksContext.Provider value={internalLinks}>
      {children}
    </InternalLinksContext.Provider>
  );
};

export const useInternalLinksContext = () => useContext(InternalLinksContext);
