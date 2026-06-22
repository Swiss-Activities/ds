import {
  useEffect,
  useState,
  ChangeEvent,
  useMemo,
  ReactNode,
  useRef,
} from "react";
import type { ComponentProps } from "react";
import { Button } from "@swiss-activities/ui";
import { Drawer } from "../../Drawer";
import { useDrawerStore } from "../../../store/drawer";
import { Flag } from "@swiss-activities/ui";
import { Radio } from "../Radio";
import { Combobox } from "../../../ui/Combobox";
import { cn } from "../../../utils/css/cn";
import { useI18n } from "../../../utils/i18n/useI18n";
import { useUser } from "../../../utils/user/useUser";
import { Base } from "../Base";

export type SelectOption = {
  disabled?: boolean;
  label: string;
  labelEl?: ReactNode;
  labelExtra?: string;
  value: string;
};

export type SelectProps = {
  advanced?: "mobile" | "desktop" | "both";
  advancedAlign?: "start" | "center" | "end";
  advancedAutoWidth?: boolean;
  check?: boolean;
  className?: string;
  desktopDrawer?: "left" | "right";
  drawer?: "mobile" | "desktop" | "both";
  name?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  options?: SelectOption[];
  required?: boolean;
  row?: boolean;
  rowFull?: boolean;
  selected?: string;
  title?: string;
  unsorted?: boolean;
} & Omit<ComponentProps<"select">, "onChange">;

const SelectCombobox = ({
  advanced,
  align,
  autoWidth,
  isFlag,
  isValid,
  onChange,
  openedSelect,
  options: optionsProp,
  selectedLabel,
  setOpenedSelect,
  title,
  value,
}: {
  advanced?: "mobile" | "desktop" | "both";
  align?: "start" | "center" | "end";
  autoWidth?: boolean;
  isFlag: boolean;
  isValid?: boolean;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  openedSelect: boolean;
  options: SelectOption[];
  selectedLabel?: string;
  setOpenedSelect: (open: boolean) => void;
  title?: string;
  value: string;
}) => {
  const firstEmit = useRef(false);
  const buttonClassName = cn(
    "h-[40px] text-base w-full text-left justify-end px-3 gap-1 flex-row-reverse sm:text-sm",
    {
      "border-green-600 focus:border-green-600": isValid,
      "lg:hidden": advanced === "mobile",
      "hidden lg:flex": advanced === "desktop",
    }
  );

  const options = useMemo(() => {
    const opt = optionsProp;

    if (isFlag) {
      return opt.map((option) => {
        return {
          ...option,
          labelEl: (
            <div className="flex items-center gap-2">
              <Flag countryCode={option.value} />
              <span>{option.label}</span>
            </div>
          ),
        };
      });
    }

    return opt;
  }, [optionsProp, isFlag]);

  useEffect(() => {
    if (firstEmit.current) return;
    if (value && isFlag) {
      onChange({
        target: { value },
      } as unknown as ChangeEvent<HTMLSelectElement>);
      firstEmit.current = true;
    }
  }, [value, isFlag]);

  return (
    <Combobox
      {...{ options }}
      open={openedSelect}
      setOpen={setOpenedSelect}
      onSelectionChange={(e) => {
        onChange({
          target: { value: [...e][0] },
        } as unknown as ChangeEvent<HTMLSelectElement>);
      }}
      selectedValues={new Set(value ? [value] : [])}
      title={selectedLabel || title}
      titleEl={isFlag ? options.find((e) => e.value === value)?.labelEl : null}
      placeholder={title}
      single
      buttonProps={{
        size: "md",
        className: buttonClassName,
        disabled: options.length === 0,
      }}
      select
      search={options.length > 10}
      contentButtonSize={!autoWidth}
      contentAutoWidth={autoWidth}
      align={align}
      sort=""
      tags={false}
    />
  );
};

