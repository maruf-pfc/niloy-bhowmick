import type { Metadata } from "next"
import VideoGrid from "@/components/video-grid"
import IntroAnimation from "@/components/intro-animation"
import TestimonialSlider from "@/components/testimonial-slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "itsNiloy | Professional Video Editing Portfolio",
  description:
    "Showcase of high-quality video editing work by Niloy Bhowmick including intros, tutorials, shorts, and advertisements",
  keywords: "video editing, portfolio, motion graphics, post-production, video production, Niloy Bhowmick",
  openGraph: {
    title: "itsNiloy | Professional Video Editing Portfolio",
    description: "Showcase of high-quality video editing work by Niloy Bhowmick",
    type: "website",
    url: "https://itsniloy.com",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pORtWqG1c8FcM65O2Nv8c3KxF4K6i8.png",
        width: 1200,
        height: 630,
        alt: "Niloy Bhowmick",
      },
    ],
  },
}

export default function Home() {
  return (
    <main className="flex-1 p-6 md:p-10">
      <IntroAnimation />
      <div className="container mx-auto">
        <section aria-labelledby="featured-work">
          <h1
            id="featured-work"
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
          >
            Featured Work
          </h1>

          <Tabs defaultValue="intro-outro" className="mb-8">
            <TabsList className="bg-gray-900 border border-gray-800">
              <TabsTrigger
                value="intro-outro"
                className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-purple-400"
              >
                Intro-Outro
              </TabsTrigger>
              <TabsTrigger
                value="tutorials"
                className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-purple-400"
              >
                Tutorials
              </TabsTrigger>
              <TabsTrigger
                value="shorts-reels"
                className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-purple-400"
              >
                Shorts/Reels
              </TabsTrigger>
              <TabsTrigger
                value="ads"
                className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-purple-400"
              >
                Ads
              </TabsTrigger>
            </TabsList>

            <TabsContent value="intro-outro" className="mt-6">
              <VideoGrid category="intro-outro" />
            </TabsContent>

            <TabsContent value="tutorials" className="mt-6">
              <VideoGrid category="tutorials" />
            </TabsContent>

            <TabsContent value="shorts-reels" className="mt-6">
              <VideoGrid category="shorts-reels" />
            </TabsContent>

            <TabsContent value="ads" className="mt-6">
              <VideoGrid category="ads" />
            </TabsContent>
          </Tabs>
        </section>

        <section aria-labelledby="client-testimonials" className="mt-16">
          <h2 id="client-testimonials" className="text-2xl font-bold mb-8">
            Client Testimonials
          </h2>
          <TestimonialSlider />
        </section>
      </div>
    </main>
  )
}
