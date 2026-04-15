"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import type { ViewProps } from "react-native";
import { Pressable, View } from "react-native-css/components";
import { Button } from "../button/button.native";
import { Checkbox } from "../checkbox/checkbox.native";
import { Icon } from "../icon/icon.native";
import { ChevronDown, Plus } from "../icons/index.native";
import { Text } from "../text/text.native";
import { cn } from "../utils/cn";
import type {
  BaseFilterCheckboxGroupProps,
  FilterCheckboxGroupItem,
} from "./filter-checkbox-group.types";

function FilterCheckboxLabel({
  label,
  count,
}: {
  label: FilterCheckboxGroupItem["label"];
  count?: number;
}) {
  return (
    <View className="flex flex-row items-center">
      {typeof label === "string" || typeof label === "number" ? (
        <Text size="sm" className="relative text-sm text-gray-900" style={{ top: 2 }}>
          {label}
        </Text>
      ) : (
        label
      )}
      {typeof count === "number" ? (
        <View className="ml-2 rounded bg-blue/10 px-1 py-1">
          <Text size="xs" className="text-blue">
            {count}
          </Text>
        </View>
      ) : null}
    </View>
  );
}

function FilterCheckboxList({
  items,
  lessLabel,
  maxVisible,
  moreLabel,
  onItemToggle,
}: {
  items: FilterCheckboxGroupItem[];
  lessLabel: ReactNode;
  maxVisible: number;
  moreLabel: (remaining: number) => ReactNode;
  onItemToggle?: BaseFilterCheckboxGroupProps["onItemToggle"];
}) {
  const [isAll, setIsAll] = useState(false);
  const [selectedById, setSelectedById] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setSelectedById(
      Object.fromEntries(
        items.map((item) => [item.id, Boolean(item.selected)])
      )
    );
  }, [items]);

  const visibleItems = items.slice(0, isAll ? items.length : maxVisible);

  return (
    <View>
      {visibleItems.map((item) => (
        <Checkbox
          key={item.id}
          title={<FilterCheckboxLabel label={item.label} count={item.count} />}
          selected={Boolean(selectedById[item.id])}
          disabled={item.disabled}
          className="py-1"
          onChange={(nextValue) => {
            setSelectedById((current) => ({
              ...current,
              [item.id]: nextValue,
            }));
            onItemToggle?.(item.id, nextValue);
          }}
        />
      ))}

      {items.length > maxVisible ? (
        <Button
          type="link"
          className="mt-1"
          icon={!isAll ? <Icon icon={Plus} size="xs" color="#111827" /> : null}
          text={isAll ? lessLabel : moreLabel(items.length - maxVisible)}
          onPress={() => setIsAll((current) => !current)}
        />
      ) : null}
    </View>
  );
}

export type FilterCheckboxGroupProps = BaseFilterCheckboxGroupProps &
  Omit<ViewProps, "children">;

export function FilterCheckboxGroup({
  className,
  items,
  inlineFrom: _inlineFrom,
  lessLabel = "Show less",
  maxVisible = 5,
  moreLabel = (remaining) => `Show ${remaining} more`,
  onItemToggle,
  title,
  type = "inline",
  ...props
}: FilterCheckboxGroupProps) {
  const [open, setOpen] = useState(false);
  const content = useMemo(
    () => (
      <FilterCheckboxList
        items={items}
        lessLabel={lessLabel}
        maxVisible={maxVisible}
        moreLabel={moreLabel}
        onItemToggle={onItemToggle}
      />
    ),
    [items, lessLabel, maxVisible, moreLabel, onItemToggle]
  );

  if (type === "accordion") {
    return (
      <View
        className={cn("border-b border-solid border-gray-200", className)}
        {...props}
      >
        <Pressable
          onPress={() => setOpen((current) => !current)}
          className="flex flex-row items-center justify-between gap-4 px-4 py-4"
        >
          <Text as="span" size="lg" className="!text-[17px]">
            {title}
          </Text>
          <View className={cn(open && "rotate-180")}>
            <Icon icon={ChevronDown} size="default" color="#a1a1aa" />
          </View>
        </Pressable>
        {open ? <View className="px-4 pb-4">{content}</View> : null}
      </View>
    );
  }

  return (
    <View className={cn("gap-2", className)} {...props}>
      <Text as="h3" bold black>
        {title}
      </Text>
      {content}
    </View>
  );
}
