import { ComponentType, ReactNode, useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Loader2Icon, PlusCircle, X } from "lucide-react";
import { I } from "../components/I";
import { Text } from "@swiss-activities/ui";
import { Button, ButtonProps } from "@swiss-activities/ui";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./Command";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";
import { cn } from "../utils/css/cn";
import { useI18n } from "../utils/i18n/useI18n";

export type Option = {
  children?: Option[];
  depth?: number;
  description?: string;
  icon?: ComponentType<{ className?: string }>;
  label: string;
  labelEl?: ReactNode;
  value: string;
};

interface ComboboxProps {
  align?: "start" | "center" | "end";
  buttonProps?: ButtonProps;
  children?: ReactNode;
  contentButtonSize?: boolean;
  contentAutoWidth?: boolean;
  isLoading?: boolean;
  onSelectionChange: (
    selectedValues: Set<string>,
    isSelected?: boolean
  ) => void;
  open?: boolean;
  options: Option[];
  placeholder?: string;
  search?: boolean;
  select?: boolean;
  selectedValues: Set<string>;
  setOpen?: (open: boolean) => void;
  showReset?: boolean;
  single?: boolean;
  sort?: ((a: Option, b: Option) => number) | string;
  tags?: boolean;
  title?: string;
  titleEl?: ReactNode;
  trigger?: ReactNode;
}

export const Combobox = ({
  align = "start",
  buttonProps,
  children,
  contentButtonSize,
  contentAutoWidth = false,
  isLoading,
  onSelectionChange,
  open,
  options,
  placeholder,
  search = true,
  select,
  selectedValues,
  setOpen,
  showReset = true,
  single = false,
  sort = "value",
  tags = true,
  title,
  titleEl,
  trigger,
}: ComboboxProps) => {
  const { t } = useI18n();
  const [width, setWidth] = useState("auto");
  const ref = useRef<HTMLButtonElement | null>(null);

  const onChange = ({
    isSelected,
    option,
  }: {
    isSelected: boolean;
    option: Option;
  }) => {
    if (single) {
      if (isSelected) {
        onSelectionChange(new Set(), isSelected);
      } else {
        onSelectionChange(new Set([option.value]), isSelected);
      }

      return;
    }

    const newSelectedValues = new Set(selectedValues);

    if (isSelected) {
      newSelectedValues.delete(option.value);
    } else if (option.value) {
      newSelectedValues.add(option.value);
    }

    onSelectionChange(newSelectedValues, isSelected);
  };

  useEffect(() => {
    const resize = () => {
      if (ref.current && contentButtonSize) {
        setWidth(ref.current.offsetWidth + "px");
      }
    };

    resize();

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="flex">
      <Popover {...{ open }} onOpenChange={setOpen}>
        {trigger ? (
          trigger
        ) : (
          <PopoverTrigger asChild>
            <Button
              ref={ref}
              variant="outline"
              size="sm"
              className="h-8 shrink-0 border-dashed"
              {...buttonProps}
            >
              {isLoading ? (
                <Loader2Icon className="me-2 h-4 w-4 animate-spin" />
              ) : select ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <PlusCircle className="me-2 h-4 w-4" />
              )}
              {titleEl || title}
            </Button>
          </PopoverTrigger>
        )}
        <PopoverContent
          className={cn("min-w-[200px] p-0", {
            "w-full": select,
            "w-auto": contentAutoWidth,
          })}
          align={align}
          style={contentAutoWidth ? undefined : { width }}
        >
          <Command>
            {search && <CommandInput placeholder={placeholder || title} />}
            <CommandList>
              <CommandEmpty>{t("Table.noResults")}</CommandEmpty>
              <CommandGroup>
                {options
                  .sort(
                    sort
                      ? typeof sort === "string"
                        ? (a, b) =>
                            (a[sort as keyof Option] as string).localeCompare(
                              b[sort as keyof Option] as string
                            )
                        : sort
                      : undefined
                  )
                  .map((option) => {
                    const isSelected = selectedValues.has(option.value);

                    return (
                      <CommandItem
                        key={option.value}
                        onSelect={() => {
                          if (select && setOpen) {
                            setOpen(false);
                          }
                          if (select && isSelected) return;
                          onChange({ isSelected, option });
                        }}
                      >
                        {(!select || (select && selectedValues.size > 0)) && (
                          <div
                            className={cn(
                              "me-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                              isSelected ? "" : "opacity-50 [&_svg]:invisible"
                            )}
                          >
                            <Check className={cn("h-4 w-4")} />
                          </div>
                        )}
                        <span
                          style={{
                            marginLeft: option.depth
                              ? (option.depth - 1) * 12 + "px"
                              : "",
                          }}
                        >
                          {option?.labelEl || option.label}
                        </span>
                        {option?.description && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="relative top-0.5 ms-auto hidden w-auto sm:block">
                                <I icon="circle-info" className="ms-2" />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent side="top" align="start">
                              <Text as="span" size="xs2">
                                {option.description}
                              </Text>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </CommandItem>
                    );
                  })}
              </CommandGroup>
            </CommandList>
            {showReset && selectedValues.size > 0 && tags && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => onSelectionChange(new Set())}
                    className="justify-center text-center"
                  >
                    {t("Table.clearFilters")}
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </Command>
        </PopoverContent>
      </Popover>
      {children ? (
        children
      ) : tags && selectedValues.size > 0 ? (
        <div className="ms-2 hidden flex-wrap gap-2 lg:flex">
          {Array.from(selectedValues).map((value) => {
            const option = options.find((option) => option.value === value);
            if (!option) return null;
            const isSelected = selectedValues.has(option.value);

            return (
              <Button
                form="none"
                variant="tag"
                size="sm"
                key={option.value}
                onClick={() => onChange({ isSelected, option })}
              >
                <X className="me-1.5 h-3 w-3 shrink-0" />
                {option.label}
              </Button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
