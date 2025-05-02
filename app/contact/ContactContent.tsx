"use client"

import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

// Client component for animations
export function ContactContent() {
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
    <>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
      >
        Get In Touch
      </motion.h1>

      <div className="grid gap-10 md:grid-cols-2">
        <motion.div className="space-y-8" initial="hidden" animate="visible" variants={fadeIn} custom={0}>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Let's Work Together</h2>
            <p className="text-gray-300">
              Interested in working together? Fill out the form with some info about your project, and I'll get back to
              you as soon as possible. I'm always open to discussing new projects, creative ideas, or opportunities to
              be part of your vision.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <Mail className="mr-3 h-5 w-5 text-purple-400" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-gray-300">niloy@stacklearner.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="mr-3 h-5 w-5 text-purple-400" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-sm text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="mr-3 h-5 w-5 text-purple-400" />
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-sm text-gray-300">Los Angeles, CA</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Connect With Me</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-purple-900/50 hover:text-purple-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-purple-900/50 hover:text-purple-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-purple-900/50 hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-purple-900/50 hover:text-purple-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="rounded-lg bg-gray-900 p-6">
            <h3 className="font-medium mb-4">Availability</h3>
            <p className="text-gray-300 mb-4">
              I'm currently available for freelance work. My typical turnaround times are:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                Short videos (under 2 minutes): 2-3 business days
              </li>
              <li className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                Medium projects (2-5 minutes): 5-7 business days
              </li>
              <li className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-orange-500 mr-2"></span>
                Long-form content: 2-3 weeks
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.form
          className="space-y-6 rounded-lg bg-gray-900 p-6 md:p-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={1}
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Send a Message</h2>
            <p className="text-sm text-gray-300">Fill out the form below and I'll get back to you within 24 hours.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                placeholder="Your name"
                className="bg-gray-800 border-gray-700 focus-visible:ring-purple-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 focus-visible:ring-purple-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            <Input
              id="subject"
              placeholder="Project inquiry"
              className="bg-gray-800 border-gray-700 focus-visible:ring-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Tell me about your project..."
              className="min-h-[120px] bg-gray-800 border-gray-700 focus-visible:ring-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="budget" className="text-sm font-medium">
              Budget Range
            </label>
            <select
              id="budget"
              className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select a budget range</option>
              <option value="under-1000">Under $1,000</option>
              <option value="1000-3000">$1,000 - $3,000</option>
              <option value="3000-5000">$3,000 - $5,000</option>
              <option value="5000-10000">$5,000 - $10,000</option>
              <option value="over-10000">Over $10,000</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-500"
              />
              <span>I agree to the privacy policy</span>
            </label>
          </div>

          <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
            <Send className="mr-2 h-4 w-4" /> Send Message
          </Button>
        </motion.form>
      </div>

      <motion.div
        className="mt-16 rounded-lg bg-gray-900 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">What is your typical process?</h3>
            <p className="text-gray-300">
              My process typically involves an initial consultation, planning and storyboarding, a first cut for review,
              refinement based on feedback, and final delivery. I maintain clear communication throughout.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">How do you handle revisions?</h3>
            <p className="text-gray-300">
              I include two rounds of revisions in my standard packages. Additional revisions can be accommodated at an
              hourly rate. I'm committed to ensuring you're completely satisfied with the final product.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">What file formats do you deliver?</h3>
            <p className="text-gray-300">
              I can deliver in any format you need, including MP4, MOV, AVI, and more. I can also provide optimized
              versions for web, social media, or broadcast.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Do you offer rush services?</h3>
            <p className="text-gray-300">
              Yes, I offer rush services for an additional fee, depending on my current workload and the complexity of
              your project. Please inquire for availability.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  )
}
