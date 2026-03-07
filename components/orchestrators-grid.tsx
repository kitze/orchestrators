"use client"

import { useState, useMemo } from "react"
import { orchestrators } from "@/lib/orchestrators"
import { OrchestratorCard } from "./orchestrator-card"
import { OrchestratorTable } from "./orchestrator-table"
import { CategoryFilter } from "./category-filter"
import { Search, LayoutGrid, TableIcon, Bot } from "lucide-react"
import { cn } from "@/lib/utils"

type ViewMode = "cards" | "table"

export function OrchestratorsGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<ViewMode>("table")

  const filteredOrchestrators = useMemo(() => {
    return orchestrators.filter((orchestrator) => {
      const matchesCategory =
        activeCategory === "all" || orchestrator.category === activeCategory
      const matchesSearch =
        searchQuery === "" ||
        orchestrator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        orchestrator.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        orchestrator.techStack.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        )
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Bot className="h-6 w-6 text-foreground" />
        <h1 className="text-xl font-semibold text-foreground">
          Agent Orchestrators
        </h1>
      </div>

      {/* Controls row */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Search input */}
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-border bg-secondary py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-muted-foreground/50"
          />
        </div>

        <div className="flex items-center gap-3">
          {/* Category filter */}
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* View toggle */}
          <div className="flex items-center gap-1 rounded-lg border border-border bg-secondary p-1">
            <button
              onClick={() => setViewMode("table")}
              className={cn(
                "flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors",
                viewMode === "table"
                  ? "bg-background text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-label="Table view"
            >
              <TableIcon className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("cards")}
              className={cn(
                "flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors",
                viewMode === "cards"
                  ? "bg-background text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-label="Card view"
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      {viewMode === "cards" ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredOrchestrators.map((orchestrator) => (
            <OrchestratorCard key={orchestrator.id} orchestrator={orchestrator} />
          ))}
        </div>
      ) : (
        <OrchestratorTable orchestrators={filteredOrchestrators} />
      )}

      {/* Empty state */}
      {filteredOrchestrators.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-lg font-medium text-foreground">
            No orchestrators found
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  )
}
