module.exports = function (api) {
  api.cache(true);
  return {
    // Use the preset bundled inside the installed expo package to avoid hoisting issues.
    presets: [require.resolve('expo/node_modules/babel-preset-expo')],
    plugins: ['react-native-reanimated/plugin'],
  };
};
