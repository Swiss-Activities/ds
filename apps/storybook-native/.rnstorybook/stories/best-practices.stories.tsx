import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import {
  DocsCodeBlock,
  DocsList,
  DocsPage,
  DocsParagraph,
  DocsSection,
} from "./docs.shared";

const meta = {
  title: "General/Best Practices",
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <DocsPage title="Best Practices">
      <DocsParagraph>
        Guidelines for integrating the Design System into your app in a way
        that's easy to maintain and evolve.
      </DocsParagraph>

      <DocsSection title="Create your own component implementations">
        <DocsParagraph>
          Don't use DS components directly throughout your app. Instead, create
          app-level wrappers in a local components directory. This gives you a
          single place to update when the DS API changes, and lets you add
          app-specific behavior without forking the DS.
        </DocsParagraph>
        <DocsCodeBlock
          language="text"
          code={`modules/components/\n  Badge/index.tsx\n  Breadcrumbs/index.tsx\n  Button/index.tsx\n  Card/index.tsx\n  Skeleton/index.tsx`}
        />
      </DocsSection>

      <DocsSection title="Pattern 1: Simple re-export">
        <DocsParagraph>
          When a DS component works as-is, re-export it. This still gives you a
          seam to add customization later without changing every import across
          the app.
        </DocsParagraph>
        <DocsCodeBlock
          language="tsx"
          code={`// modules/components/Skeleton/index.tsx\nexport { Skeleton } from "@swiss-activities/ui";\nexport type { SkeletonProps } from "@swiss-activities/ui";`}
        />
      </DocsSection>

      <DocsSection title="Pattern 2: Opinionated defaults">
        <DocsParagraph>
          Wrap the DS component with your app's default styling or props, so
          consumers don't repeat the same config everywhere.
        </DocsParagraph>
        <DocsCodeBlock
          language="tsx"
          code={`// modules/components/Card/index.tsx\nimport { Card as DSCard } from "@swiss-activities/ui";\nimport { cn } from "@utils/css/cn";\n\nexport const Card = ({ padding = true, className, ...rest }) => (\n  <DSCard\n    noPadding\n    className={cn(\n      "font-medium lg:overflow-visible",\n      { "px-2 py-6 sm:px-4 lg:p-6": padding },\n      className\n    )}\n    {...rest}\n  />\n);`}
        />
      </DocsSection>

      <DocsSection title="Pattern 3: Props transformation">
        <DocsParagraph>
          When your app uses different data shapes than the DS expects, the
          wrapper translates between the two.
        </DocsParagraph>
        <DocsCodeBlock
          language="tsx"
          code={`// modules/components/Badge/index.tsx\nimport { Badge as DSBadge } from "@swiss-activities/ui";\nimport type { BaseBadgeProps } from "@swiss-activities/ui/badge/badge.types";\n\nexport const Badge = ({ type, text = false, children, ...rest }) => {\n  const variant: BaseBadgeProps["variant"] = text\n    ? "text"\n    : type === "demand" ? "demand" : type === "info" ? "info" : "overlay";\n\n  return (\n    <DSBadge variant={variant} {...rest}>\n      {children}\n    </DSBadge>\n  );\n};`}
        />
      </DocsSection>

      <DocsSection title="Pattern 4: Composition with extra features">
        <DocsParagraph>
          Add app-specific concerns like i18n, analytics, schema markup, or
          loading states on top of the DS primitive.
        </DocsParagraph>
        <DocsCodeBlock
          language="tsx"
          code={`// modules/components/Breadcrumbs/index.tsx\nimport { Breadcrumbs as DSBreadcrumbs } from "@swiss-activities/ui";\nimport { BreadcrumbsGSD } from "./GSD";\nimport { useI18n } from "@utils/i18n/useI18n";\n\nexport const Breadcrumbs = ({ items, noSchema, ...rest }) => {\n  const { locale } = useI18n();\n  const resolved = useMemo(\n    () => items.map((b) => ({ title: b.title, url: b.urls[locale] })),\n    [items, locale]\n  );\n\n  return (\n    <>\n      {!noSchema && <BreadcrumbsGSD items={resolved} />}\n      <DSBreadcrumbs items={resolved} {...rest} />\n    </>\n  );\n};`}
        />
      </DocsSection>

      <DocsSection title="Why this matters">
        <DocsList
          items={[
            "DS updates in one place — when a DS component's API changes, you update the wrapper, not 50 call sites.",
            "App logic stays out of the DS — i18n, data fetching, and analytics belong in wrappers, not the shared library.",
            "Consistent defaults — enforce your app's opinions without relying on every developer to remember them.",
            "Easy to migrate — if you ever swap the DS or a specific primitive, the rest of the app doesn't change.",
          ]}
        />
      </DocsSection>

      <DocsSection title="Importing tokens">
        <DocsParagraph>
          Tokens like colors, screens, and animations can be imported directly.
          They're plain values, not components.
        </DocsParagraph>
        <DocsCodeBlock
          language="ts"
          code={`import { saColors } from "@swiss-activities/ui/tokens/colors";\nimport { screens } from "@swiss-activities/ui/tokens/screens";\nimport { saKeyframes, saAnimations } from "@swiss-activities/ui/tokens";`}
        />
      </DocsSection>
    </DocsPage>
  ),
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
