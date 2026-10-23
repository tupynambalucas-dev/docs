# Knowledge Base Platform

The Knowledge Base bounded context orchestrates academic documentation collections, custom Docusaurus extensions, and the main portal website for Academic Lab.

## Architecture

This workspace separates content authoring from site rendering through modular collections and a custom preset:

- [collections/](./collections/README.md): Modular documentation and blog collections organized by topic.
- [packages/preset/](./packages/preset/README.md): Custom Docusaurus preset that dynamically resolves collection paths.
- [packages/theme/](./packages/theme/README.md): Reusable presentation theme, Infima tokens, and custom stylesheets.
- [apps/main/](./apps/main/README.md): Primary Docusaurus documentation portal application.

## Core Principles

1. **Modular Collections**: Documentation (collections/docs/) and blogs (collections/blogs/) are isolated from website plumbing.
2. **Dynamic Resolution**: Applications configure collection instances by name (e.g. docs-template), automatically mapped by the preset.
3. **Diátaxis Framework**: Technical documentation follows the four quadrants (explanation, guides, reference, and tutorials).
4. **Bilingual Standard**: English for meta and architecture files; Brazilian Portuguese for educational and academic content.
