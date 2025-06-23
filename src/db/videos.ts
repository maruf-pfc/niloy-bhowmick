import { Video } from "@/types/videos";

export const videosData: Video[] = [
  {
    id: 1,
    title: "CLI Based Note Taking App",
    description:
      "A simple command-line interface application for note management with features like creating, editing, deleting, and searching notes.",
    tags: ["CLI", "Shell", "Bash", "File System"],
    img: "https://github.com/maruf-pfc/cli-based-note-taking-app/raw/main/screenshots/login.png",
    publish_date: "2024-10-08",
    live_url: "",
    source_code: "https://github.com/maruf-pfc/cli-based-note-taking-app",
    category: "CLI Tools",
  },
  {
    id: 2,
    title: "QuickGen - Project Scaffolding Tool",
    description:
      "A powerful desktop application built with Java Swing for quick project scaffolding and template generation.",
    tags: ["Java", "Swing"],
    img: "https://github.com/maruf-pfc/quickgen/raw/main/demo.png",
    publish_date: "2024-11-20",
    source_code: "https://github.com/maruf-pfc/quickgen",
    category: "Desktop",
  },
  {
    id: 3,
    title: "Hashtag Converter",
    description:
      "A simple hashtag converter tool built with Next.js to streamline your SEO work by converting comma-separated tags into hashtags. ",
    tags: ["React", "Next.js", "TypeScript"],
    img: "https://github.com/maruf-pfc/hashtag-converter/raw/main/demo.png",
    publish_date: "2024-10-12",
    live_url: "https://hashtag-converter.vercel.app",
    source_code: "https://github.com/maruf-pfc/hashtag-converter",
    category: "Frontend",
  },
  {
    id: 4,
    title: "Build to Learn",
    description:
      "A project-based learning platform designed for developers. Built using a monorepo architecture with Turborepo, this platform features multiple apps (web, dashboard, blog, forum, docs, API) and a shared UI component library.",
    tags: ["Next.js", "TypeScript", "Turborepo", "PostgreSQL", "Docker"],
    img: "https://github.com/maruf-pfc/build-to-learn/raw/main/screenshots/demo.png",
    publish_date: "",
    live_url: "https://build-to-learn.vercel.app/",
    source_code: "https://github.com/maruf-pfc/build-to-learn",
    category: "Full Stack",
  },
];
