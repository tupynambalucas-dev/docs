# AI Agents Configuration Hub (`.agents`)

The `.agents/` directory is the Bounded Context for AI behavior customization, tool integration, and knowledge routing within the `docs` documentation portal monorepo.

---

## Architecture & Integration

Our AI agent configuration consumes sovereign domain plugins via the `@tupynambalucas-dev/agent-mesh` umbrella package:

### 1. Plugin Discovery Manifest (`plugins.json`)

```json
{
  "entries": [
    {
      "path": "node_modules/@tupynambalucas-dev/agent-mesh/plugins/packages"
    }
  ]
}
```

All 10 domain plugins (`docusaurus`, `atelier`, `repo`, `research`, `secrets`, `web`, `github-flow`, `github-org`, `appsheet`, `gwork`) and 8 sovereign MCP servers are discovered simultaneously via the single umbrella package entry.

### 2. Dependency Management

The `@tupynambalucas-dev/agent-mesh` package is pinned via `plugins-stack` in [`pnpm-workspace.yaml`](../pnpm-workspace.yaml) and installed via the root [`package.json`](../package.json):

```yaml
catalogs:
  plugins-stack:
    '@tupynambalucas-dev/agent-mesh': 'github:tupynambalucas-dev/agent-mesh'
```

### 3. Sovereign MCP Launchers

MCP servers bundled in `@tupynambalucas-dev/agent-mesh` execute via self-contained launchers (`scripts/launcher.cjs`) without requiring build steps or runtime dependency resolutions from the consumer project.

---

## Directory Layout

- [plugins.json](./plugins.json): Runtime plugin discovery manifest.
- [AGENTS.md](./AGENTS.md): Bounded context router for `.agents/`.
- [rules/](./rules/): Local rule definitions.
- [skills/](./skills/): Local on-demand skills.
- [scripts/](./scripts/): Agent utility scripts.
- [plans/](./plans/): Refactoring and documentation plan artifacts.

---

## Navigation

- Parent Workspace: [Docs Portal Monorepo Root](../README.md)
