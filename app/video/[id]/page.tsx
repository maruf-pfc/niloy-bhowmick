import { notFound } from "next/navigation"
import { getVideoById } from "@/lib/videos"
import VideoPageClient from "./VideoPageClient"
import type { Metadata, ResolvingMetadata } from "next"

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // Safely access searchParams
  const categoryParam = searchParams.category as string | undefined
  const id = params.id

  // Await params before using
  const video = await getVideoById(id, categoryParam)

  if (!video) {
    return {
      title: "Video Not Found | itsNiloy",
    }
  }

  return {
    title: `${video.title} | itsNiloy`,
    description: video.description,
    keywords: [...video.tags, "video editing", "portfolio", video.client].join(", "),
    openGraph: {
      title: `${video.title} | itsNiloy`,
      description: video.description,
      type: "video",
      url: `https://itsniloy.com/video/${video.id}`,
      images: [
        {
          url: video.thumbnail,
          width: 1280,
          height: 720,
          alt: video.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${video.title} | itsNiloy`,
      description: video.description,
      images: [video.thumbnail],
    },
  }
}

export default async function VideoPage({ params, searchParams }: Props) {
  // Safely access searchParams
  const categoryParam = searchParams.category as string | undefined
  const id = params.id

  // Await params before using
  const video = await getVideoById(id, categoryParam)

  if (!video) {
    notFound()
  }

  const category = categoryParam || "intro-outro"

  return <VideoPageClient video={video} category={category} />
}