export const Select = ({
  advanced,
  advancedAlign = "start",
  advancedAutoWidth = false,
  check = false,
  className = "",
  desktopDrawer,
  drawer,
  name,
  onChange = () => {},
  options = [],
  required = false,
  row = false,
  rowFull = false,
  selected = "",
  title = "",
  unsorted = false,
  ...rest
}: SelectProps) => {
  const { t } = useI18n();
  const { user, isLoading } = useUser();
  const open = useDrawerStore((state) => state.setOpen);
  const close = useDrawerStore((state) => state.close);
  const [openedSelect, setOpenedSelect] = useState(false);
  const [value, setValue] = useState("");

  const isSelected =
    selected !== "" &&
    selected !== undefined &&
    options?.map((e) => e.value)?.includes(selected);
  const isValid =
    check &&
    ((value !== "" &&
      value !== undefined &&
      options?.map((e) => e.value)?.includes(value)) ||
      isSelected);
  const id = name || (title && title.toLowerCase());
  const selectedLabel = options.find((e) => e.value === selected)?.label;
  const isFlag = options?.some((e) =>
    ["DE", "EN", "FR", "IT"].includes(e.value)
  );
  const optionsNotDisabled = options?.filter((e) => !e.disabled);
  const optionsSorted = isFlag
    ? options?.sort((a, b) => a.label.localeCompare(b.label))
    : options;
  const optionsSortedAndNotDisabled = optionsSorted?.filter(
    (e) => !e?.disabled
  );

  useEffect(() => {
    setValue(selected);
  }, [selected]);

  useEffect(() => {
    if (isLoading || value || !isFlag) return;

    let initialCountryCode: string | null = null;

    try {
      if (
        user?.countryCode &&
        options?.some((opt) => opt.value === user.countryCode)
      ) {
        initialCountryCode = user.countryCode;
      } else {
        const countryFromAttribute = document.documentElement.dataset.country;
        if (
          countryFromAttribute &&
          options?.some((opt) => opt.value === countryFromAttribute)
        ) {
          initialCountryCode = countryFromAttribute;
        }
      }
    } catch (e) {
      initialCountryCode = null;
    }

    if (initialCountryCode) {
      setValue(initialCountryCode);
    }
  }, [isLoading, user, value, isFlag, options]);

  return (
    <>
      <Base
        {...{ title, row, rowFull, isValid, required }}
        classNameCircle={cn("!end-10", {
          "!end-2 lg:!end-10": advanced === "mobile",
          "lg:!end-2": advanced === "desktop",
          "!end-2": advanced === "both",
        })}
      >
        <select
          {...rest}
          {...{ value, required }}
          name={id}
          className={cn(
            "form-select h-[40px] max-w-full rounded-md border border-solid border-gray-300 text-base text-black transition-colors duration-100 ease-in focus:border-primary focus:ring-0 disabled:text-gray-500 disabled:opacity-100 sm:text-sm",
            {
              "border-green-600 pe-16 focus:border-green-600": isValid,
              "pointer-events-none sm:pointer-events-auto": drawer === "mobile",
              "lg:pointer-events-none": drawer === "desktop",
              "pointer-events-none": drawer === "both",
              hidden: advanced === "both",
              "hidden lg:flex": advanced === "mobile",
              "lg:hidden": advanced === "desktop",
            },
            className
          )}
          onChange={(e) => {
            onChange(e);
            setValue(e.target.value);
          }}
        >
          {(isFlag ? optionsSorted : options).map((item) => {
            return (
              <option
                value={item.value}
                key={`select-${item.value}`}
                disabled={item.disabled}
              >
                {item.label + (item?.labelExtra || "")}
              </option>
            );
          })}
        </select>
        {advanced ? (
          <SelectCombobox
            {...{
              className,
              advanced,
              isFlag,
              isValid,
              onChange,
              openedSelect,
              selectedLabel,
              setOpenedSelect,
              title,
              value,
            }}
            align={advancedAlign}
            autoWidth={advancedAutoWidth}
            options={optionsSortedAndNotDisabled}
          />
        ) : null}
      </Base>
      {drawer && (
        <>
          <Button
            onClick={() => open(`select-${id}`)}
            className={cn("absolute bottom-0 start-0 h-full w-full opacity-0", {
              "lg:hidden": drawer === "mobile",
              "hidden lg:flex": drawer === "desktop",
            })}
          />
          <Drawer
            {...{ title }}
            ident={`select-${id}`}
            desktopDrawer={desktopDrawer || "right"}
            bottom={
              <Button
                className="w-full"
                type={selected ? "primary" : "instruction"}
                onClick={() => close(`select-${id}`)}
              >
                {title} {t("activity.widget.choose")}
              </Button>
            }
          >
            <Radio
              required
              options={optionsNotDisabled}
              selected={selected}
              showHelp
              divide
              onChange={(e) => {
                onChange({
                  target: {
                    value: e,
                  },
                } as unknown as ChangeEvent<HTMLSelectElement>);
                setValue(e);
              }}
            />
          </Drawer>
        </>
      )}
    </>
  );
};
