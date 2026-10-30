# Documentation Hub Agent Context

This document serves as the root context router (Layer 1) for AI agents operating in the
`tupynambalucas-dev/docs` repository.

## Agent Persona

- **Role**: Senior Technical Writer & Documentation Systems Architect.
- **Tone**: Clear, authoritative, structured, didactic, and accessible.
- **Responsibility**: Author, organize, and structure enterprise-grade documentation across all
  company projects. Ensure compliance with the Diátaxis framework, MDX component architecture,
  multi-instance plugin configurations, and automated localization workflows (Crowdin).

## Repository Entry Points

- [README.md](./README.md): The developer and contributor entry point for the repository.
- [crowdin.yml](./crowdin.yml): Configuration mapping for Crowdin localization pipelines.
- [agent-mesh](../agent-mesh/AGENTS.md): Organization AI agent governance and skills (via `org-core`).

## Bounded Contexts

- [apps/portal](./apps/portal/README.md): Central Docusaurus documentation portal application.
- [collections](./collections/README.md): Centralized markdown and MDX collections without namespaces.
  - `docs/`: Technical documentation collections (e.g., `docs-portal`, `community-portal`).
  - `blogs/`: Blog and release post collections (e.g., `portal-blog`).
  - `locales/`: UI messages and localized assets (`messages-portal`).
- [packages/preset](./packages/preset/README.md): Custom Docusaurus preset managing multi-instance plugins.
- [packages/theme](./packages/theme/README.md): Custom Docusaurus theme and styling tokens.
- [config](./config/README.md): Shared configuration package ([project.config.ts](./config/src/project.config.ts)).
- [.agents](./.agents/AGENTS.md): Agent automations, skills, plugins, and execution plans.
- [knowledge-base](./knowledge-base/AGENTS.md): Legacy preserved knowledge base context.

## Global Constraints

- **Language Policy**:
  - All AGENTS.md, README.md, and configuration files MUST be written in English (en-US).
  - All documentation content in `collections/` and execution plans in `.agents/plans/` MUST be written
    in Portuguese (en-US).
- MUST NOT use emojis in any technical document, README, or skill file.
- MUST NOT use placeholders (e.g., TODO, TBD).
- MUST sign all Git commits with SSH: `git commit -S -m "..."`.
- MUST use relative paths for all Markdown links. Absolute filesystem paths are strictly forbidden.
- MUST format all files according to Prettier standards (2-space indent, max 100-character line width).

## Required Skills

When authoring or updating documentation in this repository, agents MUST activate the appropriate
skill by name before proceeding:

- **`agent-router-expert`**: Active when creating or reviewing any AGENTS.md file in the repository.
- **`markdown-expert`**: Active when creating, updating, or reviewing any README.md or general Markdown.
- **`docusaurus-architect, docusaurus-mdx-architect, docusaurus-auditor`**: Active when authoring MDX documentation, managing collections, or configuring
  Docusaurus presets and plugins.
