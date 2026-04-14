import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { DocsLink, DocsPage, DocsParagraph } from "./docs.shared";

const meta = {
  title: "General/Welcome",
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <DocsPage title="Welcome to the Swiss Activities Design System">
      <DocsParagraph>
        Use the sidebar to browse components and variants. Start with Button,
        Card, and Flow to preview shared primitives across web and native.
      </DocsParagraph>
      <DocsLink href="https://swissactivities.atlassian.net/wiki/spaces/P/pages/505675778/Design+System">
        Open internal documentation
      </DocsLink>
    </DocsPage>
  ),
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
