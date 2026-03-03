import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { saColors } from '@swiss-activities/ui/tokens'

type ColorToken = {
  className: string
  cssVar: string
  hex: string
  label: string
}

const swissActivitiesColors: ColorToken[] = [
  {
    label: 'Primary',
    hex: saColors.primary,
    cssVar: '--color-sa-primary',
    className: 'bg-sa-primary',
  },
  {
    label: 'Dark',
    hex: saColors.dark,
    cssVar: '--color-sa-dark',
    className: 'bg-sa-dark',
  },
  {
    label: 'Medium',
    hex: saColors.medium,
    cssVar: '--color-sa-medium',
    className: 'bg-sa-medium',
  },
  {
    label: 'Light',
    hex: saColors.light,
    cssVar: '--color-sa-light',
    className: 'bg-sa-light',
  },
  {
    label: 'Background',
    hex: saColors.bg,
    cssVar: '--color-sa-bg',
    className: 'bg-sa-bg',
  },
  {
    label: 'Blue',
    hex: saColors.blue,
    cssVar: '--color-sa-blue',
    className: 'bg-sa-blue',
  },
]

const grayColors: ColorToken[] = [
  { label: 'Gray 50', hex: '#fafafa', cssVar: '--color-gray-50', className: 'bg-gray-50' },
  { label: 'Gray 100', hex: '#f5f5f5', cssVar: '--color-gray-100', className: 'bg-gray-100' },
  { label: 'Gray 200', hex: '#e5e5e5', cssVar: '--color-gray-200', className: 'bg-gray-200' },
  { label: 'Gray 300', hex: '#d4d4d4', cssVar: '--color-gray-300', className: 'bg-gray-300' },
  { label: 'Gray 400', hex: '#a3a3a3', cssVar: '--color-gray-400', className: 'bg-gray-400' },
  { label: 'Gray 500', hex: '#737373', cssVar: '--color-gray-500', className: 'bg-gray-500' },
  { label: 'Gray 600', hex: '#525252', cssVar: '--color-gray-600', className: 'bg-gray-600' },
  { label: 'Gray 700', hex: '#404040', cssVar: '--color-gray-700', className: 'bg-gray-700' },
  { label: 'Gray 800', hex: '#262626', cssVar: '--color-gray-800', className: 'bg-gray-800' },
  { label: 'Gray 900', hex: '#171717', cssVar: '--color-gray-900', className: 'bg-gray-900' },
  { label: 'Gray 950', hex: '#0a0a0a', cssVar: '--color-gray-950', className: 'bg-gray-950' },
]

async function copyText(value: string): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value)
    return true
  }

  if (typeof document === 'undefined') {
    return false
  }

  const textarea = document.createElement('textarea')
  textarea.value = value
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.append(textarea)
  textarea.select()
  const copied = document.execCommand('copy')
  textarea.remove()
  return copied
}

function CopyButton({ text, value }: { text: string; value: string }) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    const copied = await copyText(value)
    if (!copied) {
      return
    }

    setIsCopied(true)
    window.setTimeout(() => setIsCopied(false), 1200)
  }

  return (
    <button
      className="relative rounded-md border border-gray-300 px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100"
      onClick={handleCopy}
      type="button"
    >
      <span className={isCopied ? 'invisible' : ''}>{text}</span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 flex items-center justify-center gap-1 transition-opacity ${
          isCopied ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDuration: isCopied ? '150ms' : '0ms' }}
      >
        <span>Copied</span>
        <span>✓</span>
      </span>
    </button>
  )
}

function ColorGrid({
  title,
  tokens,
}: {
  title: string
  tokens: ColorToken[]
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tokens.map(token => (
          <article
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            key={token.className}
          >
            <div
              className="h-16 rounded-md border border-gray-200"
              style={{ backgroundColor: token.hex }}
            />

            <div className="mt-3">
              <h3 className="text-sm font-semibold text-gray-900">{token.label}</h3>
              <p className="mt-1 font-mono text-xs text-gray-600">{token.hex.toUpperCase()}</p>
              <p className="mt-2 font-mono text-xs text-gray-500">{token.cssVar}</p>
              <p className="mt-1 font-mono text-xs text-gray-500">{token.className}</p>
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
  )
}

function ColorsReference() {
  return (
    <main className="min-h-screen bg-sa-bg px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Swiss Activities Color Tokens
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-gray-600 sm:text-base">
          Use this as a quick reference for brand and neutral colors across web and native components.
          Every swatch lets you copy the HEX value, CSS variable, or Tailwind class.
        </p>

        <div className="mt-8 space-y-8">
          <ColorGrid title="Swiss Activities Palette" tokens={swissActivitiesColors} />
          <ColorGrid title="Neutral Gray Palette" tokens={grayColors} />
        </div>
      </div>
    </main>
  )
}

const meta = {
  title: 'Foundations/Colors',
  parameters: {
    layout: 'fullscreen',
    controls: { hideNoControlsWarning: true },
  },
  render: () => <ColorsReference />,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
