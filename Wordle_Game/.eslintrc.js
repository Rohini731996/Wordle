module.exports = {
  root: true,

  extends: [
    "@react-native-community",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "react-hooks", "prettier", "jest"],
  globals: {
    __DEV__: "readonly",
  },
  env: {
    jest: true,
  },
  rules: {
    "no-console": ["warn"],
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".tsx"],
      },
    ],
    "import/prefer-default-export": "off",
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        allowedNames: ["that"], // Allow `const self = this`; `[]` by default
      },
    ],
    "@typescript-eslint/no-non-null-assertion": "error",
    "no-shadow": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "react-hooks/exhaustive-deps": "error",
    "no-else-return": "error",
    "no-nested-ternary": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react+(|-native)",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/self-closing-comp": "error",
    curly: "error",
  },
  settings: {
    "import/resolver": {
      typescript: {},
      node: {
        paths: ["main"],
      },
      "babel-module": {},
    },
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
  },
};
