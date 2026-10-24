# Documentation Hub

Centralized documentation hub, developer portal, and multi-project knowledge base for the `tupynambalucas-dev` organization.

## Architecture

This repository operates as the sovereign documentation platform for company projects, client deliverables, and technical knowledge. Built with Docusaurus v3 and Turborepo, it features a modular collections architecture without namespaces, multi-instance documentation plugins, and Crowdin continuous localization.

## Repository Layout

- [apps/portal](./apps/portal): The central Docusaurus documentation portal.
- [collections](./collections): Markdown and MDX content collections (docs, blogs, locales).
- [packages/preset](./packages/preset): Custom Docusaurus preset managing multi-instance content.
- [packages/theme](./packages/theme): Custom theme, navigation, and brand tokens.
- [config](./config): Shared configuration package containing project metadata.
- [.github/workflows](./.github/workflows): Automated deployment pipelines targeting Cloudflare Pages.
- [crowdin.yml](./crowdin.yml): Crowdin configuration for automated multi-language translation.

---

## Environment Variables and Secret Governance

Deployments and continuous translation pipelines utilize credentials managed through Infisical:

| Variable Name | Purpose | Scope |
| :--- | :--- | :--- |
| `CLOUDFLARE_PAGES_TOKEN` | Deploys built assets to Cloudflare Pages | CI/CD Pipeline (`prod` environment) |
| `CLOUDFLARE_ACCOUNT_ID` | Targets the corporate Cloudflare account | CI/CD Pipeline (`prod` environment) |
| `CROWDIN_PERSONAL_TOKEN` | Syncs localized copy with Crowdin translation memory | CI/CD Pipeline & Localization Workflows |

### Execution Modes

- **Meta-Repository Mode (`org-core`)**: When developing inside `org-core`, secrets cascade from the umbrella environment or root Infisical session.
- **Standalone Workspace Mode (`docs`)**: When opened independently, run commands using project-scoped Infisical credentials or set repository secrets in GitHub Actions:
  ```bash
  infisical run --projectId <DOCS_PROJECT_ID> --env dev -- pnpm portal:dev
  ```

---

## Getting Started

### Prerequisites

- Node.js >= 20
- pnpm >= 10

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

---

## Contributing and Governance

All documentation contributions must adhere to the Diátaxis framework (Tutorials, How-To Guides, Technical References, Explanations):

1. **Cryptographic Signing**: All Git commits must be signed using SSH (`git commit -S -m "..."`).
2. **Conventional Commits**: Commit messages must follow Conventional Commits v1.0.0.
3. **Zero Emojis**: Emojis are strictly forbidden across all Markdown documents, code snippets, and commit messages.
4. **AI Agent Constraints**: For AI agent context and architectural rules, consult [AGENTS.md](./AGENTS.md).
