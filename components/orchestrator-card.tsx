"use client"

import { Check, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  type Orchestrator,
  techColors,
  allFeatures,
} from "@/lib/orchestrators"

interface OrchestratorCardProps {
  orchestrator: Orchestrator
}

export function OrchestratorCard({ orchestrator }: OrchestratorCardProps) {
  const Icon = orchestrator.icon

  return (
    <div className="group relative flex flex-col rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-muted-foreground/30 hover:bg-card/80">
      {/* Header with icon */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
          <Icon className="h-5 w-5 text-foreground" />
        </div>
        <a
          href={orchestrator.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group/link"
        >
          <h3 className="font-semibold text-foreground group-hover/link:text-accent transition-colors">
            {orchestrator.name}
          </h3>
          <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 group-hover/link:opacity-100 transition-opacity" />
        </a>
      </div>

      {/* Tech badge */}
      <div className="mb-4">
        <span
          className={cn(
            "rounded-md border px-2.5 py-1 text-xs font-medium",
            techColors[orchestrator.tech] || "bg-secondary text-secondary-foreground border-border"
          )}
        >
          {orchestrator.tech}
        </span>
      </div>

      {/* Features list */}
      <div className="mt-auto">
        <ul className="grid grid-cols-1 gap-1.5">
          {allFeatures.map((feature) => {
            const hasFeature = orchestrator.features.includes(feature)
            return (
              <li
                key={feature}
                className={cn(
                  "flex items-center gap-2 text-xs",
                  hasFeature ? "text-muted-foreground" : "text-muted-foreground/30"
                )}
              >
                <Check className={cn(
                  "h-3 w-3 shrink-0",
                  hasFeature ? "text-emerald-400" : "text-muted-foreground/30"
                )} />
                <span>{feature}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
