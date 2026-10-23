# Workspace MCP Tools Plugin

This Antigravity plugin encapsulates local Model Context Protocol (MCP) server definitions and execution rules for the Academic Lab ecosystem.

## Overview

The `workspace-mcps` plugin bundles tool definitions that allow AI agents to conduct real-time web research, extract academic references, and query documentation libraries directly within conversational sessions.

## Integrated Servers

- **Firecrawl (`firecrawl-mcp`)**: Provides web crawling, single-page scraping, search, and markdown extraction.
- **Context7 (`context7-mcp`)**: Provides semantic documentation search and API reference resolution.

## Configuration

Server commands and authentication parameters are declared in [mcp_config.json](./mcp_config.json).
Usage rules and agent guardrails are maintained under [rules/mcp-usage.md](./rules/mcp-usage.md).

## Extending

To add a new MCP server to the workspace:

1. Add the server execution entry to `mcpServers` in [mcp_config.json](./mcp_config.json).
2. Document tool trigger scenarios in [rules/mcp-usage.md](./rules/mcp-usage.md).
