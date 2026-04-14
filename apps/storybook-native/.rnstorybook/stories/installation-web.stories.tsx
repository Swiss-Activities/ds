import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import {
  DocsCodeBlock,
  DocsList,
  DocsPage,
  DocsParagraph,
  DocsSection,
  DocsSmall,
} from "./docs.shared";

const meta = {
  title: "General/Installation Web",
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <DocsPage title="Installation (Web)">
      <DocsParagraph>
        How to integrate the Swiss Activities Design System into a web project
        using a git submodule.
      </DocsParagraph>

      <DocsSection title="Prerequisites">
        <DocsList
          items={[
            "git — the DS is consumed as a git submodule.",
            "Tailwind CSS — v4 recommended, v3 supported.",
          ]}
        />
      </DocsSection>

      <DocsSection title="1. Add the DS as a git submodule">
        <DocsCodeBlock
          language="bash"
          code={`git submodule add https://github.com/Swiss-Activities/ds.git ds\n\ngit submodule update --init --recursive`}
        />
      </DocsSection>

      <DocsSection title="2. Add the dependency">
        <DocsCodeBlock
          language="json"
          code={`{\n  "dependencies": {\n    "@swiss-activities/ui": "file:./ds/packages/ui"\n  }\n}`}
        />
        <DocsCodeBlock language="bash" code={`bun install\n# or\nyarn install`} />
      </DocsSection>

      <DocsSection title="3. Configure TypeScript paths">
        <DocsCodeBlock
          language="json"
          code={`{\n  "compilerOptions": {\n    "paths": {\n      "@swiss-activities/ui": ["ds/packages/ui/src/index.ts"],\n      "@swiss-activities/ui/*": ["ds/packages/ui/src/*"]\n    }\n  }\n}`}
        />
      </DocsSection>

      <DocsSection title="4. Configure Tailwind CSS">
        <DocsParagraph>Tailwind v4 (recommended)</DocsParagraph>
        <DocsCodeBlock
          language="css"
          code={`@import "tailwindcss/theme.css" layer(theme);\n@import "@swiss-activities/ui/styles/sa-theme.css";\n@import "tailwindcss/preflight.css" layer(base);\n@import "tailwindcss/utilities.css" layer(utilities);\n\n@source "../../../ds/packages/ui/src/**/*.{ts,tsx}";`}
        />
        <DocsParagraph>Tailwind v3 (legacy)</DocsParagraph>
        <DocsCodeBlock
          language="js"
          code={`module.exports = {\n  plugins: {\n    tailwindcss: {},\n    autoprefixer: {},\n  },\n};`}
        />
        <DocsCodeBlock
          language="ts"
          code={`import type { Config } from "tailwindcss";\nimport { grayColors, saColors } from "@swiss-activities/ui/tokens/colors";\nimport { saKeyframes, saAnimations } from "@swiss-activities/ui/tokens";\nimport { screens } from "@swiss-activities/ui/tokens/screens";\n\nconst config: Config = {\n  content: [\n    "./src/**/*.{js,ts,jsx,tsx}",\n    "./ds/packages/ui/src/**/*.{js,ts,jsx,tsx}",\n  ],\n  theme: {\n    screens,\n    extend: {\n      colors: {\n        gray: grayColors,\n        dark: saColors.dark,\n        primary: saColors.primary,\n        medium: saColors.medium,\n        light: saColors.light,\n        blue: saColors.blue,\n        bg: saColors.bg,\n      },\n      keyframes: saKeyframes,\n      animation: saAnimations,\n    },\n  },\n};\n\nexport default config;`}
        />
        <DocsCodeBlock
          language="css"
          code={`@import "@swiss-activities/ui/styles/sa-theme.css";`}
        />
      </DocsSection>

      <DocsSection title="5. Framework-specific setup">
        <DocsParagraph>Vite works out of the box.</DocsParagraph>
        <DocsParagraph>
          Next.js picks up TypeScript path aliases automatically.
        </DocsParagraph>
        <DocsSmall>
          Important: if you run `bun install` inside `ds`, remove
          `ds/packages/ui/node_modules` afterward when integrating with the
          outer website app to avoid React duplication in Next.js.
        </DocsSmall>
        <DocsCodeBlock language="bash" code={`rm -rf ds/packages/ui/node_modules`} />
      </DocsSection>

      <DocsSection title="Usage">
        <DocsCodeBlock
          language="tsx"
          code={`import { Button } from "@swiss-activities/ui";\n\nexport function Example() {\n  return <Button variant="primary" size="md">Book now</Button>;\n}`}
        />
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
