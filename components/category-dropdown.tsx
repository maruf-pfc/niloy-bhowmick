"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { Film, PlaySquare, Video, ShoppingBag, ChevronDown, Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const categories = [
  { name: "Intro-Outro", icon: Film, id: "intro-outro" },
  { name: "Tutorials", icon: PlaySquare, id: "tutorials" },
  { name: "Shorts/Reels", icon: Video, id: "shorts-reels" },
  { name: "Ads", icon: ShoppingBag, id: "ads" },
]

export default function CategoryDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || "intro-outro"
  const [activeCategory, setActiveCategory] = useState(currentCategory)
  const pathname = usePathname()
  const router = useRouter()

  // Update active category when URL changes
  useEffect(() => {
    setActiveCategory(currentCategory)
  }, [currentCategory])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const isHome = pathname === "/"

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId)
    setIsOpen(false)
    // Update the URL with the selected category
    if (isHome) {
      router.push(`/?category=${categoryId}`, { scroll: false })
    } else {
      router.push(`/?category=${categoryId}`)
    }
  }

  // Find the active category object
  const activeCategoryObj = categories.find((cat) => cat.id === activeCategory) || categories[0]
  const ActiveIcon = activeCategoryObj.icon

  return (
    <div className="relative z-40" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-md bg-gray-900 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-800"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Menu className="h-5 w-5" />
        <span className="hidden sm:inline">Categories</span>
        <span className="flex items-center gap-1.5 ml-1 sm:ml-2">
          <ActiveIcon className="h-4 w-4 text-purple-400" />
          <span className="text-purple-400">{activeCategoryObj.name}</span>
        </span>
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="py-1" role="none">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={cn(
                    "flex w-full items-center px-4 py-2 text-sm transition-colors",
                    activeCategory === category.id
                      ? "bg-purple-900/50 text-purple-400"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white",
                  )}
                  role="menuitem"
                >
                  <category.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
