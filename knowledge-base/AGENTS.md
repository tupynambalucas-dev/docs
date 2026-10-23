<context-hierarchy>
  <parent src="../AGENTS.md" type="global-rules" />
  <system-instruction>
    AGENT: You are operating in the knowledge-base bounded context. If you have not read "../AGENTS.md" in this session, stop now and read it using your file-reading tools before proceeding. Global constraints are mandatory.
  </system-instruction>
</context-hierarchy>

# Knowledge Base Workspace Context

This document serves as the bounded context router (Layer 2) for the knowledge-base/ workspace.

## Purpose

The knowledge-base bounded context coordinates dynamic documentation and blog collections, custom Docusaurus extensions, and portal applications for Academic Lab.

## Directory Layout

- [collections/](./collections/AGENTS.md): Content source for modular documentation and blog collections.
- [packages/](./packages/): Shared extensions and styling libraries.
  - [preset/](./packages/preset/AGENTS.md): Custom preset dynamically resolving collections.
  - [theme/](./packages/theme/AGENTS.md): Custom Docusaurus theme and Infima design tokens.
- [apps/](./apps/): Docusaurus website applications.
  - [main/](./apps/main/AGENTS.md): Primary Docusaurus documentation portal.

## Scoped Guardrails

- MUST write all documentation content inside collections/ in Portuguese (pt-BR).
- MUST keep all AGENTS.md and README.md files in English (en-US).
- MUST maintain zero placeholders and zero emojis across all documents.
- MUST use relative links for all internal file references.

## Required Skills

When authoring documentation or modifying Docusaurus configurations in this bounded context, agents MUST activate the appropriate skill by name:

- **docusaurus-expert**: For Docusaurus site configuration, plugins, themes, and MDX structure.
- **markdown-expert**: For markdown documentation, README files, and agent context files.
