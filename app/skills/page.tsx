import type { Metadata } from "next"
import { Film, Scissors, Palette, Music, Layers, Camera, Zap, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Skills | itsNiloy",
  description: "Explore Niloy Bhowmick's video editing skills and technical expertise",
  keywords: "video editing skills, technical expertise, motion graphics, color grading, Niloy Bhowmick",
  openGraph: {
    title: "Skills | itsNiloy",
    description: "Explore Niloy Bhowmick's video editing skills and technical expertise",
    url: "https://itsniloy.com/skills",
  },
}

const skills = [
  {
    title: "Video Editing",
    description: "Expert in Adobe Premiere Pro and Final Cut Pro with a focus on narrative storytelling and pacing.",
    icon: Scissors,
  },
  {
    title: "Motion Graphics",
    description: "Creating dynamic animations and visual effects using After Effects and Cinema 4D.",
    icon: Layers,
  },
  {
    title: "Color Grading",
    description: "Enhancing visual aesthetics through professional color correction and grading.",
    icon: Palette,
  },
  {
    title: "Sound Design",
    description: "Crafting immersive audio experiences with custom sound effects and music selection.",
    icon: Music,
  },
  {
    title: "Cinematography",
    description: "Understanding of camera techniques and visual composition for better editing decisions.",
    icon: Camera,
  },
  {
    title: "Storytelling",
    description: "Ability to structure content for maximum emotional impact and audience engagement.",
    icon: Film,
  },
  {
    title: "Quick Turnaround",
    description: "Efficient workflows that allow for rapid delivery without sacrificing quality.",
    icon: Clock,
  },
  {
    title: "Technical Problem Solving",
    description: "Finding creative solutions to technical challenges in post-production.",
    icon: Zap,
  },
]

export default function SkillsPage() {
  return (
    <main className="flex-1 p-6 md:p-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div key={index} className="rounded-lg bg-gray-900 p-6 transition-transform hover:translate-y-[-4px]">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-900/50 text-purple-400">
                <skill.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{skill.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
