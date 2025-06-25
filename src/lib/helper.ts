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
