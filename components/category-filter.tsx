"use client"

import { cn } from "@/lib/utils"
import { Monitor, Terminal, Globe, Box } from "lucide-react"

const categories = [
  { id: "all", label: "All", icon: Box },
  { id: "desktop", label: "Desktop", icon: Monitor },
  { id: "cli", label: "CLI", icon: Terminal },
  { id: "web", label: "Web", icon: Globe },
] as const

interface CategoryFilterProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {categories.map((category) => {
        const Icon = category.icon
        const isActive = activeCategory === category.id
        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              "flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all",
              isActive
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-secondary text-muted-foreground hover:border-muted-foreground/50 hover:text-foreground"
            )}
          >
            <Icon className="h-4 w-4" />
            {category.label}
          </button>
        )
      })}
    </div>
  )
}
