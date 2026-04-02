const { getDefaultConfig } = require("expo/metro-config");
const {
  withStorybook,
} = require("@storybook/react-native/metro/withStorybook");
const { withNativewind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withStorybook(
  withNativewind(config, {
    globalClassNamePolyfill: false,
  })
);
