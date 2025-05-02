import type { Metadata } from "next"
import AboutContent from "./AboutContent"
import TestimonialSlider from "@/components/testimonial-slider"

export const metadata: Metadata = {
  title: "About | itsNiloy",
  description: "Learn about Niloy Bhowmick's experience, approach, and expertise in professional video editing",
  keywords: "Niloy Bhowmick, video editor, about, experience, skills, professional video editing",
  openGraph: {
    title: "About | itsNiloy",
    description: "Learn about Niloy Bhowmick's experience, approach, and expertise in professional video editing",
    url: "https://itsniloy.com/about",
  },
}

export default function AboutPage() {
  return (
    <main className="flex-1 p-6 md:p-10">
      <div className="container mx-auto">
        <AboutContent />

        <section aria-labelledby="client-testimonials" className="mt-16">
          <h2 id="client-testimonials" className="text-2xl font-bold mb-8">
            What Our Clients Say
          </h2>
          <TestimonialSlider />
        </section>
      </div>
    </main>
  )
}
