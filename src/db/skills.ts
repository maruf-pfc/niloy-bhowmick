import {
  Award,
  Camera,
  Film,
  Palette,
  Scissors,
  Sparkles,
  Users,
  Volume2,
  Zap,
} from "lucide-react";

export const videoEditingSkills = [
  {
    name: "DaVinci Resolve",
    image_link: "/tools/DaVinci_Resolve_Studio.png",
    icon: Film,
    description:
      "Professional color grading, editing, and audio post-production",
    color: "text-orange-400",
  },
  {
    name: "Adobe Premiere Pro",
    image_link: "/tools/Adobe_Premiere_Pro_CC.png",
    icon: Scissors,
    description:
      "Advanced video editing, multicam sync, and workflow optimization",
    color: "text-purple-400",
  },
  {
    name: "After Effects",
    image_link: "/tools/Adobe_After_Effects_CC.png",
    icon: Sparkles,
    description: "Motion graphics, visual effects, and advanced animations",
    color: "text-blue-400",
  },
  {
    name: "Adobe Photoshop",
    image_link: "/tools/Adobe_Photoshop_CC.png",
    icon: Palette,
    description: "Thumbnail design, graphics creation, and image manipulation",
    color: "text-cyan-400",
  },
  {
    name: "Adobe Audition",
    image_link: "/tools/Adobe_Audition_CC.png",
    icon: Volume2,
    description: "Audio editing, noise reduction, and sound enhancement",
    color: "text-green-400",
  },
];

export const specializations = [
  {
    title: "YouTube Content Creation",
    skills: [
      "Retention Editing",
      "Thumbnail Design",
      "SEO Optimization",
      "Analytics Understanding",
    ],
    icon: "🎬",
    description:
      "Specialized in creating engaging YouTube content that keeps viewers watching",
  },
  {
    title: "Social Media Videos",
    skills: [
      "Short-form Content",
      "Vertical Video",
      "Platform Optimization",
      "Viral Techniques",
    ],
    icon: "📱",
    description:
      "Expert in creating content optimized for Instagram, TikTok, and other platforms",
  },
  {
    title: "Corporate Videos",
    skills: [
      "Professional Presentation",
      "Brand Consistency",
      "Clean Aesthetics",
      "Message Clarity",
    ],
    icon: "🏢",
    description:
      "Creating polished corporate content that communicates effectively",
  },
  {
    title: "Educational Content",
    skills: [
      "Screen Recording",
      "Tutorial Structure",
      "Clear Explanations",
      "Interactive Elements",
    ],
    icon: "📚",
    description:
      "Specialized in making complex topics easy to understand through video",
  },
  {
    title: "Motion Graphics",
    skills: [
      "2D Animation",
      "Logo Animation",
      "Lower Thirds",
      "Kinetic Typography",
    ],
    icon: "✨",
    description: "Creating eye-catching animations that enhance storytelling",
  },
  {
    title: "Color Grading",
    skills: [
      "Cinematic Looks",
      "Color Matching",
      "Mood Creation",
      "Technical Correction",
    ],
    icon: "🎨",
    description:
      "Professional color work that gives videos a polished, cinematic feel",
  },
];

export const achievements = [
  {
    title: "50+ Projects Completed",
    description:
      "Successfully delivered over 100 video projects across various industries",
    icon: Award,
    color: "text-yellow-400",
  },
  {
    title: "Happy Clients",
    description:
      "Built strong client relationships with positive feedback and lasting partnerships",
    icon: Users,
    color: "text-green-400",
  },
  {
    title: "3+ Years Experience",
    description:
      "Professional video editing experience with continuous skill development",
    icon: Camera,
    color: "text-blue-400",
  },
  {
    title: "Fast Turnaround",
    description:
      "Known for delivering high-quality work within tight deadlines",
    icon: Zap,
    color: "text-purple-400",
  },
];

export const workflow = [
  {
    step: "01",
    title: "Project Analysis",
    description:
      "Understanding client requirements, target audience, and project goals",
  },
  {
    step: "02",
    title: "Content Review",
    description:
      "Analyzing raw footage, identifying key moments, and planning the edit",
  },
  {
    step: "03",
    title: "Rough Cut",
    description:
      "Creating initial edit with basic cuts, transitions, and structure",
  },
  {
    step: "04",
    title: "Fine Tuning",
    description:
      "Adding graphics, color grading, audio enhancement, and effects",
  },
  {
    step: "05",
    title: "Client Review",
    description: "Presenting the work for feedback and implementing revisions",
  },
  {
    step: "06",
    title: "Final Delivery",
    description:
      "Exporting in required formats and delivering the completed project",
  },
];
