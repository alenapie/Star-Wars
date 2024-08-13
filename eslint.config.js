import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";

export default tseslint.config(
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react: pluginReact,
      prettier: prettierPlugin,
    },
  },
  { ignores: ["node_modules"] },
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        parser: ["tsconfig.json", "tsconfig.node.json"],
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
);
