<context-hierarchy>
  <parent src="../AGENTS.md" type="global-rules" />
  <system-instruction>
    AGENT: You are operating in the config bounded context. If you have not read "../AGENTS.md" in this session, stop now and read it using your file-reading tools before proceeding. Global constraints are mandatory.
  </system-instruction>
</context-hierarchy>

# Configuration Workspace Context

This document serves as the bounded context router (Layer 2) for the config/ workspace.

## Purpose

The config workspace acts as the programmatic single source of truth for Academic Lab configurations, Prettier formatting rules, and base TypeScript compiler settings.

## Directory Layout

- [src/project.config.ts](./src/project.config.ts): Programmatic source of truth for project metadata, researcher name, and site variables.
- [src/prettierrc.json](./src/prettierrc.json): Monorepo-wide code formatting standards.
- [src/.prettierignore](./src/.prettierignore): Exclusions for automated code formatting.
- [src/tsconfig.base.json](./src/tsconfig.base.json): Shared TypeScript configuration inherited by all workspaces.
- [package.json](./package.json): Package manifest exporting configuration paths.

## Scoped Guardrails

- MUST keep configuration variables strongly typed and export both named and default objects.
- MUST NOT add dependencies on other internal monorepo packages.
- MUST keep all values updated to reflect the author Lucas Tupynambá and Academic Lab.
