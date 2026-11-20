# Changelog - tupynambalucas-dev/docs

All notable changes to the `docs` sovereign technical documentation hub will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!-- changelog-start -->

## [1.1.0] - 2026-11-20

### Features & Capabilities

- [feat(git): adopt Evil Martians Lefthook for parallel markdown formatting and commitlint #16](https://github.com/tupynambalucas-dev/docs/pull/16)
- [feat(agents): configure umbrella package catalog and docs #8](https://github.com/tupynambalucas-dev/docs/pull/8)

### Documentation & Specifications

- [docs(readme): standardize documentation hub root readme #13](https://github.com/tupynambalucas-dev/docs/pull/13)
- [docs(agents): document plan dual-storage and register plugins #12](https://github.com/tupynambalucas-dev/docs/pull/12)
- [docs(agents): enforce .agents/plans storage and clean ignore triad #14](https://github.com/tupynambalucas-dev/docs/pull/14)
- [docs(changelog): upgrade to keep a changelog format #17](https://github.com/tupynambalucas-dev/docs/pull/17)

### Bug Fixes & Corrections

- [fix(ignore): remove trailing wildcard from .ignore and .rgignore #15](https://github.com/tupynambalucas-dev/docs/pull/15)

---

## [1.0.0] - 2026-10-03

Welcome to the foundational release of the documentation hub (`v1.0.0`). This update establishes our core architecture, localization infrastructure, and unifies our content strategy.

### Features & Capabilities

- [feat(content): unify content architecture, merging changelog and blog into a single chronological timeline](https://github.com/tupynambalucas-dev/docs/commit/49ae855)
- [feat(localization): enterprise localization pipeline extracting Docusaurus React UI strings into messages/ folder](https://github.com/tupynambalucas-dev/docs/commit/531ad0d)
- [feat(i18n): deploy unified plugin to automatically unpack Crowdin translations directly into native locale structure](https://github.com/tupynambalucas-dev/docs/commit/dbcba51)

### Refactoring & Internal Architecture

- [refactor(crowdin): map Crowdin properties for Docusaurus JSON (`type: chrome`), preventing translators from modifying system keys](https://github.com/tupynambalucas-dev/docs/commit/8a18075)

[1.1.0]: https://github.com/tupynambalucas-dev/docs/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/tupynambalucas-dev/docs/releases/tag/v1.0.0
