import path from "node:path";
import { fileURLToPath } from "node:url";

import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import eslintPluginImportX from "eslint-plugin-import-x";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import * as mdx from "eslint-plugin-mdx";
import eslintPluginDocusaurus from "@docusaurus/eslint-plugin";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig([
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  {
    name: "monorepo/global-typescript-config",
    files: ["**/*.{js,mjs,ts,tsx}"],
    ignores: ["**/*.md/**", "**/*.mdx/**"],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.config.{js,mjs,cjs,ts}"],
          noWarnOnMultipleProjects: true,
        },
        tsconfigRootDir: __dirname,
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "import-x": eslintPluginImportX,
    },
    settings: {
      "import-x/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import-x/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: [
            "tsconfig.json",
            "apps/*/tsconfig.json",
            "packages/*/tsconfig.json",
            "config/tsconfig.json",
            "collections/tsconfig.json",
            "knowledge-base/tsconfig.json",
          ],
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
      "import-x/ignore": [
        ".css$",
        ".scss$",
        ".sass$",
        ".less$",
        ".styl$",
        ".module.(css|scss|sass|less|styl)$",
      ],
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/no-unnecessary-condition": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],
      "no-debugger": "error",
      prefer_const: "off",
      "prefer-const": "error",
      "no-var": "error",
      eqeqeq: ["error", "always", { null: "ignore" }],
      "@typescript-eslint/require-await": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
      "@typescript-eslint/prefer-optional-chain": "warn",
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          disallowTypeAnnotations: false,
          fixStyle: "separate-type-imports",
        },
      ],
      "import-x/no-duplicates": "error",
      "import-x/no-unresolved": [
        "error",
        {
          ignore: [
            "\\.svg$",
            "\\.png$",
            "\\.jpg$",
            "\\.jpeg$",
            "\\.gif$",
            "\\.webp$",
            "\\.css$",
            "\\.scss$",
            "\\.sass$",
            "\\.less$",
            "\\.styl$",
            "\\.module\\.(css|scss|sass|less|styl)$",
          ],
        },
      ],
      "import-x/order": "off",
      "import-x/newline-after-import": "off",
      "import-x/first": "off",
      "import-x/no-default-export": "off",
    },
  },

  {
    name: "monorepo/root-config-files",
    files: [
      "*.{js,mjs,ts}",
      "*.config.{js,mjs,ts}",
      "**/*.config.{js,mjs,cjs,ts}",
      "**/postcss.config.{js,mjs,cjs,ts}",
      "**/src/mock-asset.js",
      "packages/preset/src/plugins/webpack-loaders/**/*.js",
    ],
    languageOptions: {
      globals: {
        ...globals.node,
        module: "writable",
        require: "readonly",
        process: "readonly",
        __dirname: "readonly",
        exports: "writable",
        URLSearchParams: "readonly",
      },
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },

  {
    name: "monorepo/docs-workspace",
    files: [
      "apps/**/*.{ts,tsx,js,jsx}",
      "packages/**/*.{ts,tsx,js,jsx}",
      "knowledge-base/**/*.{ts,tsx,js,jsx}",
    ],
    ignores: ["collections/**/*.ts", "collections/**/*.tsx"],
    plugins: {
      "@docusaurus": eslintPluginDocusaurus as unknown as Record<string, unknown>,
    },
    rules: {
      ...(eslintPluginDocusaurus.configs.recommended.rules as Record<string, unknown>),
      "no-console": ["warn", { allow: ["info", "warn", "error"] }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unnecessary-type-assertion": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-empty-object-type": "off",
      "import-x/no-unresolved": [
        "error",
        {
          ignore: ["^@docusaurus/", "^@theme/", "^@site/"],
        },
      ],
    },
  },

  {
    ...mdx.flat,
    name: "monorepo/mdx-files",
    files: ["**/*.mdx"],
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: false,
    }),
  },
  {
    name: "monorepo/disable-typecheck-for-non-project-files",
    files: ["**/*.{js,cjs,mjs,jsx,mdx}", ".agents/**/*.ts", "**/.agents/**/*.ts"],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    name: "monorepo/mdx-prettier",
    files: ["**/*.mdx"],
    rules: {
      "prettier/prettier": ["error", { parser: "mdx" }],
    },
  },

  {
    name: "monorepo/test-files",
    files: ["**/*.{test,spec}.{js,mjs,ts,tsx}", "**/__tests__/**/*.{js,mjs,ts,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "no-console": "off",
    },
  },

  {
    name: "monorepo/ignores",
    ignores: [
      "**/dist/**",
      "**/node_modules/**",
      "**/build/**",
      "**/.next/**",
      "**/coverage/**",
      "**/.turbo/**",
      "**/.eslintcache",
      "**/*.json",
      "**/*.css",
      "**/*.scss",
      "**/*.sass",
      "**/*.less",
      "**/*.styl",
      "supabase/**",
      "docker-compose*.yaml",
      "**/types/**/*.d.ts",
      "**/*.d.ts",
      "**/vite-env.d.ts",
      "**/.docusaurus/**",
      "**/static/**",
      "**/i18n/**",
      "**/translations/**",
    ],
  },

  {
    name: "monorepo/prettier",
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
  },
  eslintConfigPrettier,
]);
