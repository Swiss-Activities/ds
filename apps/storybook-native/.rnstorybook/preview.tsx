import { SafeAreaView, View } from 'react-native';
import type { Preview } from '@storybook/react-native';

const preview: Preview = {
  decorators: [
    (Story, context) => {
      if (context.parameters.layout === 'fullscreen') {
        return (
          <SafeAreaView style={{ flex: 1 }}>
            <Story />
          </SafeAreaView>
        )
      }

      return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, padding: 16 }}>
            <Story />
          </View>
        </SafeAreaView>
      )
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Welcome', 'Components'],
      },
    },
  },
};

export default preview;
