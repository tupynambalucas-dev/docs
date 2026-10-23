import { themes as prismThemes } from "prism-react-renderer";
import type { ThemeConfig } from "./options";

export function getBaseThemeConfig(
  projectConfig: Record<string, string>,
): ThemeConfig {
  return {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: `${projectConfig.PROJECT_NAME} Docs`,
      items: [
        {
          type: "docSidebar",
          sidebarId: "defaultSidebar",
          position: "left",
          label: "Documentação",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "left",
        },
        {
          href: `https://github.com/${projectConfig.GITHUB_ORG}/${projectConfig.REPOSITORY_NAME}`,
          position: "right",
          className: "header-github-link",
          "aria-label": "Repositório GitHub",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Documentação",
          items: [
            {
              label: "Introdução",
              to: "/docs/intro",
            },
            {
              label: "Explicações",
              to: "/docs/explanation/overview",
            },
            {
              label: "Guias Práticos",
              to: "/docs/guides/overview",
            },
            {
              label: "Referência",
              to: "/docs/reference/overview",
            },
            {
              label: "Tutoriais",
              to: "/docs/tutorials/overview",
            },
          ],
        },
        {
          title: "Comunidade & Código",
          items: [
            {
              label: "GitHub",
              href: `https://github.com/${projectConfig.GITHUB_ORG}/${projectConfig.REPOSITORY_NAME}`,
            },
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ${projectConfig.PROJECT_DISPLAY_NAME || projectConfig.PROJECT_NAME}. Construído com Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    mermaid: {
      theme: { light: "neutral", dark: "forest" },
    },
  };
}
