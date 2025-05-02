import type { Metadata } from "next"
import ProjectsClientPage from "./ProjectsClientPage"

export const metadata: Metadata = {
  title: "Projects | itsNiloy",
  description: "Explore our featured video editing projects and case studies",
  keywords: "video projects, portfolio, case studies, video editing work, Niloy Bhowmick",
  openGraph: {
    title: "Projects | itsNiloy",
    description: "Explore our featured video editing projects and case studies",
    url: "https://itsniloy.com/projects",
  },
}

export default function ProjectsPage() {
  return <ProjectsClientPage />
}
