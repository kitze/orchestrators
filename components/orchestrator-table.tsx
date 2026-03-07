"use client"

import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  type Orchestrator,
  techColors,
  allFeatures,
} from "@/lib/orchestrators"

interface OrchestratorTableProps {
  orchestrators: Orchestrator[]
}

export function OrchestratorTable({ orchestrators }: OrchestratorTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-border bg-secondary/50">
          <tr>
            <th className="sticky left-0 z-10 min-w-[160px] bg-secondary/50 px-4 py-3 font-medium text-foreground">
              Name
            </th>
            <th className="min-w-[140px] px-4 py-3 font-medium text-foreground">
              Tech Stack
            </th>
            {allFeatures.map((feature) => (
              <th
                key={feature}
                className="min-w-[100px] px-3 py-3 text-center font-medium text-foreground"
              >
                <span className="text-xs">{feature}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {orchestrators.map((orchestrator) => {
            const Icon = orchestrator.icon
            return (
              <tr
                key={orchestrator.id}
                className="bg-card transition-colors hover:bg-secondary/30"
              >
                <td className="sticky left-0 z-10 bg-card px-4 py-4 transition-colors group-hover:bg-secondary/30">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <Icon className="h-4 w-4 text-foreground" />
                    </div>
                    <span className="font-medium text-foreground">
                      {orchestrator.name}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex flex-wrap gap-1.5">
                    {orchestrator.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={cn(
                          "whitespace-nowrap rounded-md border px-2 py-0.5 text-xs font-medium",
                          techColors[tech] ||
                            "border-border bg-secondary text-secondary-foreground"
                        )}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </td>
                {allFeatures.map((feature) => {
                  const hasFeature = orchestrator.features.includes(feature)
                  return (
                    <td key={feature} className="px-3 py-4 text-center">
                      {hasFeature ? (
                        <Check className="mx-auto h-4 w-4 text-emerald-400" />
                      ) : (
                        <X className="mx-auto h-4 w-4 text-muted-foreground/30" />
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
