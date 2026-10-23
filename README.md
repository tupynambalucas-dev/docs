# Documentation Hub

Centralized documentation hub, developer portal, and multi-project knowledge base for the
`tupynambalucas-dev` organization.

## Architecture

This repository operates as the sovereign documentation platform for company projects, client
deliverables, and technical knowledge. Built with Docusaurus v3 and Turborepo, it features a
modular collections architecture without namespaces, multi-instance documentation plugins, and
Crowdin continuous localization.

## Repository Layout

- [apps/portal](./apps/portal): The central Docusaurus documentation portal.
- [collections](./collections): Markdown and MDX content collections (docs, blogs, locales).
- [packages/preset](./packages/preset): Custom Docusaurus preset managing multi-instance content.
- [packages/theme](./packages/theme): Custom theme, navigation, and brand tokens.
- [config](./config): Shared configuration package containing project metadata.
- [.github/workflows](./.github/workflows): Automated deployment pipelines targeting Cloudflare Pages.
- [crowdin.yml](./crowdin.yml): Crowdin configuration for automated multi-language translation.

## Getting Started

### Prerequisites

- Node.js >= 20
- pnpm >= 12.6.0

### Development Commands

```bash
# Install dependencies
pnpm install

# Start local portal dev server (port 3002)
pnpm portal:dev

# Start local portal in Portuguese
pnpm portal:dev:pt

# Compile changelog and roadmap from collections
pnpm portal:generate:changelog
pnpm portal:generate:roadmap

# Build production bundle
pnpm portal:build

# Preview production build locally
pnpm portal:preview
```

## Contributing and Governance

For AI agent context and architectural constraints, refer to [AGENTS.md](./AGENTS.md).
