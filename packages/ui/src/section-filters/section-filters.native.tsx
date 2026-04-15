"use client";

import React, { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  type ViewProps,
} from "react-native";
import { View } from "react-native-css/components";
import { Button } from "../button/button.native";
import { Icon } from "../icon/icon.native";
import { ChevronDown, Filter, X } from "../icons/index.native";
import { Text } from "../text/text.native";
import { cn } from "../utils/cn";
import type { BaseSectionFiltersProps } from "./section-filters.types";

const styles = StyleSheet.create({
  track: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: "center",
  },
  spacer: {
    width: 8,
  },
  modalRoot: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  sheet: {
    maxHeight: "82%",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "#ffffff",
    overflow: "hidden",
  },
  handle: {
    alignSelf: "center",
    width: 48,
    height: 6,
    borderRadius: 999,
    backgroundColor: "#d4d4d4",
    marginTop: 8,
  },
  body: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    paddingTop: 12,
    gap: 12,
  },
  list: {
    gap: 8,
  },
});

export type SectionFiltersProps = BaseSectionFiltersProps &
  Omit<ViewProps, "children">;

export function SectionFilters({
  className,
  drawerPlacement,
  filterButtonLabel = "Filter",
  desktopDrawer,
  desktopDrawerFrom,
  drawerTitle = "Filter",
  drawerContent,
  items,
  ...props
}: SectionFiltersProps) {
  const [presented, setPresented] = useState(false);

  return (
    <>
      <View className={cn(className)} {...props}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.track}
        >
          <Button
            type="pill"
            text={filterButtonLabel}
            icon={<Icon icon={Filter} size="xs" color="#002f49" />}
            className="bg-white"
            onPress={() => setPresented(true)}
          />
          {items.map((item) => (
            <React.Fragment key={item.id}>
              <View style={styles.spacer} />
              <Button
                type="filter"
                text={item.label}
                iconRight={
                  item.kind === "disclosure" ? (
                    <Icon icon={ChevronDown} size="xs" color="#737373" />
                  ) : item.kind === "removable" ? (
                    <Icon icon={X} size="xs" color="#737373" />
                  ) : null
                }
              />
            </React.Fragment>
          ))}
        </ScrollView>
      </View>

      <Modal
        visible={presented}
        transparent
        animationType="slide"
        onRequestClose={() => setPresented(false)}
      >
        <View style={styles.modalRoot}>
          <Pressable style={styles.backdrop} onPress={() => setPresented(false)} />
          <View style={styles.sheet}>
            <View style={styles.handle} />
            <ScrollView>
              <View style={styles.body}>
                <View className="flex flex-row items-center justify-between">
                  <Text size="lg" bold black>
                    {drawerTitle}
                  </Text>
                  <Button
                    type="transparent"
                    text="Close"
                    onPress={() => setPresented(false)}
                  />
                </View>
                {drawerContent ?? (
                  <View style={styles.list}>
                    {items.map((item) => (
                      <View
                        key={item.id}
                        className="rounded-xl border border-solid border-gray-200 bg-white px-4 py-3"
                      >
                        <Text bold black>
                          {item.label}
                        </Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
}
