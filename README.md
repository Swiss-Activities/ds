# Swiss Activities Design System Monorepo

Web UI components with:

- `packages/ui`: shared component source
- `apps/storybook-web`: web Storybook (React + Vite)
- `packages/tokens`: framework-independent design tokens

## Quick Start

```bash
bun install
```

Run web Storybook:

```bash
bun run storybook:web
```

## Notes

- Web components use Tailwind CSS classes.
- This repo is designed to work well as a Git submodule inside product repos.

## Consuming In A Client Repo

If this repo is added as a submodule at `./ds`, add the UI package as a dependency:

```json
{
  "dependencies": {
    "@swiss-activities/ui": "file:./ds/packages/ui"
  }
}
```

Then use package imports instead of deep file paths:

```ts
import { Button, Card } from '@swiss-activities/ui'
import { grayColors, saColors } from '@swiss-activities/ui/tokens'
// or: import { grayColors, saColors } from '@swiss-activities/ui/tokens/colors'
import '@swiss-activities/ui/styles/sa-theme.css'
```

If your framework does not transpile TypeScript from dependencies by default (for example Next.js), enable transpilation for `@swiss-activities/ui`.
