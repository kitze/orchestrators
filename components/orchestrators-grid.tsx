"use client"

import { useState, useMemo } from "react"
import { orchestrators } from "@/lib/orchestrators"
import { OrchestratorCard } from "./orchestrator-card"
import { CategoryFilter } from "./category-filter"
import { Search } from "lucide-react"

export function OrchestratorsGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

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
    <div className="space-y-8">
      {/* Search and Filter */}
      <div className="flex flex-col items-center gap-6">
        {/* Search input */}
        <div className="relative w-full max-w-md">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search orchestrators, tech..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-border bg-secondary py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-muted-foreground/50"
          />
        </div>

        {/* Category filter */}
        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {/* Results count */}
      <p className="text-center text-sm text-muted-foreground">
        Showing {filteredOrchestrators.length} of {orchestrators.length}{" "}
        orchestrators
      </p>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredOrchestrators.map((orchestrator) => (
          <OrchestratorCard key={orchestrator.id} orchestrator={orchestrator} />
        ))}
      </div>

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
