"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Award, Clock, Film, Heart, Lightbulb, Users } from "lucide-react"

// Client component for animations
function AboutContent() {
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
    <div className="mx-auto max-w-4xl">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
      >
        About Me
      </motion.h1>

      <div className="space-y-12">
        <motion.div
          className="flex flex-col md:flex-row gap-8 items-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={0}
        >
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-purple-500">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pORtWqG1c8FcM65O2Nv8c3KxF4K6i8.png"
                alt="Niloy Bhowmick"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold">Niloy Bhowmick</h2>
            <p className="text-xl text-gray-300">Professional Video Editor & Motion Designer</p>
            <p className="text-gray-300">
              With over 8 years of experience in video editing and motion graphics, I've worked with clients ranging
              from startups to Fortune 500 companies. My passion lies in creating compelling visual stories that engage
              audiences and deliver results.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="rounded-full bg-purple-900/50 px-3 py-1 text-sm text-purple-300">
                Adobe Premiere Pro
              </span>
              <span className="rounded-full bg-purple-900/50 px-3 py-1 text-sm text-purple-300">After Effects</span>
              <span className="rounded-full bg-purple-900/50 px-3 py-1 text-sm text-purple-300">DaVinci Resolve</span>
              <span className="rounded-full bg-purple-900/50 px-3 py-1 text-sm text-purple-300">Final Cut Pro</span>
            </div>
          </div>
        </motion.div>

        <motion.section
          className="rounded-lg bg-gray-900 p-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={1}
        >
          <h2 className="text-2xl font-semibold mb-6">My Story</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              My journey into video editing began in college where I discovered my passion for visual storytelling. What
              started as a hobby quickly evolved into a career as I honed my skills and built a portfolio of work.
            </p>
            <p>
              After graduating with a degree in Film and Media Studies, I worked at a production company where I learned
              the ins and outs of professional video editing. I then moved on to freelance work, which allowed me to
              collaborate with a diverse range of clients and projects.
            </p>
            <p>
              Today, I specialize in creating high-quality video content for businesses and individuals who want to make
              an impact with their visual communication. My approach combines technical expertise with creative vision
              to deliver videos that not only look great but also achieve their intended purpose.
            </p>
          </div>
        </motion.section>

        <motion.section
          className="rounded-lg bg-gray-900 p-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={2}
        >
          <h2 className="text-2xl font-semibold mb-6">My Approach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-900/50 text-purple-400">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium">Creative Vision</h3>
              <p className="text-gray-300">
                I believe that great video editing is about more than just technical skills—it's about understanding the
                story you want to tell and finding the most effective way to tell it.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-900/50 text-purple-400">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium">Collaborative Process</h3>
              <p className="text-gray-300">
                I work closely with clients to understand their vision and bring it to life through thoughtful editing,
                motion design, and sound design.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-900/50 text-purple-400">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium">Attention to Detail</h3>
              <p className="text-gray-300">
                The difference between good and great often lies in the details. I pay close attention to every aspect
                of the editing process to ensure a polished final product.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="rounded-lg bg-gray-900 p-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={3}
        >
          <h2 className="text-2xl font-semibold mb-6">My Process</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900/50 text-purple-400 mt-1">
                <span className="text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">Consultation</h3>
                <p className="text-gray-300">
                  We begin with a thorough consultation to understand your goals, target audience, and vision for the
                  project. This helps me align my creative approach with your objectives.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900/50 text-purple-400 mt-1">
                <span className="text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">Planning & Storyboarding</h3>
                <p className="text-gray-300">
                  I create a detailed plan for your video, including storyboards if necessary, to map out the structure,
                  pacing, and key moments before diving into the editing process.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900/50 text-purple-400 mt-1">
                <span className="text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">First Cut</h3>
                <p className="text-gray-300">
                  I develop an initial edit that establishes the basic structure and pacing of your video, giving you a
                  first look at how the final product will flow.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900/50 text-purple-400 mt-1">
                <span className="text-sm font-bold">4</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">Refinement</h3>
                <p className="text-gray-300">
                  Based on your feedback, I refine the edit and add motion graphics, sound design, color grading, and
                  other elements to enhance the visual and auditory experience.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900/50 text-purple-400 mt-1">
                <span className="text-sm font-bold">5</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">Final Delivery</h3>
                <p className="text-gray-300">
                  After final approval, I deliver your video in your preferred format and resolution, ready for
                  distribution across your chosen platforms.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="rounded-lg bg-gray-900 p-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={4}
        >
          <h2 className="text-2xl font-semibold mb-6">Experience & Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-900/50 text-purple-400">
                <Film className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium">500+ Projects Completed</h3>
              <p className="text-gray-300">
                Over the years, I've successfully completed more than 500 video projects across various industries and
                formats, from short commercials to feature-length documentaries.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-900/50 text-purple-400">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium">Award-Winning Work</h3>
              <p className="text-gray-300">
                My work has been recognized with several industry awards, including Best Editing at the Regional Film
                Festival and the Digital Content Excellence Award.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-900/50 text-purple-400">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium">100+ Satisfied Clients</h3>
              <p className="text-gray-300">
                I've had the pleasure of working with over 100 satisfied clients, many of whom return for multiple
                projects due to the quality and reliability of my work.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-900/50 text-purple-400">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium">8+ Years of Experience</h3>
              <p className="text-gray-300">
                With more than 8 years of professional experience, I've developed a deep understanding of video editing
                techniques, trends, and technologies.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default AboutContent
