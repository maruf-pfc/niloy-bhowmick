"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { Film, PlaySquare, Video, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const categories = [
  { name: "Intro-Outro", icon: Film, id: "intro-outro" },
  { name: "Tutorials", icon: PlaySquare, id: "tutorials" },
  { name: "Shorts/Reels", icon: Video, id: "shorts-reels" },
  { name: "Ads", icon: ShoppingBag, id: "ads" },
]

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true)
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || "intro-outro"
  const [activeCategory, setActiveCategory] = useState(currentCategory)
  const pathname = usePathname()
  const router = useRouter()

  // Update active category when URL changes
  useEffect(() => {
    setActiveCategory(currentCategory)
  }, [currentCategory])

  const isHome = pathname === "/"

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId)
    // Update the URL with the selected category
    if (isHome) {
      router.push(`/?category=${categoryId}`, { scroll: false })
    } else {
      router.push(`/?category=${categoryId}`)
    }
  }

  return (
    <div className="relative">
      <AnimatePresence initial={false}>
        <motion.aside
          key="sidebar"
          initial={{ width: expanded ? 240 : 70 }}
          animate={{ width: expanded ? 240 : 70 }}
          exit={{ width: 70 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "fixed left-0 top-16 bottom-0 z-40 bg-gray-900 border-r border-gray-800 overflow-y-auto",
            expanded ? "w-60" : "w-[70px]",
          )}
        >
          <div className="flex h-full flex-col py-4">
            <div className="mb-6 flex items-center justify-between px-4">
              {expanded && <h2 className="text-lg font-semibold">Categories</h2>}
              <button
                onClick={() => setExpanded(!expanded)}
                className="rounded-full p-1.5 hover:bg-gray-800"
                aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
              >
                {expanded ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </button>
            </div>
            <nav className="space-y-1 px-2 overflow-y-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={cn(
                    "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    activeCategory === category.id
                      ? "bg-purple-900/50 text-purple-400"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white",
                  )}
                >
                  <category.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  {expanded && <span>{category.name}</span>}
                </button>
              ))}
            </nav>
          </div>
        </motion.aside>
      </AnimatePresence>

      {/* Mobile overlay when sidebar is open */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-30 bg-black/80 transition-opacity md:hidden",
          expanded ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setExpanded(false)}
      />
    </div>
  )
}
