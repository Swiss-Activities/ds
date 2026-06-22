import { Fragment, useEffect, useState } from "react";
import { Title } from "../Title";
import { cn } from "../../../utils/css/cn";
import { Base } from "../Base";

type RadioOption = {
  label: string;
  value: string;
  disabled?: boolean;
  description?: string;
};

type RadioProps = {
  className?: string;
  defaultValue?: string;
  divide?: boolean;
  onChange?: (value: string) => void;
  options?: RadioOption[];
  required?: boolean;
  reverse?: boolean;
  selected?: string;
  showHelp?: boolean;
  title?: string;
  [key: string]: any;
};

export const Radio = ({
  className = "",
  defaultValue = "",
  divide = false,
  onChange = () => {},
  options = [],
  required = false,
  reverse = false,
  selected = "",
  showHelp = true,
  title = "",
  ...rest
}: RadioProps) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(selected);
  }, [selected]);

  return (
    <div className="space-y-1">
      <Title {...{ title, required }} className="!mb-3 block font-semibold" />
      <div>
        {options.map((item, i, arr) => {
          return (
            <Fragment key={`radio-${i}`}>
              {divide && i !== arr.length && i !== 0 && (
                <div className="!mb-3.5 !mt-2 block h-px w-full bg-gray-200" />
              )}
              <Base
                {...{ reverse }}
                showHelp={showHelp && value === item.value}
                type="radio"
                title={item.label}
                help={item.description}
              >
                <input
                  {...rest}
                  required={required && i === 0}
                  className={cn(
                    "form-radio relative top-px me-3.5 h-5 w-5 cursor-pointer border border-solid border-gray-500 bg-white !ring-primary checked:!bg-primary hover:checked:!bg-dark"
                  )}
                  name={title || undefined}
                  type="radio"
                  checked={value === item.value}
                  disabled={item.disabled}
                  onChange={() => {
                    onChange(item.value);
                    setValue(item.value);
                  }}
                />
              </Base>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
