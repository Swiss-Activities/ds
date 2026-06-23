import { ButtonHTMLAttributes, RefObject, useEffect, useRef, useState } from "react";
import { type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { buttonVariants } from "./buttonVariants";
import { cn } from "../utils/css/cn";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const Button = ({
  ref,
  className,
  variant,
  size,
  loading = false,
  children,
  ...props
}: ButtonProps & {
  ref?: React.Ref<HTMLButtonElement>;
}) => {
  const internalRef = useRef<HTMLButtonElement>(null);
  const buttonRef = (ref || internalRef) as RefObject<HTMLButtonElement>;
  const [buttonWidth, setButtonWidth] = useState(0);

  useEffect(() => {
    if (buttonRef.current && !loading) {
      setButtonWidth(buttonRef.current.offsetWidth);
    }
  }, [loading, buttonRef]);

  return (
    <button
      ref={buttonRef}
      className={cn(buttonVariants({ variant, size, className }))}
      style={{ width: loading ? `${buttonWidth}px` : undefined }}
      {...props}
    >
      {loading ? (
        <span className="flex text-2xl">
          <Loader2 className="!h-5 !w-5 animate-spin" />
        </span>
      ) : (
        children
      )}
    </button>
  );
};
Button.displayName = "Button";

export { Button, buttonVariants };
