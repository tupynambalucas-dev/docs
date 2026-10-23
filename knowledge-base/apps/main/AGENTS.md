<context-hierarchy>
  <parent src="../../../AGENTS.md" type="global-rules" />
  <parent src="../../AGENTS.md" type="bounded-context-rules" />
  <system-instruction>
    AGENT: You are operating in the apps/main sub-domain. If you have not read "../../../AGENTS.md" and "../../AGENTS.md" in this session, stop now and read both files using your file-reading tools before proceeding.
  </system-instruction>
</context-hierarchy>

# Main App Context

This document serves as the sub-domain context router (Layer 3) for the apps/main/ workspace.

## Purpose

This workspace (`@academic-lab/app-main`) hosts the main Docusaurus portal website for Academic Lab, consuming collections from knowledge-base/collections/ via `@academic-lab/preset`.

## Directory Layout

- [docusaurus.config.ts](./docusaurus.config.ts): Site configuration wiring preset, theme, and collection plugins.
- [src/pages/index.tsx](./src/pages/index.tsx): Landing home page template displaying project info and links.
- [static/](./static/): Static assets including favicon and public images.
- [package.json](./package.json): Service dependencies and execution scripts.

## Scoped Guardrails

- MUST NOT author raw markdown or documentation files in this workspace. All content resides in collections/.
- MUST configure docs and blogs using dynamic collection names (e.g. collection: 'docs-template').
- MUST configure defaultLocale as pt-BR with Brazilian Portuguese content.
- MUST keep custom pages clean and didactic as templates.
- MUST NOT reference deleted studio assets or missing static paths.
