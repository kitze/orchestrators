import { OrchestratorsGrid } from "@/components/orchestrators-grid"
import { Bot, Github, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-foreground" />
            <span className="text-lg font-semibold text-foreground">
              Orchestrators
            </span>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">Contribute</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-border py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            <Sparkles className="h-4 w-4" />
            The Definitive Directory
          </div>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            AI Agent Orchestrators
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Discover and compare the best AI coding agents and orchestration
            platforms. From terminal-native tools to full-featured IDEs, find
            the right solution for your workflow.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border bg-card/50">
        <div className="mx-auto grid max-w-4xl grid-cols-3 divide-x divide-border px-4 py-8 sm:px-6 lg:px-8">
          <div className="px-4 text-center">
            <div className="text-3xl font-bold text-foreground">12+</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Orchestrators
            </div>
          </div>
          <div className="px-4 text-center">
            <div className="text-3xl font-bold text-foreground">4</div>
            <div className="mt-1 text-sm text-muted-foreground">Categories</div>
          </div>
          <div className="px-4 text-center">
            <div className="text-3xl font-bold text-foreground">50+</div>
            <div className="mt-1 text-sm text-muted-foreground">Features</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <OrchestratorsGrid />
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              Built to help developers find the right AI tools.
            </p>
            <p className="text-sm text-muted-foreground">
              Missing an orchestrator?{" "}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 hover:no-underline"
              >
                Submit a PR
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
