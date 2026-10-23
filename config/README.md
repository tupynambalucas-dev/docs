# Configuration Workspace

The `@academic-lab/config` package provides the centralized configuration foundation for Academic Lab. It establishes the single source of truth for repository variables, formatting definitions, and shared compiler settings.

## Overview

This workspace isolates project configuration from application runtime code, ensuring clean separation of concerns and eliminating duplicated values across monorepo packages.

## Structure

- [src/project.config.ts](./src/project.config.ts): Project variables including author name, domain, and study metadata.
- [src/prettierrc.json](./src/prettierrc.json): Standardized Prettier rules applied across the repository.
- [src/.prettierignore](./src/.prettierignore): Global formatting ignore list.
- [src/tsconfig.base.json](./src/tsconfig.base.json): Common TypeScript compiler base configuration.

## Usage

Other workspaces consume these configurations via workspace dependencies:

```typescript
import projectConfig from "@academic-lab/config/project.config";
```
