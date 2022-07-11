module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "babel-plugin-styled-components",
    [
      require.resolve("babel-plugin-module-resolver"),
      {
        cwd: "babelrc",
        root: ["./src"],
        extensions: [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json",
        ],
        alias: {
          "@assets": "./src/assets",
          "@common": "./src/common",
          "@core": "./src/core",
          "@screens": "./src/screens",
        },
      },
    ],
  ],
};
