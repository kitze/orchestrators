import { LucideIcon, Sparkles, Cloud, Activity, Layers } from "lucide-react"

export interface Orchestrator {
  id: string
  name: string
  description: string
  techStack: string[]
  features: string[]
  url?: string
  github?: string
  category: "desktop" | "cli" | "web" | "sdk"
  icon: LucideIcon
}

export const orchestrators: Orchestrator[] = [
  {
    id: "claude-code",
    name: "Claude Code",
    description:
      "Anthropic's agentic coding tool that lives in the terminal, capable of understanding your codebase, executing commands, and handling complex multi-step tasks.",
    techStack: ["TypeScript", "Node.js", "CLI"],
    features: [
      "Terminal-native interface",
      "Multi-file editing",
      "Git integration",
      "Shell command execution",
      "Context-aware reasoning",
      "Tool use & function calling",
    ],
    url: "https://claude.ai/code",
    category: "cli",
    icon: Sparkles,
  },
  {
    id: "codex",
    name: "Codex",
    description:
      "OpenAI's cloud-based software engineering agent that can work in parallel on multiple tasks, executing code in secure sandboxes.",
    techStack: ["Python", "Cloud Sandbox", "API"],
    features: [
      "Parallel task execution",
      "Secure cloud sandboxes",
      "GitHub integration",
      "Autonomous PR creation",
      "Code review automation",
      "Multi-repo support",
    ],
    url: "https://openai.com/codex",
    category: "web",
    icon: Cloud,
  },
  {
    id: "codex-monitor",
    name: "Codex Monitor",
    description:
      "A lightweight monitoring and management layer for Codex agents, providing visibility into task progress and resource utilization.",
    techStack: ["Swift", "macOS", "SwiftUI"],
    features: [
      "Real-time task monitoring",
      "Resource usage tracking",
      "Agent health checks",
      "Native macOS integration",
      "Notification system",
      "Activity logging",
    ],
    category: "desktop",
    icon: Activity,
  },
  {
    id: "conductor",
    name: "Conductor",
    description:
      "Open-source orchestration platform for managing multiple AI coding agents with unified interface and task delegation.",
    techStack: ["Rust", "Tauri", "TypeScript"],
    features: [
      "Multi-agent orchestration",
      "Task queue management",
      "Cross-platform support",
      "Plugin architecture",
      "Custom workflows",
      "Agent performance analytics",
    ],
    github: "https://github.com/conductor-ai/conductor",
    category: "desktop",
    icon: Layers,
  },
]

export const techColors: Record<string, string> = {
  Swift: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  Electron: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  Tauri: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Rust: "bg-orange-600/20 text-orange-300 border-orange-600/30",
  TypeScript: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Python: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "Node.js": "bg-green-500/20 text-green-400 border-green-500/30",
  CLI: "bg-gray-500/20 text-gray-300 border-gray-500/30",
  macOS: "bg-gray-400/20 text-gray-300 border-gray-400/30",
  SwiftUI: "bg-blue-400/20 text-blue-300 border-blue-400/30",
  "Cloud Sandbox": "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
  API: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
}

export const categoryLabels: Record<string, string> = {
  desktop: "Desktop App",
  cli: "CLI Tool",
  web: "Web Platform",
  sdk: "SDK / Library",
}
