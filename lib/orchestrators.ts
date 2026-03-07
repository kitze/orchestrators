import { LucideIcon, Sparkles, Cloud, Activity, Layers, Lightbulb, Hexagon, Triangle } from "lucide-react"

// All comparable features across orchestrators
export const allFeatures = [
  "Worktrees",
  "Rename Project",
  "Menu Bar",
  "Diff Pane",
  "Dictation",
  "Exposes Server",
  "Agent Management",
  "Usage Stats",
] as const

export type Feature = (typeof allFeatures)[number]

export interface Orchestrator {
  id: string
  name: string
  url: string
  tech: string
  features: Feature[]
  icon: LucideIcon
}

export const orchestrators: Orchestrator[] = [
  {
    id: "claude-code",
    name: "Claude Code",
    url: "https://claude.com/download",
    tech: "Electron",
    features: [
      "Worktrees",
      "Diff Pane",
      "Agent Management",
    ],
    icon: Sparkles,
  },
  {
    id: "codex",
    name: "Codex",
    url: "https://openai.com/index/introducing-the-codex-app/",
    tech: "Electron",
    features: [
      "Worktrees",
      "Diff Pane",
      "Agent Management",
    ],
    icon: Cloud,
  },
  {
    id: "codex-monitor",
    name: "Codex Monitor",
    url: "https://codexmonitor.app",
    tech: "Tauri",
    features: [
      "Worktrees",
      "Menu Bar",
      "Diff Pane",
      "Agent Management",
      "Usage Stats",
    ],
    icon: Activity,
  },
  {
    id: "conductor",
    name: "Conductor",
    url: "https://conductor.build",
    tech: "Electron",
    features: [
      "Worktrees",
      "Diff Pane",
      "Agent Management",
    ],
    icon: Layers,
  },
  {
    id: "jean",
    name: "Jean",
    url: "https://jean.build",
    tech: "Electron",
    features: [
      "Worktrees",
      "Diff Pane",
      "Agent Management",
    ],
    icon: Lightbulb,
  },
  {
    id: "polyscope",
    name: "Polyscope",
    url: "https://getpolyscope.com",
    tech: "Electron",
    features: [
      "Worktrees",
      "Agent Management",
    ],
    icon: Hexagon,
  },
  {
    id: "t3-code",
    name: "T3 Code",
    url: "https://github.com/chrisdesrochers/t3chat-desktop",
    tech: "Electron",
    features: [],
    icon: Triangle,
  },
]

export const techColors: Record<string, string> = {
  Electron: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  Swift: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  Tauri: "bg-amber-500/20 text-amber-400 border-amber-500/30",
}
