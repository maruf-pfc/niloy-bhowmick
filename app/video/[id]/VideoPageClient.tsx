"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Tag, User } from "lucide-react"
import { formatDate } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Play } from "@/components/Play"

export default function VideoPageClient({
  video,
  category,
}: {
  video: any
  category: string
}) {
  return (
    <main className="flex-1 p-6 md:p-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="inline-flex items-center text-sm text-gray-400 hover:text-purple-400 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all videos
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="overflow-hidden rounded-lg bg-gray-900 shadow-xl">
            <div className={`relative ${category === "shorts-reels" ? "aspect-[9/16]" : "aspect-video"}`}>
              <Image
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  className="rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg"
                  onClick={() => {
                    window.open(video.videoUrl, "_blank")
                  }}
                >
                  <Play className="h-6 w-6 fill-white" />
                </Button>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">{video.title}</h1>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4 text-purple-400" />
                  <span>Client: {video.client}</span>
                </div>

                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-purple-400" />
                  <span>Date: {formatDate(video.date)}</span>
                </div>

                <div className="flex items-center">
                  <Tag className="mr-2 h-4 w-4 text-purple-400" />
                  <span>Category: {category}</span>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-gray-300">{video.description}</p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Project Details</h2>
                <p className="text-gray-300">
                  This project was created for {video.client} in {new Date(video.date).getFullYear()}. The video
                  showcases professional editing techniques, color grading, and sound design to create a compelling
                  visual experience.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Technical Specifications</h2>
                <ul className="list-disc pl-5 text-gray-300">
                  <li>Resolution: 4K (3840x2160)</li>
                  <li>Frame Rate: 60fps</li>
                  <li>Color Grading: Custom LUT</li>
                  <li>Software: Adobe Premiere Pro, After Effects</li>
                  <li>Duration: 2:30 minutes</li>
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {video.tags.map((tag: string) => (
                  <span key={tag} className="rounded-full bg-purple-900/50 px-3 py-1 text-xs text-purple-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-800">
                <h2 className="text-xl font-semibold mb-4">Related Projects</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="overflow-hidden rounded-lg bg-gray-800">
                      <div className="aspect-video relative">
                        <Image
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={`Related project ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 33vw, 300px"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="font-medium text-sm">Related Project {i + 1}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Client Testimonial</h2>
              <blockquote className="text-gray-300 italic">
                "Working with VideoFolio was an exceptional experience. The attention to detail and creative vision
                brought our project to life in ways we couldn't have imagined. The final video exceeded our expectations
                and helped us achieve our marketing goals."
              </blockquote>
              <p className="mt-4 text-sm text-gray-400">— Marketing Director, {video.client}</p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Behind the Scenes</h2>
              <p className="text-gray-300">
                This project involved extensive planning and creative collaboration. We worked closely with the client
                to understand their vision and target audience. The editing process included multiple revisions to
                perfect every transition and visual element.
              </p>
              <Button className="mt-4 bg-purple-600 hover:bg-purple-700">View Process</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
