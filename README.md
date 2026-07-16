# Awesome Agent Orchestrators [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)

> A curated list of AI agent orchestrators and desktop interfaces for running, comparing, and managing coding agents.
>
> This repository now works in two ways:
> - a GitHub-friendly awesome list in this README
> - a Next.js web app for searchable card and table views

## Contents

- [Comparison table](#comparison-table)
- [Projects](#projects)
- [Tracked features](#tracked-features)
- [About this repo](#about-this-repo)
- [Development](#development)
- [Contributing](#contributing)

## Comparison table

> Legend: ✅ = currently tracked in this repo, — = not currently tracked.

| Project | Tech | Worktrees | Rename Project | Menu Bar | Diff Pane | Dictation | Exposes Server | Agent Management | Usage Stats |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Claude Code](https://claude.com/download) | Electron | ✅ | — | — | ✅ | — | — | ✅ | — |
| [Codex](https://openai.com/index/introducing-the-codex-app/) | Electron | ✅ | — | — | ✅ | — | — | ✅ | — |
| [Codex Monitor](https://codexmonitor.app) | Tauri | ✅ | — | ✅ | ✅ | — | — | ✅ | ✅ |
| [Conductor](https://conductor.build) | Electron | ✅ | — | — | ✅ | — | — | ✅ | — |
| [Jean](https://jean.build) | Electron | ✅ | — | — | ✅ | — | — | ✅ | — |
| [Polyscope](https://getpolyscope.com) | Electron | ✅ | — | — | — | — | — | ✅ | — |
| [SlayZone](https://slayzone.app) | Electron | ✅ | ✅ | ✅ | ✅ | — | ✅ | ✅ | — |
| [T3 Code](https://t3.codes/) | Electron | — | — | — | — | — | — | — | — |

## Projects

Projects are listed alphabetically.

- [Claude Code](https://claude.com/download) — Electron. Tracked features: Worktrees, Diff Pane, Agent Management.
- [Codex](https://openai.com/index/introducing-the-codex-app/) — Electron. Tracked features: Worktrees, Diff Pane, Agent Management.
- [Codex Monitor](https://codexmonitor.app) — Tauri. Tracked features: Worktrees, Menu Bar, Diff Pane, Agent Management, Usage Stats.
- [Conductor](https://conductor.build) — Electron. Tracked features: Worktrees, Diff Pane, Agent Management.
- [Jean](https://jean.build) — Electron. Tracked features: Worktrees, Diff Pane, Agent Management.
- [Polyscope](https://getpolyscope.com) — Electron. Tracked features: Worktrees, Agent Management.
- [SlayZone](https://slayzone.app) — Electron. Tracked features: Worktrees, Rename Project, Menu Bar, Diff Pane, Exposes Server, Agent Management.
- [T3 Code](https://t3.codes/) — Electron. No features are currently tracked in this repo.

## Tracked features

These are the comparison fields currently used by the directory:

- **Worktrees** — support for working across multiple git worktrees.
- **Rename Project** — ability to rename a project from the UI.
- **Menu Bar** — menu bar or tray integration.
- **Diff Pane** — built-in diff or review view.
- **Dictation** — voice input or dictation support.
- **Exposes Server** — exposes a local or remote server/API surface.
- **Agent Management** — tools for viewing or managing agents/sessions.
- **Usage Stats** — usage, cost, or activity metrics.

## About this repo

This repo includes both the data and the UI for the directory:

- `README.md` — the GitHub-native awesome-list view
- `lib/orchestrators.ts` — the current source data for orchestrators and tracked features
- `components/orchestrator-table.tsx` — table UI for the web app
- `components/orchestrator-card.tsx` — card UI for the web app
- `app/page.tsx` — homepage entry point

The README is meant to be the fastest way to scan the list on GitHub, while the web app is better for browsing and filtering.

## Development

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Contributing

If you want to add or update an entry:

1. Update `lib/orchestrators.ts`.
2. Keep this README in sync with the same project list and feature matrix.
3. Prefer official product links and short, factual descriptions.

Feature coverage in this repository is intentionally lightweight and may lag behind product updates.
