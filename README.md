# Swiss Activities Design System Monorepo

Shared UI components for web and mobile with:

- `packages/ui`: shared component source
- `apps/storybook-web`: web Storybook (React + Vite)
- `apps/storybook-native`: native Storybook (Expo + React Native)

## Quick Start

```bash
bun install
```

Run web Storybook:

```bash
bun run storybook:web
```

Run native Storybook (Expo):

```bash
bun run storybook:native
```

## Notes

- Web components use Tailwind CSS classes.
- Native components use NativeWind classes via `Button.native.tsx` and Expo config in `apps/storybook-native`.
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
