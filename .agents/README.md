# AI Agents Configuration Hub

The `.agents/` directory is the Bounded Context for AI behavior customization, tool integration, and knowledge routing within Academic Lab.

This directory is natively supported by the **Antigravity (AGY)** agent architecture and uses Domain-Driven Design (DDD) to encapsulate AI capabilities and constraints.

## Architecture

Our AI configuration is split into distinct logical units based on their lifecycle and injection behavior:

### `plugins/`

Namespaced bundles that package Skills, Rules, Hooks, and MCP Server Configurations into a single deployable unit. For example, the `workspace-mcps` plugin encapsulates local MCP servers (`firecrawl-mcp` and `context7-mcp`) alongside execution rules for live research, scraping, and documentation indexing.

### `rules/`

Guidelines and constraints that the AI must follow. These markdown files are automatically discovered and injected into the agent's context based on directory hierarchy or specific trigger conditions.

### `skills/`

On-demand, progressive-disclosure markdown files that teach the agent complex multi-step workflows, runbooks, and expert personas (e.g., `agent-router-expert`, `markdown-expert`, `docusaurus-expert`, `plugin-expert`, `skill-expert`). Skills are loaded into the context window on demand.

### `scripts/`

Agent-authored utility scripts (Node.js, Bash, Python) meant for repository manipulation and version-controlled automation tasks.

### `plans/`

Temporary, markdown-based plan artifacts outlining execution steps for complex tasks and study roadmaps.

## Contribution Guidelines

1. **Self-Contained Logic**: Skills and Plugins must be 100% self-contained. Do not create relative links pointing to temporary plans or other transient context.
2. **Portability and Decoupling**: All skills, rules, and plugins must remain decoupled from machine-specific absolute paths.
3. **No Root Scripts**: Never place utility or scratch scripts in the root directory. Save permanent scripts to `scripts/` or use the isolated `.gemini/brain/scratch/` directory for transient execution.
