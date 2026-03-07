"use client"

import { ExternalLink, Github, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  type Orchestrator,
  techColors,
  categoryLabels,
} from "@/lib/orchestrators"

interface OrchestratorCardProps {
  orchestrator: Orchestrator
}

export function OrchestratorCard({ orchestrator }: OrchestratorCardProps) {
  const Icon = orchestrator.icon

  return (
    <div className="group relative flex flex-col rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-muted-foreground/30 hover:bg-card/80">
      {/* Header with icon and links */}
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
            <Icon className="h-5 w-5 text-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{orchestrator.name}</h3>
            <span className="text-xs text-muted-foreground">
              {categoryLabels[orchestrator.category]}
            </span>
          </div>
        </div>
        <div className="flex gap-1">
          {orchestrator.url && (
            <a
              href={orchestrator.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label={`Visit ${orchestrator.name} website`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          {orchestrator.github && (
            <a
              href={orchestrator.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label={`View ${orchestrator.name} on GitHub`}
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="mb-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
        {orchestrator.description}
      </p>

      {/* Tech stack badges */}
      <div className="mb-3 flex flex-wrap gap-1.5">
        {orchestrator.techStack.map((tech) => (
          <span
            key={tech}
            className={cn(
              "rounded-md border px-2 py-0.5 text-xs font-medium",
              techColors[tech] || "bg-secondary text-secondary-foreground border-border"
            )}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Features list */}
      <div className="mt-auto">
        <ul className="grid grid-cols-1 gap-1">
          {orchestrator.features.slice(0, 3).map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-xs text-muted-foreground"
            >
              <Check className="h-3 w-3 shrink-0 text-accent" />
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
