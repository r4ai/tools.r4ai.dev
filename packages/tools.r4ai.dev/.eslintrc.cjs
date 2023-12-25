// @ts-check
const { defineConfig } = require("eslint-define-config")

module.exports = defineConfig({
  extends: ["next/core-web-vitals", "prettier"],
  ignorePatterns: ["node_modules", "dist"],
  rules: {
    "import/no-anonymous-default-export": "off",
  },
  overrides: [
    {
      files: "*.js",
      parser: "espree",
      parserOptions: {
        ecmaVersion: 2020,
      },
    },
  ],
})
