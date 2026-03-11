import type { Preview } from '@storybook/react-vite'
import { createElement } from 'react'
import '../src/index.css'

const preview: Preview = {
  decorators: [
    (Story, context) => {
      if (context.parameters.layout === 'fullscreen') {
        return createElement(Story)
      }

      return createElement(
        'div',
        { style: { padding: '16px' } },
        createElement(Story),
      )
    },
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['General', ['Welcome', 'Installation Web'], 'Foundations', 'Web & Mobile', 'Generators'],
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
