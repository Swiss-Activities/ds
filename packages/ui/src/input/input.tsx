"use client";

import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "../utils/cn";

export type InputProps = React.ComponentPropsWithoutRef<typeof InputPrimitive>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <InputPrimitive
      ref={ref}
      type={type}
      data-slot="input"
      className={cn(
        "m-0 h-10 w-full appearance-none rounded-lg border border-solid border-gray-200 bg-white px-3 py-2 text-sm text-gray-950 outline-none transition placeholder:text-gray-500 focus:border-primary focus:ring-0 focus-visible:border-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
