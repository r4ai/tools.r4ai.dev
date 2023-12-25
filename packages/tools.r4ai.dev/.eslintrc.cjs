// @ts-check
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: ["next/core-web-vitals", "prettier"],
  overrides: [
    {
      files: "*.cjs",
      extends: "next",
    },
  ],
});
