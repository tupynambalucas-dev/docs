---
title: Workspace MCP Usage Rules
---

# Workspace MCP Execution Rules

> [!NOTE]
> This plugin provides workspace-level Model Context Protocol (MCP) tool integrations for academic research and documentation.

## Guidelines for Tool Selection

### 1. Web Crawling and Scraping (`firecrawl-mcp`)

- **When to Use**: When performing academic research across external portals, gathering full-page documentation, crawling site maps, or extracting clean markdown from research papers and articles.
- **Best Practice**: Use `firecrawl_scrape` for targeted single pages and `firecrawl_crawl` or `firecrawl_search` for comprehensive topic exploration.

### 2. Documentation and Library Search (`context7-mcp`)

- **When to Use**: When querying up-to-date SDK APIs, third-party library reference manuals, framework configurations, or verifying package interfaces.
- **Best Practice**: Use `resolve-library-id` followed by `query-docs` to retrieve accurate, versioned technical documentation.
