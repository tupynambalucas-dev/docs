<context-hierarchy>
  <parent src="../AGENTS.md" type="global-rules" />
  <system-instruction>
    AGENT: You are operating in the .agents bounded context of tupynambalucas-dev/docs. If you have not read ../AGENTS.md in this session, stop now and read it using your file-reading tools before proceeding. Global constraints are mandatory.
  </system-instruction>
</context-hierarchy>

# Bounded Context: .agents

This bounded context ([.agents/](./)) manages the lifecycle, personas, tools, and domain-specific knowledge for AI agents operating within the `docs` documentation portal monorepo. It strictly adheres to the Antigravity (AGY) customization architecture.

---

## 1. Directory Architecture

- **[plugins.json](./plugins.json)**: Antigravity plugin discovery manifest referencing the `@tupynambalucas-dev/agent-mesh` umbrella package (`node_modules/@tupynambalucas-dev/agent-mesh/plugins/packages`).
- **[rules/](./rules/)**: Global or localized markdown constraints automatically injected into the agent's context based on location or trigger conditions.
- **[scripts/](./scripts/)**: Utility scripts executed strictly by AI agents. Human-operated scripts do not belong here.
- **[skills/](./skills/)**: Self-contained Markdown instruction files defining expert personas, validation workflows, and multi-step runbooks. Loaded on demand via progressive disclosure.
- **[plans/](./plans/)**: Temporary, markdown-based execution plans for complex refactors.

---

## 2. Agent Constraints & Umbrella Consumption

1. **Umbrella Package Consumption**: All organizational plugins are consumed via the `@tupynambalucas-dev/agent-mesh` umbrella package declared in [`pnpm-workspace.yaml`](../pnpm-workspace.yaml) under `catalogs.plugins-stack` and installed via the root [`package.json`](../package.json) `devDependencies` (`catalog:plugins-stack`).
2. **Deterministic Discovery Path**: [`plugins.json`](./plugins.json) registers `node_modules/@tupynambalucas-dev/agent-mesh/plugins/packages`. Antigravity and Claude Code automatically discover all 10 domain plugins (`docusaurus`, `atelier`, `repo`, `research`, `secrets`, `web`, `github-flow`, `github-org`, `appsheet`, `gwork`).
3. **Sovereign MCP Execution**: MCP servers run via self-contained entrypoints (`scripts/launcher.cjs` and `dist/bin.cjs`) with zero external dependency compilation required.
4. **Root Script Ban**: Agents MUST NEVER create temporary or utility scripts directly in the monorepo root. Use `.agents/scripts/` or the isolated `brain/scratch/` directory.
5. **Crowdin Localization Barrier**: NEVER edit files inside `i18n/` directly. All source documentation edits MUST occur strictly in the root English source directory (`docs/`). Localization is synchronized automatically via Crowdin actions.

---

## 3. Required Skills

When authoring or modifying customizations and documentation within this bounded context, agents MUST activate the appropriate skill by name before beginning:

- **`docusaurus-architect`**: When designing taxonomies, Diátaxis quadrant structuring, and navigation hierarchy (`_category_.json`).
- **`docusaurus-mdx-architect`**: When authoring or refactoring technical documents to ensure strict MDX v3 parser compliance.
- **`docusaurus-auditor`**: When auditing documentation for broken links, syntax errors, or build issues.
- **`router-architect`**: When updating `AGENTS.md` context routers.
- **`readme-architect`**: When managing repository documentation and README files.

---

## 4. Documentation Rules (Diátaxis Framework)

When agents author technical documentation in the repository:

1. **Diátaxis Framework**: Every document MUST belong to exactly one of the four Diátaxis quadrants:
   - `tutorials/`: Learning-oriented, step-by-step guidance for beginners.
   - `how-to-guides/`: Problem-oriented, task-focused steps for accomplishing specific goals.
   - `reference/`: Information-oriented, technical descriptions, schemas, APIs, and configurations.
   - `explanation/`: Understanding-oriented, architectural rationale, background context, and design decisions.
2. **MDX v3 Compatibility**: Self-closing HTML tags MUST include a trailing slash (`<br />`, `<hr />`, `<img ... />`). Code blocks MUST declare an explicit language identifier.
3. **Zero-Emoji Policy**: Emojis are strictly forbidden across all markdown headers, admonitions, body text, and sidebar labels.
