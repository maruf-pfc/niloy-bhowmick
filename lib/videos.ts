import fs from "fs/promises"
import path from "path"
import type { VideoType } from "@/lib/types"

// Get all videos for a specific category
export async function getVideos(category: string): Promise<VideoType[]> {
  try {
    // Validate category to prevent directory traversal
    const validCategories = ["intro-outro", "tutorials", "shorts-reels", "ads"]
    if (!validCategories.includes(category)) {
      return []
    }

    const filePath = path.join(process.cwd(), "db", `${category}.json`)
    const fileData = await fs.readFile(filePath, "utf8")
    return JSON.parse(fileData)
  } catch (error) {
    console.error("Error fetching videos:", error)
    return []
  }
}

// Get a specific video by ID
export async function getVideoById(id: string, category?: string): Promise<VideoType | null> {
  try {
    // If category is provided, only look in that category
    if (category) {
      const videos = await getVideos(category)
      return videos.find((video) => video.id === id) || null
    }

    // Otherwise, search in all categories
    const validCategories = ["intro-outro", "tutorials", "shorts-reels", "ads"]

    for (const cat of validCategories) {
      const videos = await getVideos(cat)
      const video = videos.find((video) => video.id === id)
      if (video) return video
    }

    return null
  } catch (error) {
    console.error("Error fetching video by ID:", error)
    return null
  }
}
