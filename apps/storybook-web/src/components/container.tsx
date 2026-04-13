import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[1232px] px-2 py-8 sm:px-4">
      {children}
    </div>
  );
}
