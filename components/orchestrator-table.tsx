"use client"

import { ExternalLink, Github, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  type Orchestrator,
  techColors,
  categoryLabels,
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
            <th className="px-4 py-3 font-medium text-foreground">Name</th>
            <th className="px-4 py-3 font-medium text-foreground">Category</th>
            <th className="px-4 py-3 font-medium text-foreground">Tech Stack</th>
            <th className="px-4 py-3 font-medium text-foreground">Features</th>
            <th className="px-4 py-3 font-medium text-foreground">Links</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {orchestrators.map((orchestrator) => (
            <tr
              key={orchestrator.id}
              className="bg-card transition-colors hover:bg-secondary/30"
            >
              <td className="px-4 py-4">
                <div>
                  <div className="font-medium text-foreground">
                    {orchestrator.name}
                  </div>
                  <div className="mt-1 max-w-xs text-xs text-muted-foreground line-clamp-2">
                    {orchestrator.description}
                  </div>
                </div>
              </td>
              <td className="px-4 py-4">
                <span className="whitespace-nowrap rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  {categoryLabels[orchestrator.category]}
                </span>
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
              <td className="px-4 py-4">
                <ul className="space-y-1">
                  {orchestrator.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground"
                    >
                      <Check className="h-3 w-3 shrink-0 text-accent" />
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                  {orchestrator.features.length > 3 && (
                    <li className="text-xs text-muted-foreground/60">
                      +{orchestrator.features.length - 3} more
                    </li>
                  )}
                </ul>
              </td>
              <td className="px-4 py-4">
                <div className="flex gap-2">
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
