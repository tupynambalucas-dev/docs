# Theme Package

The `@academic-lab/theme` package implements the custom Docusaurus theme plugin and global stylesheets for Academic Lab using the Thin Orchestrator pattern.

## Architecture

1. **Thin Orchestrator**: Unmodified components resolve directly from `@docusaurus/theme-classic`. We avoid forking upstream theme internals.
2. **Component Shadowing**: Specific components requiring customization are shadowed inside src/theme/.
3. **Self-Contained Styling**: Centralized Infima CSS tokens and Tailwind v4 utilities are consolidated in src/css/custom.css.

## Usage

This package is automatically injected by `@academic-lab/preset`:

```typescript
// custom.css is imported by default in @academic-lab/preset
// theme plugin is registered automatically
```
