import { TextareaHTMLAttributes } from "react";
import { Base } from "../Base";
import { cn } from "../../../utils/css/cn";

type TextareaProps = {
  className?: string;
  required?: boolean;
  title?: string;
  value?: string;
  [key: string]: any;
};

export const Textarea = ({
  className = "",
  required = false,
  title = "",
  value = "",
  ...rest
}: TextareaProps & TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <Base {...{ title, required }}>
      <textarea
        {...rest}
        {...{ value, required }}
        className={cn(
          `form-textarea w-full rounded-md border border-solid border-gray-300 text-base text-black transition-colors duration-100 ease-in focus:border-primary focus:ring-0 sm:text-sm`,
          className
        )}
      />
    </Base>
  );
};
