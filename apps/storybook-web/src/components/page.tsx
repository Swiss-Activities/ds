import type { ReactNode } from "react";

export function Page({
  children,
  className = "bg-gray-50",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`min-h-screen pt-0 sm:pt-6 lg:pt-8 ${className}`}>
      {children}
    </div>
  );
}
