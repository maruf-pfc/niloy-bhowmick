"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Jane Smith",
    role: "Marketing Director, TechCorp Inc.",
    content:
      "Working with Niloy was an exceptional experience. The attention to detail and creative vision brought our project to life in ways we couldn't have imagined. The final video exceeded our expectations and helped us achieve our marketing goals.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Michael Johnson",
    role: "Creative Director, Design Studio",
    content:
      "I've worked with many video editors over the years, but Niloy stands out for his technical expertise and artistic sensibility. He understood our brand vision immediately and delivered a video that perfectly captured our essence.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "CEO, Startup Ventures",
    content:
      "The quality of work and professionalism exceeded our expectations. Our product launch video received tremendous feedback from our customers and investors alike. I highly recommend Niloy for any business looking to elevate their video content.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <div className="relative overflow-hidden rounded-lg bg-gray-900 p-6 md:p-8">
      <div className="absolute top-6 right-6 text-purple-400">
        <Quote className="h-8 w-8 md:h-10 md:w-10 opacity-50" />
      </div>

      <div className="relative h-[200px] md:h-[180px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <blockquote className="mb-4 text-gray-300 italic text-sm md:text-base">
              {testimonials[current].content}
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={testimonials[current].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-sm md:text-base">{testimonials[current].name}</p>
                <p className="text-xs md:text-sm text-gray-400">{testimonials[current].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex justify-between">
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoplay(false)
                setCurrent(index)
              }}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === current ? "bg-purple-500" : "bg-gray-700 hover:bg-gray-600"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={prev} className="rounded-full p-2 hover:bg-gray-800" aria-label="Previous testimonial">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={next} className="rounded-full p-2 hover:bg-gray-800" aria-label="Next testimonial">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
