import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Check } from "@swiss-activities/ui/icons";
import { grayColors, saColors } from "@swiss-activities/ui/tokens";

type ColorToken = {
  className: string;
  cssVar: string;
  hex: string;
  label: string;
};

const swissActivitiesColors: ColorToken[] = [
  {
    label: "Primary",
    hex: saColors.primary,
    cssVar: "--color-primary",
    className: "bg-primary",
  },
  {
    label: "Dark",
    hex: saColors.dark,
    cssVar: "--color-dark",
    className: "bg-dark",
  },
  {
    label: "Medium",
    hex: saColors.medium,
    cssVar: "--color-medium",
    className: "bg-medium",
  },
  {
    label: "Light",
    hex: saColors.light,
    cssVar: "--color-light",
    className: "bg-light",
  },
  {
    label: "Background",
    hex: saColors.bg,
    cssVar: "--color-bg",
    className: "bg-bg",
  },
  {
    label: "Border",
    hex: saColors.border,
    cssVar: "--color-border",
    className: "bg-border",
  },
  {
    label: "Blue",
    hex: saColors.blue,
    cssVar: "--color-blue",
    className: "bg-blue",
  },
];

const neutralGrayColors: ColorToken[] = Object.entries(grayColors).map(
  ([scale, hex]) => ({
    label: `Gray ${scale}`,
    hex,
    cssVar: `--color-gray-${scale}`,
    className: `bg-gray-${scale}`,
  })
);

async function copyText(value: string): Promise<boolean> {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return true;
  }

  if (typeof document === "undefined") {
    return false;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  return copied;
}

function CopyButton({ text, value }: { text: string; value: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    const copied = await copyText(value);
    if (!copied) {
      return;
    }

    setIsCopied(true);
    window.setTimeout(() => setIsCopied(false), 1200);
  };

  return (
    <button
      className="relative rounded-md border border-gray-300 px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100"
      onClick={handleCopy}
      type="button"
    >
      <span className={isCopied ? "invisible" : ""}>{text}</span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 flex items-center justify-center gap-1 transition-opacity ${
          isCopied ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: isCopied ? "150ms" : "0ms" }}
      >
        <span>Copied</span>
        <Check className="h-3.5 w-3.5" strokeWidth={2} />
      </span>
    </button>
  );
}

function ColorGrid({ title, tokens }: { title: string; tokens: ColorToken[] }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tokens.map((token) => (
          <article
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            key={token.className}
          >
            <div
              className="h-16 rounded-md border border-gray-200"
              style={{ backgroundColor: token.hex }}
            />

            <div className="mt-3">
              <h3 className="text-sm font-semibold text-gray-900">
                {token.label}
              </h3>
              <p className="mt-1 font-mono text-xs text-gray-600">
                {token.hex.toUpperCase()}
              </p>
              <p className="mt-2 font-mono text-xs text-gray-500">
                {token.cssVar}
              </p>
              <p className="mt-1 font-mono text-xs text-gray-500">
                {token.className}
              </p>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <CopyButton text="Copy HEX" value={token.hex} />
              <CopyButton text="Copy Var" value={token.cssVar} />
              <CopyButton text="Copy Class" value={token.className} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ColorsReference() {
  return (
    <main className="min-h-screen bg-bg px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Swiss Activities Color Tokens
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-gray-600 sm:text-base">
          Use this as a quick reference for brand and neutral colors across web
          and native components. Every swatch lets you copy the HEX value, CSS
          variable, or Tailwind class.
        </p>

        <div className="mt-8 space-y-8">
          <ColorGrid
            title="Swiss Activities Palette"
            tokens={swissActivitiesColors}
          />
          <ColorGrid title="Neutral Gray Palette" tokens={neutralGrayColors} />
        </div>
      </div>
    </main>
  );
}

const meta = {
  title: "Foundations/Colors",
  parameters: {
    layout: "fullscreen",
    controls: { hideNoControlsWarning: true },
  },
  render: () => <ColorsReference />,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
