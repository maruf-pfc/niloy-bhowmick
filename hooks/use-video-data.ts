"use client"

import { useState, useEffect } from "react"
import type { VideoType } from "@/lib/types"

export function useVideoData(category: string) {
  const [videos, setVideos] = useState<VideoType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchVideos() {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/videos?category=${category}`)

        if (!response.ok) {
          throw new Error(`Failed to fetch videos: ${response.status}`)
        }

        const data = await response.json()
        setVideos(data)
      } catch (err) {
        console.error("Error fetching videos:", err)
        setError(err instanceof Error ? err : new Error("Unknown error occurred"))
      } finally {
        setIsLoading(false)
      }
    }

    fetchVideos()
  }, [category])

  return { videos, isLoading, error }
}
