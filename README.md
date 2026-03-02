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
