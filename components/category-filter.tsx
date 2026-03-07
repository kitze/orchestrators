"use client"

import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "All" },
  { id: "desktop", label: "Desktop" },
  { id: "cli", label: "CLI" },
  { id: "web", label: "Web" },
]

interface CategoryFilterProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-1 rounded-lg border border-border bg-secondary p-1">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
            activeCategory === category.id
              ? "bg-background text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}
