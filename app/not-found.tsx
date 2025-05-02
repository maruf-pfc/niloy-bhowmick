import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export const metadata: Metadata = {
  title: "404 - Page Not Found | VideoFolio",
  description: "The page you are looking for does not exist.",
}

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        <h1 className="text-6xl font-bold text-purple-500">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-gray-400">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild className="mt-6 bg-purple-600 hover:bg-purple-700">
          <Link href="/" className="inline-flex items-center">
            <Home className="mr-2 h-4 w-4" /> Return to Home
          </Link>
        </Button>
      </div>
    </main>
  )
}
