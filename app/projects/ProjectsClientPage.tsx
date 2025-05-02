"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Award, ExternalLink, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

// Client component for animations
function ProjectsContent() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <div className="container mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h1>

      <div className="space-y-16">
        {/* Featured Project */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={0}
          className="rounded-lg overflow-hidden bg-gray-900 shadow-xl max-w-4xl mx-auto"
        >
          <div className="relative aspect-video">
            <Image
              src="/placeholder.svg?height=720&width=1280&text=Featured+Project"
              alt="Corporate Brand Video"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
              <div className="p-6 md:p-8 w-full">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-600 text-xs font-medium text-white mb-4">
                  Featured Project
                </span>
                <h2 className="text-xl md:text-2xl font-bold mb-2">Corporate Brand Video</h2>
                <p className="text-gray-300 text-sm md:text-base max-w-2xl mb-4">
                  A comprehensive brand video for a tech startup, showcasing their product and company culture. This
                  project involved extensive planning, storyboarding, and collaboration with the client's team.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="rounded-full bg-purple-900/50 px-3 py-1 text-xs text-purple-300">
                    Motion Graphics
                  </span>
                  <span className="rounded-full bg-purple-900/50 px-3 py-1 text-xs text-purple-300">Color Grading</span>
                  <span className="rounded-full bg-purple-900/50 px-3 py-1 text-xs text-purple-300">Sound Design</span>
                  <span className="rounded-full bg-purple-900/50 px-3 py-1 text-xs text-purple-300">4K</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    <Play className="mr-2 h-4 w-4" /> Watch Video
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-700 hover:bg-gray-800">
                    <ArrowRight className="mr-2 h-4 w-4" /> View Case Study
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Project Grid */}
        <div className="space-y-6">
          <motion.h2 initial="hidden" animate="visible" variants={fadeIn} custom={1} className="text-2xl font-semibold">
            Recent Projects
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                custom={i + 1}
                className="overflow-hidden rounded-lg bg-gray-900 transition-transform hover:-translate-y-1"
              >
                <div className="aspect-video relative">
                  <Image
                    src={`/placeholder.svg?height=720&width=1280&text=Project+${i}`}
                    alt={`Project ${i}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button size="sm" className="rounded-full bg-purple-600 hover:bg-purple-700">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Project Title {i}</h3>
                  <p className="mt-2 text-sm text-gray-300">
                    A brief description of this project and what made it unique. Highlighting key features and outcomes.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-purple-900/50 px-3 py-1 text-xs text-purple-300">Category</span>
                    <span className="rounded-full bg-purple-900/50 px-3 py-1 text-xs text-purple-300">Technique</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between items-center">
                    <span className="text-sm text-gray-400">Client Name</span>
                    <Link href="#" className="text-sm text-purple-400 hover:text-purple-300 flex items-center">
                      View Details <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Award-Winning Projects */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={8}
          className="rounded-lg bg-gray-900 p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <Award className="h-8 w-8 text-purple-400" />
            <h2 className="text-2xl font-semibold">Award-Winning Work</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=720&width=1280&text=Award+Winner+1"
                  alt="Award-Winning Project 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Best Editing Award</h3>
                <p className="text-sm text-gray-300">
                  This project won the Best Editing award at the Regional Film Festival for its innovative approach to
                  visual storytelling and seamless transitions.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=720&width=1280&text=Award+Winner+2"
                  alt="Award-Winning Project 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Digital Content Excellence</h3>
                <p className="text-sm text-gray-300">
                  Recognized for outstanding achievement in digital content creation, this project showcases the perfect
                  blend of technical skill and creative vision.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Client Testimonials */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={9}
          className="rounded-lg bg-gray-900 p-8"
        >
          <h2 className="text-2xl font-semibold mb-6">Client Testimonials</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg bg-gray-800">
              <p className="italic text-gray-300 mb-4 text-sm">
                "Working with Niloy was an exceptional experience. The attention to detail and creative vision brought
                our project to life in ways we couldn't have imagined. The final video exceeded our expectations and
                helped us achieve our marketing goals."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-purple-900/50"></div>
                <div>
                  <p className="font-medium">Jane Smith</p>
                  <p className="text-sm text-gray-400">Marketing Director, Tech Company</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gray-800">
              <p className="italic text-gray-300 mb-4 text-sm">
                "The quality of work delivered was outstanding. Not only was the editing top-notch, but the
                collaborative process made the entire project enjoyable. I appreciated the clear communication and
                willingness to incorporate feedback at every stage."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-purple-900/50"></div>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-gray-400">Creative Director, Agency</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <main className="flex-1 p-6 md:p-10">
      <ProjectsContent />
    </main>
  )
}
