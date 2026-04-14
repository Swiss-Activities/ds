import React from "react";
import { Linking } from "react-native";
import { ScrollView, View } from "react-native-css/components";
import { Text } from "@swiss-activities/ui";
import { grayColors, saColors } from "@swiss-activities/ui/tokens";

export function DocsPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: grayColors[50] }}
      contentContainerStyle={{ padding: 24 }}
    >
      <View
        style={{
          borderRadius: 24,
          borderWidth: 1,
          borderColor: grayColors[200],
          backgroundColor: "#ffffff",
          padding: 24,
          gap: 20,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            lineHeight: 38,
            fontWeight: "700",
            color: grayColors[950],
          }}
        >
          {title}
        </Text>
        <View style={{ gap: 20 }}>{children}</View>
      </View>
    </ScrollView>
  );
}

export function DocsSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={{ gap: 10 }}>
      <Text
        style={{
          fontSize: 18,
          lineHeight: 24,
          fontWeight: "600",
          color: grayColors[900],
        }}
      >
        {title}
      </Text>
      <View style={{ gap: 10 }}>{children}</View>
    </View>
  );
}

export function DocsParagraph({ children }: { children: React.ReactNode }) {
  return (
    <Text
      style={{
        fontSize: 15,
        lineHeight: 24,
        color: grayColors[700],
      }}
    >
      {children}
    </Text>
  );
}

export function DocsList({ items }: { items: React.ReactNode[] }) {
  return (
    <View style={{ gap: 8 }}>
      {items.map((item, index) => (
        <View
          key={index}
          style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
        >
          <Text
            style={{
              fontSize: 15,
              lineHeight: 24,
              color: grayColors[700],
            }}
          >
            •
          </Text>
          <View style={{ flex: 1 }}>
            <DocsParagraph>{item}</DocsParagraph>
          </View>
        </View>
      ))}
    </View>
  );
}

export function DocsCodeBlock({
  code,
  language,
}: {
  code: string;
  language?: string;
}) {
  return (
    <View
      style={{
        borderRadius: 16,
        borderWidth: 1,
        borderColor: grayColors[200],
        backgroundColor: grayColors[50],
        overflow: "hidden",
      }}
    >
      {language ? (
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: grayColors[200],
            paddingHorizontal: 14,
            paddingVertical: 10,
            backgroundColor: "#ffffff",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              lineHeight: 16,
              fontWeight: "600",
              color: grayColors[500],
              textTransform: "uppercase",
            }}
          >
            {language}
          </Text>
        </View>
      ) : null}
      <Text
        style={{
          paddingHorizontal: 14,
          paddingVertical: 14,
          fontSize: 13,
          lineHeight: 20,
          color: grayColors[900],
          fontFamily: "Menlo",
        }}
      >
        {code}
      </Text>
    </View>
  );
}

export function DocsLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Text
      onPress={() => Linking.openURL(href)}
      style={{
        fontSize: 15,
        lineHeight: 24,
        color: saColors.primary,
        textDecorationLine: "underline",
      }}
    >
      {children}
    </Text>
  );
}

export function DocsSmall({ children }: { children: React.ReactNode }) {
  return (
    <Text
      style={{
        fontSize: 13,
        lineHeight: 18,
        color: grayColors[500],
      }}
    >
      {children}
    </Text>
  );
}
