import * as React from "react";
import { useEffect, useImperativeHandle, useRef } from "react";
import { cn } from "../utils/css/cn";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  autoHeight?: boolean;
}

const Textarea = ({
  ref,
  autoHeight,
  className,
  ...props
}: TextareaProps & {
  ref?: React.RefObject<HTMLTextAreaElement | null>;
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const updateHeight = () => {
    const textareaElement = textareaRef.current;
    if (textareaElement) {
      textareaElement.style.height = "auto";
      textareaElement.style.height = `${textareaElement.scrollHeight + 2}px`;
    }
  };

  const handleInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
    if (autoHeight) {
      updateHeight();
    }
    props.onInput?.(event);
  };

  useEffect(() => {
    if (!autoHeight) return;

    updateHeight();
    setTimeout(updateHeight, 0);

    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [autoHeight]);

  useEffect(() => {
    updateHeight();
    setTimeout(updateHeight, 0);
  }, [props.value]);

  useImperativeHandle(ref, () => textareaRef.current);

  return (
    <textarea
      className={cn(
        "form-input flex w-full rounded-md border border-solid border-gray-200 bg-transparent px-3 py-2 text-base shadow-sm transition-colors placeholder:text-gray-500 focus:border-primary focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm",
        className
      )}
      ref={textareaRef}
      {...props}
      onInput={handleInput}
    />
  );
};
Textarea.displayName = "Textarea";

export { Textarea };
