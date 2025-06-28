import { clientsData } from "@/db/clients";
import { videoProjectsData } from "@/db/data";
import { Client, VideoProject } from "@/types/videos";

// Helper functions
// Helper functions
export function getAllVideoProjects(): VideoProject[] {
  const allProjects: VideoProject[] = []
  Object.values(videoProjectsData).forEach((categoryProjects) => {
    allProjects.push(...categoryProjects)
  })
  // Sort by publish_date (latest first)
  return allProjects.sort((a, b) => new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime())
}

export function getVideoProjectsByCategory(category?: string): VideoProject[] {
  if (!category || category === "All") {
    return getAllVideoProjects()
  }
  const categoryProjects = videoProjectsData[category as keyof typeof videoProjectsData] || []
  // Sort by publish_date (latest first)
  return categoryProjects.sort((a, b) => new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime())
}

export function getVideoProjectById(id: string): VideoProject | undefined {
  const allProjects = getAllVideoProjects()
  return allProjects.find((project) => project.id === id)
}

export function getFeaturedProjects(limit = 6): VideoProject[] {
  return getAllVideoProjects().slice(0, limit)
}

export function getClients(): Client[] {
  return clientsData
}

// Helper function to get the proper embed link
export const getYouTubeEmbedUrl = (url: string): string | null => {
  if (!url) return null;

  // Handle Shorts
  if (url.includes("youtube.com/shorts/")) {
    const match = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  }

  // Handle Regular YouTube video
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};
