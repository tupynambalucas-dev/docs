import type { Config } from "@docusaurus/types";
import type { MonorepoPresetOptions } from "@academic-lab/preset/options";
import { getBaseThemeConfig } from "@academic-lab/preset/themeConfig";
import { createProjectVariablesParseFrontMatter } from "@academic-lab/preset";
import path from "node:path";
import fs from "node:fs";
import { createRequire } from "node:module";
import projectConfig from "@academic-lab/config/project.config";

import dotenv from "dotenv";
dotenv.config();

const require = createRequire(import.meta.url);

// Ensure flat, circular-reference-free configuration for Docusaurus loader serialization
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rawConfig = (projectConfig as any)?.default ?? projectConfig;
const cleanConfig: Record<string, string> = {
  PROJECT_NAME: String(rawConfig.PROJECT_NAME ?? "Academic Lab"),
  PROJECT_DISPLAY_NAME: String(
    rawConfig.PROJECT_DISPLAY_NAME ?? "Academic Lab",
  ),
  PROJECT_DOMAIN: String(rawConfig.PROJECT_DOMAIN ?? "tupynambalucas.dev"),
  PROJECT_DOCS_URL: String(
    rawConfig.PROJECT_DOCS_URL ?? "https://docs.tupynambalucas.dev",
  ),
  PROJECT_INTERNAL_HOST: String(
    rawConfig.PROJECT_INTERNAL_HOST ?? "academic-lab.internal",
  ),
  GITHUB_ORG: String(rawConfig.GITHUB_ORG ?? "tupynambalucas"),
  REPOSITORY_NAME: String(rawConfig.REPOSITORY_NAME ?? "academic-lab"),
  REPOSITORY_OWNER: String(rawConfig.REPOSITORY_OWNER ?? "tupynambalucas"),
  AUTHOR_NAME: String(
    rawConfig.AUTHOR_NAME ?? "Tupynambá Lucas Varela Rodrigues",
  ),
  AUTHOR_EMAIL: String(rawConfig.AUTHOR_EMAIL ?? "contato@tupynambalucas.dev"),
  STUDENT_NAME: String(rawConfig.STUDENT_NAME ?? "Lucas Tupynambá"),
  SITE_TITLE: String(rawConfig.SITE_TITLE ?? "Academic Lab"),
  SITE_TAGLINE: String(
    rawConfig.SITE_TAGLINE ??
      "Laboratório de Pesquisa Acadêmica e Engenharia do Conhecimento",
  ),
};

const config: Config = {
  title: cleanConfig.PROJECT_DISPLAY_NAME || cleanConfig.PROJECT_NAME,
  tagline: cleanConfig.SITE_TAGLINE,
  favicon: "img/favicon.svg",

  url: `https://${cleanConfig.PROJECT_DOMAIN}`,
  baseUrl: "/",
  trailingSlash: false,

  organizationName: cleanConfig.GITHUB_ORG,
  projectName: cleanConfig.REPOSITORY_NAME,

  onBrokenLinks: "ignore",
  onBrokenAnchors: "ignore",

  markdown: {
    mermaid: true,
    parseFrontMatter: createProjectVariablesParseFrontMatter(cleanConfig),
    hooks: {
      onBrokenMarkdownImages: "ignore",
      onBrokenMarkdownLinks: "ignore",
    },
  },

  future: {
    v4: true,
  },

  staticDirectories: ["static"],

  customFields: {
    projectVariables: cleanConfig,
  },

  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR"],
    localeConfigs: {
      "pt-BR": {
        label: "Português (Brasil)",
        htmlLang: "pt-BR",
      },
    },
  },

  presets: [
    [
      require.resolve("@academic-lab/preset"),
      {
        liveCodeblock: {
          playgroundPosition: "bottom",
        },
        docs: [
          {
            id: "default",
            collection: "docs-main",
            routeBasePath: "docs",
            sidebarPath: require.resolve("@academic-lab/preset/sidebars"),
          },
        ],
        blog: {
          collection: "blog-main",
          routeBasePath: "blog",
          showReadingTime: true,
          blogSidebarCount: "ALL",
          blogSidebarTitle: "Todos os posts",
        },
      } satisfies MonorepoPresetOptions,
    ],
  ],

  plugins: [
    () => ({
      name: "academic-lab-webpack-alias-plugin",
      configureWebpack() {
        const docusaurusNodeModules = path.join(
          __dirname,
          "node_modules",
          "@docusaurus",
        );
        const alias: Record<string, string> = {};

        if (fs.existsSync(docusaurusNodeModules)) {
          const packages = fs.readdirSync(docusaurusNodeModules);
          for (const pkg of packages) {
            alias[`@docusaurus/${pkg}$`] = path.join(
              docusaurusNodeModules,
              pkg,
            );
            alias[`@docusaurus/${pkg}/internal`] = path.join(
              docusaurusNodeModules,
              pkg,
              "lib/internal.js",
            );
            alias[`@docusaurus/${pkg}/Details`] = path.join(
              docusaurusNodeModules,
              pkg,
              "lib/components/Details/index.js",
            );
            alias[`@docusaurus/${pkg}/client`] = path.join(
              docusaurusNodeModules,
              pkg,
              "lib/client",
            );
          }
        }

        return {
          resolve: {
            alias,
          },
        };
      },
    }),
  ],

  themeConfig: getBaseThemeConfig(cleanConfig),
};

export default config;
