import { ReactNode } from "react";

type InfoHeaderTitleProps = {
  children: ReactNode;
};

export const InfoHeaderTitle = ({ children }: InfoHeaderTitleProps) => {
  return <p className="mb-2 text-base font-semibold text-black">{children}</p>;
};
