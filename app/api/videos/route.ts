import { type NextRequest, NextResponse } from "next/server"
import path from "path"
import fs from "fs/promises"
import type { VideoType } from "@/lib/types"

export async function GET(request: NextRequest) {
  try {
    // Get category from query params
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category") || "intro-outro"

    // Validate category to prevent directory traversal
    const validCategories = ["intro-outro", "tutorials", "shorts-reels", "ads"]
    if (!validCategories.includes(category)) {
      return NextResponse.json({ error: "Invalid category" }, { status: 400 })
    }

    // Get the file path
    const filePath = path.join(process.cwd(), "db", `${category}.json`)

    // Read the file
    const fileData = await fs.readFile(filePath, "utf8")
    const videos: VideoType[] = JSON.parse(fileData)

    return NextResponse.json(videos)
  } catch (error) {
    console.error("Error fetching videos:", error)

    // Check if file not found
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      return NextResponse.json({ error: "Category data not found" }, { status: 404 })
    }

    return NextResponse.json({ error: "Failed to fetch videos" }, { status: 500 })
  }
}
