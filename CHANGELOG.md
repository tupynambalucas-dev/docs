# Changelog

All notable changes to the `docs` sovereign technical documentation hub will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!-- changelog-start -->

## [1.0.0] - 2026-10-03

Welcome to the first official major release of the documentation hub (`v1.0.0`)! This update establishes our core architecture, localization infrastructure, and unifies our content strategy.

### Features & Capabilities
- [FEAT] (content): unify content architecture, merging changelog and blog into a single chronological timeline.
- [FEAT] (localization): enterprise localization pipeline extracting Docusaurus React UI strings into `messages/` folder.
- [FEAT] (i18n): deploy unified plugin to automatically unpack Crowdin translations directly into native locale structure.
- [FEAT] (translations): complete first wave of Portuguese (pt-BR) localization covering brand principles, tokens, and storage.

### Refactoring & Internal Architecture
- [REFACTOR] (crowdin): map Crowdin properties for Docusaurus JSON (`type: chrome`), preventing translators from modifying system keys.

### Continuous Integration & Automation
- [CI] (gitops): harden `.github/` workflows for synchronized translation deployment and architecture-as-code principles.

[1.0.0]: https://github.com/tupynambalucas-dev/docs/releases/tag/v1.0.0
