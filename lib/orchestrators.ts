import { LucideIcon, Sparkles, Cloud, Activity, Layers } from "lucide-react"

// All comparable features across orchestrators
export const allFeatures = [
  "Multi-file Editing",
  "Git Integration",
  "Shell Execution",
  "Parallel Tasks",
  "Cloud Sandbox",
  "Native macOS",
  "Cross-platform",
  "Plugin System",
  "Real-time Monitoring",
  "PR Automation",
] as const

export type Feature = (typeof allFeatures)[number]

export interface Orchestrator {
  id: string
  name: string
  techStack: string[]
  features: Feature[]
  icon: LucideIcon
}

export const orchestrators: Orchestrator[] = [
  {
    id: "claude-code",
    name: "Claude Code",
    techStack: ["TypeScript", "Node.js"],
    features: [
      "Multi-file Editing",
      "Git Integration",
      "Shell Execution",
    ],
    icon: Sparkles,
  },
  {
    id: "codex",
    name: "Codex",
    techStack: ["Python", "Cloud"],
    features: [
      "Multi-file Editing",
      "Git Integration",
      "Parallel Tasks",
      "Cloud Sandbox",
      "PR Automation",
    ],
    icon: Cloud,
  },
  {
    id: "codex-monitor",
    name: "Codex Monitor",
    techStack: ["Swift", "SwiftUI"],
    features: [
      "Native macOS",
      "Real-time Monitoring",
    ],
    icon: Activity,
  },
  {
    id: "conductor",
    name: "Conductor",
    techStack: ["Rust", "Tauri"],
    features: [
      "Multi-file Editing",
      "Cross-platform",
      "Plugin System",
      "Real-time Monitoring",
      "Parallel Tasks",
    ],
    icon: Layers,
  },
]

export const techColors: Record<string, string> = {
  Swift: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  Tauri: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Rust: "bg-orange-600/20 text-orange-300 border-orange-600/30",
  TypeScript: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Python: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "Node.js": "bg-green-500/20 text-green-400 border-green-500/30",
  SwiftUI: "bg-blue-400/20 text-blue-300 border-blue-400/30",
  Cloud: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
}
