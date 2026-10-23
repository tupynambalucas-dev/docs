import type { Config } from "@docusaurus/types";
import type { MonorepoPresetOptions } from "@tupynambalucas-dev/corporate-preset/options";
import { getBaseThemeConfig } from "@tupynambalucas-dev/corporate-preset/themeConfig";
import { createProjectVariablesParseFrontMatter } from "@tupynambalucas-dev/corporate-preset";
import path from "node:path";
import fs from "node:fs";
import { createRequire } from "node:module";
import projectConfig from "@tupynambalucas-dev/shared-config/project.config";

import dotenv from "dotenv";
dotenv.config();

const require = createRequire(import.meta.url);

const staticPath = path.join(__dirname, "static");
if (fs.existsSync(staticPath) === false) {
  fs.mkdirSync(staticPath, { recursive: true });
}

let studioPath = staticPath;
try {
  studioPath = path.dirname(
    require.resolve("@tupynambalucas-dev/studio-assets/package.json"),
  );
  const studioSrcPath = path.join(studioPath, "src");
  const itemsToSync = [
    "brand",
    "fonts",
    "icons",
    "images",
    "three",
    "tokens",
    "assets-manifest.json",
  ];
  for (const item of itemsToSync) {
    const src = path.join(studioSrcPath, item);
    const dest = path.join(staticPath, item);
    if (fs.existsSync(src) === true) {
      fs.cpSync(src, dest, { recursive: true, force: true });
    }
  }
} catch {
  // studio-assets optional fallback, static assets are already present locally
}

// Ensure flat configuration for Docusaurus loader serialization
const cleanConfig: Record<string, string> = {
  PROJECT_NAME: String(projectConfig.PROJECT_NAME ?? "Tupynambalucas"),
  PROJECT_DISPLAY_NAME: String(
    projectConfig.PROJECT_DISPLAY_NAME ?? "Tupynambá Lucas",
  ),
  PROJECT_DOMAIN: String(projectConfig.PROJECT_DOMAIN ?? "tupynambalucas.dev"),
  PROJECT_DOCS_URL: String(
    projectConfig.PROJECT_DOCS_URL ?? "https://docs.tupynambalucas.dev",
  ),
  PROJECT_INTERNAL_HOST: String(
    projectConfig.PROJECT_INTERNAL_HOST ?? "docs.internal",
  ),
  GITHUB_ORG: String(projectConfig.GITHUB_ORG ?? "tupynambalucas-dev"),
  REPOSITORY_NAME: String(projectConfig.REPOSITORY_NAME ?? "docs"),
  REPOSITORY_OWNER: String(
    projectConfig.REPOSITORY_OWNER ?? "tupynambalucas-dev",
  ),
  AUTHOR_NAME: String(
    projectConfig.AUTHOR_NAME ?? "Tupynambá Lucas Varela Rodrigues",
  ),
  AUTHOR_EMAIL: String(
    projectConfig.AUTHOR_EMAIL ?? "contato@tupynambalucas.dev",
  ),
};

const config: Config = {
  title: cleanConfig.PROJECT_DISPLAY_NAME || cleanConfig.PROJECT_NAME,
  tagline: `Documentation for ${cleanConfig.PROJECT_DOMAIN}`,
  favicon: "brand/logos/logo-mark-blue.svg",

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
    v4: false,
  },

  staticDirectories: ["static"],

  customFields: {
    studioPath,
    projectVariables: cleanConfig,
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-BR"],
    localeConfigs: {
      en: {
        label: "English",
        htmlLang: "en-US",
      },
      "pt-BR": {
        label: "Português (Brasil)",
        htmlLang: "pt-BR",
      },
    },
  },

  presets: [
    [
      require.resolve("@tupynambalucas-dev/corporate-preset"),
      {
        liveCodeblock: {
          playgroundPosition: "bottom",
        },
        docs: [
          {
            id: "default",
            collection: "docs-portal",
            routeBasePath: "docs",
            sidebarPath:
              require.resolve("@tupynambalucas-dev/corporate-preset/sidebars"),
          },
          {
            id: "community",
            collection: "community-portal",
            routeBasePath: "community",
            sidebarPath:
              require.resolve("@tupynambalucas-dev/corporate-preset/sidebars"),
          },
        ],
        blog: {
          collection: "portal-blog",
          routeBasePath: "blog",
          showReadingTime: true,
          blogSidebarCount: "ALL",
          blogSidebarTitle: "All posts",
        },
      } satisfies MonorepoPresetOptions,
    ],
  ],

  plugins: [
    () => ({
      name: "monorepo-webpack-alias-plugin",
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
