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
  title: "General/Data Package",
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <DocsPage title="Data Package">
      <DocsParagraph>
        `@swiss-activities/data` provides hooks, types, and adapters for
        fetching data from the Swiss Activities gateway API while keeping UI
        components presentation-only.
      </DocsParagraph>

      <DocsSection title="Installation">
        <DocsCodeBlock
          language="json"
          code={`{\n  "dependencies": {\n    "@swiss-activities/data": "file:./ds/packages/data",\n    "@swiss-activities/ui": "file:./ds/packages/ui"\n  }\n}`}
        />
        <DocsCodeBlock
          language="json"
          code={`{\n  "compilerOptions": {\n    "paths": {\n      "@swiss-activities/data": ["ds/packages/data/src/index.ts"]\n    }\n  }\n}`}
        />
      </DocsSection>

      <DocsSection title="Requirements">
        <DocsList
          items={[
            "react ^18.0.0 or ^19.0.0",
            "@tanstack/react-query ^5.0.0",
            "Wrap your app in QueryClientProvider and DataProvider.",
          ]}
        />
      </DocsSection>

      <DocsSection title="Setup">
        <DocsCodeBlock
          language="tsx"
          code={`import { QueryClient, QueryClientProvider } from "@tanstack/react-query";\nimport { DataProvider } from "@swiss-activities/data";\n\nconst queryClient = new QueryClient();\n\nfunction App() {\n  return (\n    <QueryClientProvider client={queryClient}>\n      <DataProvider\n        gatewayUrl="https://gateway.swissactivities.com"\n        apiUrl="https://www.swissactivities.com/api"\n        locale="de_CH"\n      >\n        {/* your app */}\n      </DataProvider>\n    </QueryClientProvider>\n  );\n}`}
        />
      </DocsSection>

      <DocsSection title="DataProvider props">
        <DocsList
          items={[
            "`gatewayUrl` — base URL for server-side gateway calls.",
            "`apiUrl` — base URL for client-side API proxy calls.",
            "`locale` — current locale, for example `de_CH`.",
            "`traceUrl` — optional Cloudflare trace URL for country detection.",
          ]}
        />
      </DocsSection>

      <DocsSection title="Hooks">
        <DocsParagraph>`useGetHome` fetches personalized homepage sections.</DocsParagraph>
        <DocsCodeBlock
          language="tsx"
          code={`import { useGetHome } from "@swiss-activities/data";\n\nfunction PersonalizedSections() {\n  const { data, isLoading } = useGetHome();\n  if (isLoading || !data) return null;\n\n  return data.sections.map((section) => (\n    <div key={section.id}>{section.title}</div>\n  ));\n}`}
        />
        <DocsParagraph>`useGetCountry` detects the user's country code.</DocsParagraph>
        <DocsCodeBlock
          language="tsx"
          code={`import { useGetCountry } from "@swiss-activities/data";\n\nfunction Example() {\n  const { data: country } = useGetCountry();\n}`}
        />
        <DocsParagraph>`useGeolocation` exposes browser geolocation state.</DocsParagraph>
        <DocsCodeBlock
          language="tsx"
          code={`import { useGeolocation } from "@swiss-activities/data";\n\nfunction Example() {\n  const { isAvailable, isDenied, coordinates, getCurrentPosition } = useGeolocation();\n}`}
        />
      </DocsSection>

      <DocsSection title="Adapters">
        <DocsParagraph>
          `toActivityItem` maps gateway items into the presentation shape used
          by `SectionActivityGrid`.
        </DocsParagraph>
        <DocsCodeBlock
          language="tsx"
          code={`import { toActivityItem } from "@swiss-activities/data";\n\nconst item = toActivityItem(gatewayItem, {\n  priceLabel: "pro Person",\n  fromLabel: "ab",\n  renderImage: (entry) => <img src={entry.image_url} alt={entry.title} />,\n});`}
        />
      </DocsSection>

      <DocsSection title="Server-side functions">
        <DocsCodeBlock
          language="ts"
          code={`import { getHome, getCountry } from "@swiss-activities/data";\n\nconst data = await getHome("https://gateway.swissactivities.com", {\n  locale: "de_CH",\n  country: "CH",\n});`}
        />
      </DocsSection>
    </DocsPage>
  ),
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
