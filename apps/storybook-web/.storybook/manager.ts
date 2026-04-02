import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

const theme = create({
  base: "light",
  brandTitle: "Swiss Activities Design System",
  brandImage: "/brand.svg",
  fontBase:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontCode:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
});

addons.setConfig({ theme });
