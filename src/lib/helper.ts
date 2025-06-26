import { videoProjectsData } from "@/db/data";
import { VideoProject } from "@/types/videos";

// Helper functions
export function getVideoProjects(): VideoProject[] {
  return videoProjectsData;
}

export function getVideoProjectById(id: number): VideoProject | undefined {
  return videoProjectsData.find((project) => project.id === id);
}

export function getVideoProjectsByCategory(category?: string): VideoProject[] {
  if (!category || category === "All") return videoProjectsData;
  return videoProjectsData.filter((project) => project.category === category);
}

export function getFeaturedProjects(limit = 6): VideoProject[] {
  return videoProjectsData
    .sort(
      (a, b) =>
        new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime()
    )
    .slice(0, limit);
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
