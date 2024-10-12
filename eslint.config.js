import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import autoImports from './.wxt/eslint-auto-imports.mjs';


export default [
  {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
  {languageOptions: {
    globals: {
      ...globals.browser,
      ...autoImports.globals
    }
  }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {files: ["**/*.vue"], languageOptions: {parserOptions: {parser: tseslint.parser}}},
];