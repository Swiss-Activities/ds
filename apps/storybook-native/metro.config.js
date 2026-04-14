const path = require("path");
const fs = require("fs");
const { getDefaultConfig } = require("expo/metro-config");
const {
  withStorybook,
} = require("@storybook/react-native/metro/withStorybook");
const { withNativewind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

function resolvePackageRoot(packageName) {
  let currentDir = path.dirname(
    require.resolve(packageName, { paths: [__dirname] })
  );

  while (!fs.existsSync(path.join(currentDir, "package.json"))) {
    const parentDir = path.dirname(currentDir);

    if (parentDir === currentDir) {
      throw new Error(`Could not resolve package root for ${packageName}`);
    }

    currentDir = parentDir;
  }

  return currentDir;
}

const pinnedModules = [
  "react",
  "react-dom",
  "react-native",
  "react-native-svg",
  "lucide-react-native",
  "@swiss-activities/dummy-data",
  "@storybook/react-native",
  "@storybook/addon-ondevice-actions",
  "@storybook/addon-ondevice-controls",
];

config.resolver.extraNodeModules = {
  ...(config.resolver.extraNodeModules ?? {}),
  ...Object.fromEntries(
    pinnedModules.map((packageName) => [
      packageName,
      resolvePackageRoot(packageName),
    ])
  ),
};

module.exports = withStorybook(
  withNativewind(config, {
    globalClassNamePolyfill: false,
  })
);
