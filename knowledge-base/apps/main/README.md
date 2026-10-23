# Main Portal Application

The `@academic-lab/app-main` package is the primary Docusaurus documentation portal for Academic Lab. It renders collections dynamically loaded from knowledge-base/collections/ using `@academic-lab/preset` and `@academic-lab/theme`.

## Architecture

This workspace is strictly a presentation and compilation engine:

- [src/pages/index.tsx](./src/pages/index.tsx): Landing home page template displaying project and researcher metadata.
- [docusaurus.config.ts](./docusaurus.config.ts): Main Docusaurus configuration connecting presets and dynamic collections.
- [static/](./static/): Static public assets including site favicons.

## Dynamic Collections

Collections are declared by name in docusaurus.config.ts:

- Docs collections: maps collection name (e.g. docs-main) to knowledge-base/collections/docs/docs-main.
- Blog collections: maps collection name (e.g. blog-main) to knowledge-base/collections/blogs/blog-main.

## Local Development & Build

Execute commands from the monorepo root:

```bash
# Start development server on port 3002
pnpm kb:dev

# Build production static bundle
pnpm kb:build

# Preview production build locally
pnpm kb:preview

# Clear build caches
pnpm kb:clear
```
