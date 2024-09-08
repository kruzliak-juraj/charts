import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintConfigUnusedImports from "eslint-plugin-unused-imports";

const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  eslintConfigPrettier,
  {
    plugins: {
      "unused-imports": eslintConfigUnusedImports,
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
    },
  },
];
