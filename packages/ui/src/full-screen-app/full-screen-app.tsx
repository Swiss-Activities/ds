"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "../utils/cn";
import type { FullScreenAppProps } from "./full-screen-app.types";

export function FullScreenApp({
  children,
  className,
  lockBody = true,
  open,
  ...props
}: FullScreenAppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open || !lockBody) {
      return;
    }

    const previousBodyPosition = document.body.style.position;
    const previousBodyTop = document.body.style.top;
    const previousBodyLeft = document.body.style.left;
    const previousBodyWidth = document.body.style.width;
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.position = "fixed";
    document.body.style.top = "0";
    document.body.style.left = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.position = previousBodyPosition;
      document.body.style.top = previousBodyTop;
      document.body.style.left = previousBodyLeft;
      document.body.style.width = previousBodyWidth;
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [lockBody, open]);

  if (!open) {
    return null;
  }

  const app = (
    <div
      className={cn(
        "fixed left-0 top-0 z-[190] h-dvh w-screen overflow-hidden bg-white",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );

  if (!mounted) {
    return app;
  }

  return createPortal(app, document.body);
}
