import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { cn } from "../../../utils/css/cn";
import { Base } from "../Base";

type CheckboxProps = {
  className?: string;
  controlled?: boolean;
  disabled?: boolean;
  help?: string;
  name?: string;
  onChange?: (checked: boolean) => void;
  required?: boolean;
  selected?: boolean;
  title?: string | ReactNode;
  [key: string]: any;
};

export const Checkbox = ({
  className = "",
  controlled = true,
  disabled = false,
  help = "",
  name = "",
  onChange = (_checked: boolean) => {},
  required = false,
  selected = false,
  title = "",
  ...rest
}: CheckboxProps) => {
  const [value, setValue] = useState(selected);

  useEffect(() => {
    if (controlled) {
      setValue(selected);
    }
  }, [onChange, selected, value, controlled]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (controlled) {
      setValue(e.target.checked);
    }
    onChange(e.target.checked);
  };

  return (
    <Base {...{ title, help, className, required }} type="checkbox">
      <input
        {...rest}
        {...{ disabled, required }}
        onChange={changeHandler}
        type="checkbox"
        checked={controlled ? value : undefined}
        defaultChecked={!controlled ? selected : undefined}
        className={cn(
          "form-checkbox relative top-px me-3 h-5 w-5 cursor-pointer rounded border border-solid border-gray-500 bg-white !ring-primary transition duration-100 checked:!bg-primary hover:checked:!bg-dark lg:hover:bg-gray-300",
          {
            "pointer-events-none cursor-not-allowed": disabled,
          }
        )}
      />
    </Base>
  );
};
