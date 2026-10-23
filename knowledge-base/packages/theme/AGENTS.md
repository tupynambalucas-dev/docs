<context-hierarchy>
  <parent src="../../../AGENTS.md" type="global-rules" />
  <parent src="../../AGENTS.md" type="bounded-context-rules" />
  <system-instruction>
    AGENT: You are operating in the packages/theme sub-domain. If you have not read "../../../AGENTS.md" and "../../AGENTS.md" in this session, stop now and read both files using your file-reading tools before proceeding.
  </system-instruction>
</context-hierarchy>

# Theme Package Context

This document serves as the sub-domain context router (Layer 3) for the packages/theme/ workspace.

## Purpose

This workspace (`@academic-lab/theme`) implements a custom Docusaurus theme plugin and provides the centralized styling and Infima design tokens for Academic Lab.

## Directory Layout

- [src/index.ts](./src/index.ts): Theme plugin entrypoint validating options and exposing theme components.
- [src/css/custom.css](./src/css/custom.css): Centralized Infima CSS token mappings and Tailwind utilities.
- [src/theme/](./src/theme/): Component shadowing overrides for classic Docusaurus components.

## Scoped Guardrails

- MUST maintain self-contained CSS tokens without external asset dependencies.
- MUST use the Thin Orchestrator pattern: only shadow components when customization is required.
- MUST validate theme configurations chaining with upstream classic theme validators.
- MUST keep all links relative without backtick wrapping.
