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
  return (
    <div className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-muted-foreground/30 hover:bg-card/80">
      {/* Category badge */}
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
          {categoryLabels[orchestrator.category]}
        </span>
        <div className="flex gap-2">
          {orchestrator.url && (
            <a
              href={orchestrator.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
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
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label={`View ${orchestrator.name} on GitHub`}
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {/* Name and description */}
      <h3 className="mb-2 text-xl font-semibold text-foreground">
        {orchestrator.name}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
        {orchestrator.description}
      </p>

      {/* Tech stack badges */}
      <div className="mb-4 flex flex-wrap gap-2">
        {orchestrator.techStack.map((tech) => (
          <span
            key={tech}
            className={cn(
              "rounded-md border px-2.5 py-1 text-xs font-medium",
              techColors[tech] || "bg-secondary text-secondary-foreground border-border"
            )}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Features list */}
      <div className="mt-auto">
        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Features
        </h4>
        <ul className="grid grid-cols-1 gap-1.5">
          {orchestrator.features.slice(0, 4).map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Check className="h-3.5 w-3.5 shrink-0 text-accent" />
              <span>{feature}</span>
            </li>
          ))}
          {orchestrator.features.length > 4 && (
            <li className="text-xs text-muted-foreground/60">
              +{orchestrator.features.length - 4} more features
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
