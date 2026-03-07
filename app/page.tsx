import { OrchestratorsGrid } from "@/components/orchestrators-grid"
import { Bot, Github } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-foreground" />
            <span className="font-semibold text-foreground">
              Agent Orchestrators
            </span>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="View on GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="mb-8">
          <h1 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            AI Agent Orchestrators
          </h1>
          <p className="mt-2 text-muted-foreground">
            Compare features and tech stacks of the top AI coding agents.
          </p>
        </div>
        <OrchestratorsGrid />
      </main>
    </div>
  )
}
