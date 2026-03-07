"use client"

import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  type Orchestrator,
  techColors,
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
        <h3 className="font-semibold text-foreground">{orchestrator.name}</h3>
      </div>

      {/* Tech stack badges */}
      <div className="mb-4 flex flex-wrap gap-1.5">
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
        <ul className="grid grid-cols-1 gap-1.5">
          {orchestrator.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-xs text-muted-foreground"
            >
              <Check className="h-3 w-3 shrink-0 text-emerald-400" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
