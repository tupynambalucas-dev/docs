import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import type { LoadContext, Plugin } from "@docusaurus/types";

const require = createRequire(import.meta.url);

export type CollectionMapping = {
  pluginType: "docs" | "blog";
  pluginId: string;
  collectionName: string;
  contentName: string;
};

export type LocalesSyncOptions = {
  mappings: CollectionMapping[];
};

function syncFilesOptimized(src: string, dest: string): void {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      syncFilesOptimized(srcPath, destPath);
    } else {
      let shouldWrite = true;
      if (fs.existsSync(destPath)) {
        const srcContent = fs.readFileSync(srcPath);
        const destContent = fs.readFileSync(destPath);
        if (srcContent.equals(destContent)) {
          shouldWrite = false;
        }
      }

      if (shouldWrite) {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
}

export default function pluginLocalesSync(
  context: LoadContext,
  _options: LocalesSyncOptions,
): Plugin {
  return {
    name: "docusaurus-plugin-locales-sync",
    loadContent() {
      const destI18nRoot = path.resolve(context.siteDir, "i18n");

      const collectionsPkg =
        require.resolve("@tupynambalucas-dev/corporate-collections/package.json");
      const collectionsRoot = path.dirname(collectionsPkg);

      const localesRoot = path.join(collectionsRoot, "locales");
      if (!fs.existsSync(localesRoot)) {
        return;
      }

      // 1. Sync messages from messages-portal into pt-BR default translation
      const messagesPortal = path.join(localesRoot, "messages-portal");
      if (fs.existsSync(messagesPortal)) {
        const ptBrDest = path.join(destI18nRoot, "pt-BR");
        syncFilesOptimized(messagesPortal, ptBrDest);
      }

      // 2. Sync any additional locale folders (e.g., locales/es-ES, locales/pt-BR)
      const entries = fs.readdirSync(localesRoot, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory() && entry.name !== "messages-portal") {
          const localeSrcPath = path.join(localesRoot, entry.name);
          const localeDestPath = path.join(destI18nRoot, entry.name);
          syncFilesOptimized(localeSrcPath, localeDestPath);
        }
      }
    },
  };
}
