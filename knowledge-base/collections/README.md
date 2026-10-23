# Collections Workspace

The `@academic-lab/collections` package serves as the modular repository for documentation and blog collections within Academic Lab.

## Overview

This workspace isolates academic and educational content from website runtime code. Collections can be configured independently and imported dynamically into any Docusaurus application inside apps/.

## Structure

- [docs/](./docs/): Documentation collections organized by topic.
  - [docs/docs-main/](./docs/docs-main/): Primary documentation collection structured around the Diátaxis framework (explanation/, guides/, reference/, tutorials/).
  - [docs/community-main/](./docs/community-main/): Community guidelines, study ethics, and academic roadmap.
- [blogs/](./blogs/): Chronological and technical blog collections.
  - [blogs/blog-main/](./blogs/blog-main/): Technical blog articles including author and tag definitions.

## Authoring Standards

1. **Extension Policy**: All content files must use the .mdx extension.
2. **Language Standard**: All academic content is written natively in Brazilian Portuguese (pt-BR).
3. **Template Integrity**: Keep base collections clean with overview.mdx, intro.mdx, and _category_.json files.
