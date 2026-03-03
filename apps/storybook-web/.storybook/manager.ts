import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'Swiss Activities Design System',
  brandImage: '/brand.svg',
});

addons.setConfig({ theme });
