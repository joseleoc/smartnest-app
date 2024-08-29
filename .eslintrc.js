// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        printWidth: 80,
        "editor.formatOnSave": true,
        proseWrap: "always",
        requireConfig: false,
        useTabs: false,
        bracketSpacing: true,
        jsxBracketSameLine: false,
        semi: true,
      },
    ],
  },
};
