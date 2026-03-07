export interface Orchestrator {
  id: string
  name: string
  description: string
  techStack: string[]
  features: string[]
  url?: string
  github?: string
  category: "desktop" | "cli" | "web" | "sdk"
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
  },
  {
    id: "cursor-composer",
    name: "Cursor Composer",
    description:
      "AI-powered code editor with integrated agent capabilities for multi-file edits and intelligent code generation.",
    techStack: ["Electron", "TypeScript", "VS Code Fork"],
    features: [
      "Multi-file agent mode",
      "Inline code generation",
      "Codebase-aware context",
      "Tab completion",
      "Chat interface",
      "Custom model support",
    ],
    url: "https://cursor.com",
    category: "desktop",
  },
  {
    id: "aider",
    name: "Aider",
    description:
      "Open-source AI pair programming tool that works directly in your terminal with any LLM, focusing on clean git commits.",
    techStack: ["Python", "CLI", "Git"],
    features: [
      "Git-native workflow",
      "Multi-model support",
      "Voice coding mode",
      "Automatic commits",
      "Repository mapping",
      "Cost tracking",
    ],
    url: "https://aider.chat",
    github: "https://github.com/paul-gauthier/aider",
    category: "cli",
  },
  {
    id: "windsurf",
    name: "Windsurf",
    description:
      "Codeium's agentic IDE with Cascade, an AI agent that maintains deep awareness of your codebase and developer actions.",
    techStack: ["Electron", "TypeScript", "VS Code Fork"],
    features: [
      "Cascade agent mode",
      "Deep codebase awareness",
      "Multi-file editing",
      "Real-time suggestions",
      "Command execution",
      "Context persistence",
    ],
    url: "https://windsurf.ai",
    category: "desktop",
  },
  {
    id: "devon",
    name: "Devon",
    description:
      "Open-source autonomous software engineer that can plan, execute, and iterate on complex coding tasks independently.",
    techStack: ["Python", "Docker", "React"],
    features: [
      "Autonomous task planning",
      "Self-debugging",
      "Browser automation",
      "Shell access",
      "Visual feedback",
      "Human-in-the-loop",
    ],
    github: "https://github.com/entropy-research/devon",
    category: "web",
  },
  {
    id: "goose",
    name: "Goose",
    description:
      "Block's autonomous developer agent that operates as an AI teammate, handling tasks end-to-end with extensible toolkits.",
    techStack: ["Python", "CLI", "Extensible"],
    features: [
      "Extensible toolkit system",
      "Web browsing capability",
      "Screen interaction",
      "Memory persistence",
      "Custom extensions",
      "MCP protocol support",
    ],
    url: "https://github.com/block/goose",
    github: "https://github.com/block/goose",
    category: "cli",
  },
  {
    id: "mentat",
    name: "Mentat",
    description:
      "AI coding assistant that coordinates changes across multiple files while understanding your entire codebase context.",
    techStack: ["Python", "CLI", "Git"],
    features: [
      "Multi-file coordination",
      "Codebase context",
      "Interactive sessions",
      "Git integration",
      "Custom prompts",
      "Streaming responses",
    ],
    github: "https://github.com/AbanteAI/mentat",
    category: "cli",
  },
  {
    id: "cline",
    name: "Cline",
    description:
      "VS Code extension providing autonomous coding agent capabilities with file editing, command execution, and browser control.",
    techStack: ["TypeScript", "VS Code Extension", "Node.js"],
    features: [
      "VS Code integration",
      "Browser automation",
      "File system access",
      "Terminal commands",
      "MCP support",
      "Human approval mode",
    ],
    github: "https://github.com/cline/cline",
    category: "desktop",
  },
  {
    id: "bolt",
    name: "Bolt.new",
    description:
      "StackBlitz's in-browser AI agent that can build, run, and deploy full-stack applications entirely in WebContainers.",
    techStack: ["WebContainers", "TypeScript", "Browser"],
    features: [
      "In-browser development",
      "Full-stack capabilities",
      "One-click deploy",
      "Package management",
      "Real-time preview",
      "No local setup",
    ],
    url: "https://bolt.new",
    category: "web",
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
  "VS Code Fork": "bg-blue-600/20 text-blue-300 border-blue-600/30",
  "VS Code Extension": "bg-blue-600/20 text-blue-300 border-blue-600/30",
  Git: "bg-red-500/20 text-red-400 border-red-500/30",
  Docker: "bg-sky-500/20 text-sky-400 border-sky-500/30",
  React: "bg-cyan-400/20 text-cyan-300 border-cyan-400/30",
  Extensible: "bg-emerald-400/20 text-emerald-300 border-emerald-400/30",
  WebContainers: "bg-orange-400/20 text-orange-300 border-orange-400/30",
  Browser: "bg-yellow-400/20 text-yellow-300 border-yellow-400/30",
}

export const categoryLabels: Record<string, string> = {
  desktop: "Desktop App",
  cli: "CLI Tool",
  web: "Web Platform",
  sdk: "SDK / Library",
}
