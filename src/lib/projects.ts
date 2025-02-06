export interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  size: "small" | "wide" | "tall" | "large";
  videoUrl: string;
  client: string;
  date: string;
  description: string;
  credits: { role: string; name: string }[];
  behindTheScenes: string[];
  testimonial: {
    text: string;
    author: string;
    position: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Neon Dreams",
    category: "Music Videos",
    thumbnail: "/videos/bankai.mp4",
    size: "large",
    videoUrl: "/videos/bankai.mp4",
    client: "Electro Pulse",
    date: "2024",
    description:
      "A vibrant journey through a neon-lit cityscape, synchronized with Electro Pulse's latest hit.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "Editor", name: "Niloy Bhowmick" },
      { role: "Cinematographer", name: "Lena Rodriguez" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy captured the essence of our music in ways we never imagined possible.",
      author: "Alex Chen",
      position: "Lead Singer, Electro Pulse",
    },
  },
  {
    id: 2,
    title: "Eco Warriors",
    category: "Commercials",
    thumbnail: "/videos/bankai.mp4",
    size: "wide",
    videoUrl: "/videos/bankai.mp4",
    client: "GreenEarth Foundation",
    date: "2023",
    description:
      "A documentary showcasing grassroots environmental activists making a difference.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "Editor", name: "Niloy Bhowmick" },
      { role: "Sound Designer", name: "Maya Patel" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy's documentary brought our cause to life and inspired action.",
      author: "Dr. Emma Green",
      position: "Director, GreenEarth Foundation",
    },
  },
  {
    id: 3,
    title: "Quantum Leap",
    category: "Short Films",
    thumbnail: "/videos/bankai.mp4",
    size: "small",
    videoUrl: "/videos/bankai.mp4",
    client: "TechNova Inc.",
    date: "2024",
    description:
      "A commercial for TechNova's revolutionary quantum computer, blending CGI with live-action.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "VFX Supervisor", name: "Raj Kapoor" },
      { role: "Copywriter", name: "Sarah Johnson" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy's vision turned our technology into a visually stunning story.",
      author: "Dr. Yuki Tanaka",
      position: "CTO, TechNova Inc.",
    },
  },
  {
    id: 4,
    title: "Quantum Leap",
    category: "Documentaries",
    thumbnail: "/videos/bankai.mp4",
    size: "small",
    videoUrl: "/videos/bankai.mp4",
    client: "TechNova Inc.",
    date: "2024",
    description:
      "A commercial for TechNova's revolutionary quantum computer, blending CGI with live-action.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "VFX Supervisor", name: "Raj Kapoor" },
      { role: "Copywriter", name: "Sarah Johnson" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy's vision turned our technology into a visually stunning story.",
      author: "Dr. Yuki Tanaka",
      position: "CTO, TechNova Inc.",
    },
  },
  {
    id: 5,
    title: "Quantum Leap",
    category: "Tutorials",
    thumbnail: "/videos/bankai.mp4",
    size: "small",
    videoUrl: "/videos/bankai.mp4",
    client: "TechNova Inc.",
    date: "2024",
    description:
      "A commercial for TechNova's revolutionary quantum computer, blending CGI with live-action.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "VFX Supervisor", name: "Raj Kapoor" },
      { role: "Copywriter", name: "Sarah Johnson" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy's vision turned our technology into a visually stunning story.",
      author: "Dr. Yuki Tanaka",
      position: "CTO, TechNova Inc.",
    },
  },
  {
    id: 6,
    title: "Quantum Leap",
    category: "Blogs",
    thumbnail: "/videos/bankai.mp4",
    size: "small",
    videoUrl: "/videos/bankai.mp4",
    client: "TechNova Inc.",
    date: "2024",
    description:
      "A commercial for TechNova's revolutionary quantum computer, blending CGI with live-action.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "VFX Supervisor", name: "Raj Kapoor" },
      { role: "Copywriter", name: "Sarah Johnson" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy's vision turned our technology into a visually stunning story.",
      author: "Dr. Yuki Tanaka",
      position: "CTO, TechNova Inc.",
    },
  },
  {
    id: 7,
    title: "Quantum Leap",
    category: "Blogs",
    thumbnail: "/videos/bankai.mp4",
    size: "small",
    videoUrl: "/videos/bankai.mp4",
    client: "TechNova Inc.",
    date: "2024",
    description:
      "A commercial for TechNova's revolutionary quantum computer, blending CGI with live-action.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "VFX Supervisor", name: "Raj Kapoor" },
      { role: "Copywriter", name: "Sarah Johnson" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy's vision turned our technology into a visually stunning story.",
      author: "Dr. Yuki Tanaka",
      position: "CTO, TechNova Inc.",
    },
  },
  {
    id: 8,
    title: "Quantum Leap",
    category: "Tutorials",
    thumbnail: "/videos/bankai.mp4",
    size: "small",
    videoUrl: "/videos/bankai.mp4",
    client: "TechNova Inc.",
    date: "2024",
    description:
      "A commercial for TechNova's revolutionary quantum computer, blending CGI with live-action.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "VFX Supervisor", name: "Raj Kapoor" },
      { role: "Copywriter", name: "Sarah Johnson" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy's vision turned our technology into a visually stunning story.",
      author: "Dr. Yuki Tanaka",
      position: "CTO, TechNova Inc.",
    },
  },
  {
    id: 9,
    title: "Quantum Leap",
    category: "Documentaries",
    thumbnail: "/videos/bankai.mp4",
    size: "small",
    videoUrl: "/videos/bankai.mp4",
    client: "TechNova Inc.",
    date: "2024",
    description:
      "A commercial for TechNova's revolutionary quantum computer, blending CGI with live-action.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "VFX Supervisor", name: "Raj Kapoor" },
      { role: "Copywriter", name: "Sarah Johnson" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy's vision turned our technology into a visually stunning story.",
      author: "Dr. Yuki Tanaka",
      position: "CTO, TechNova Inc.",
    },
  },
  {
    id: 10,
    title: "Quantum Leap",
    category: "Short Films",
    thumbnail: "/videos/bankai.mp4",
    size: "small",
    videoUrl: "/videos/bankai.mp4",
    client: "TechNova Inc.",
    date: "2024",
    description:
      "A commercial for TechNova's revolutionary quantum computer, blending CGI with live-action.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "VFX Supervisor", name: "Raj Kapoor" },
      { role: "Copywriter", name: "Sarah Johnson" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy's vision turned our technology into a visually stunning story.",
      author: "Dr. Yuki Tanaka",
      position: "CTO, TechNova Inc.",
    },
  },
  {
    id: 11,
    title: "Quantum Leap",
    category: "Commercials",
    thumbnail: "/videos/bankai.mp4",
    size: "small",
    videoUrl: "/videos/bankai.mp4",
    client: "TechNova Inc.",
    date: "2024",
    description:
      "A commercial for TechNova's revolutionary quantum computer, blending CGI with live-action.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "VFX Supervisor", name: "Raj Kapoor" },
      { role: "Copywriter", name: "Sarah Johnson" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy's vision turned our technology into a visually stunning story.",
      author: "Dr. Yuki Tanaka",
      position: "CTO, TechNova Inc.",
    },
  },
  {
    id: 12,
    title: "Quantum Leap",
    category: "Music Videos",
    thumbnail: "/videos/bankai.mp4",
    size: "small",
    videoUrl: "/videos/bankai.mp4",
    client: "TechNova Inc.",
    date: "2024",
    description:
      "A commercial for TechNova's revolutionary quantum computer, blending CGI with live-action.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "VFX Supervisor", name: "Raj Kapoor" },
      { role: "Copywriter", name: "Sarah Johnson" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy's vision turned our technology into a visually stunning story.",
      author: "Dr. Yuki Tanaka",
      position: "CTO, TechNova Inc.",
    },
  },
  {
    id: 13,
    title: "Quantum Leap",
    category: "Tutorials",
    thumbnail: "/videos/bankai.mp4",
    size: "small",
    videoUrl: "/videos/bankai.mp4",
    client: "TechNova Inc.",
    date: "2024",
    description:
      "A commercial for TechNova's revolutionary quantum computer, blending CGI with live-action.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "VFX Supervisor", name: "Raj Kapoor" },
      { role: "Copywriter", name: "Sarah Johnson" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy's vision turned our technology into a visually stunning story.",
      author: "Dr. Yuki Tanaka",
      position: "CTO, TechNova Inc.",
    },
  },
  {
    id: 14,
    title: "Neon Dreams",
    category: "Music Videos",
    thumbnail: "/videos/bankai.mp4",
    size: "large",
    videoUrl: "/videos/bankai.mp4",
    client: "Electro Pulse",
    date: "2024",
    description:
      "A vibrant journey through a neon-lit cityscape, synchronized with Electro Pulse's latest hit.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "Editor", name: "Niloy Bhowmick" },
      { role: "Cinematographer", name: "Lena Rodriguez" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy captured the essence of our music in ways we never imagined possible.",
      author: "Alex Chen",
      position: "Lead Singer, Electro Pulse",
    },
  },
  {
    id: 15,
    title: "Eco Warriors",
    category: "Commercials",
    thumbnail: "/videos/bankai.mp4",
    size: "wide",
    videoUrl: "/videos/bankai.mp4",
    client: "GreenEarth Foundation",
    date: "2023",
    description:
      "A documentary showcasing grassroots environmental activists making a difference.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "Editor", name: "Niloy Bhowmick" },
      { role: "Sound Designer", name: "Maya Patel" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy's documentary brought our cause to life and inspired action.",
      author: "Dr. Emma Green",
      position: "Director, GreenEarth Foundation",
    },
  },
  {
    id: 16,
    title: "Quantum Leap",
    category: "Short Films",
    thumbnail: "/videos/bankai.mp4",
    size: "small",
    videoUrl: "/videos/bankai.mp4",
    client: "TechNova Inc.",
    date: "2024",
    description:
      "A commercial for TechNova's revolutionary quantum computer, blending CGI with live-action.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "VFX Supervisor", name: "Raj Kapoor" },
      { role: "Copywriter", name: "Sarah Johnson" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy's vision turned our technology into a visually stunning story.",
      author: "Dr. Yuki Tanaka",
      position: "CTO, TechNova Inc.",
    },
  },
  {
    id: 17,
    title: "Quantum Leap",
    category: "Documentaries",
    thumbnail: "/videos/bankai.mp4",
    size: "small",
    videoUrl: "/videos/bankai.mp4",
    client: "TechNova Inc.",
    date: "2024",
    description:
      "A commercial for TechNova's revolutionary quantum computer, blending CGI with live-action.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "VFX Supervisor", name: "Raj Kapoor" },
      { role: "Copywriter", name: "Sarah Johnson" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy's vision turned our technology into a visually stunning story.",
      author: "Dr. Yuki Tanaka",
      position: "CTO, TechNova Inc.",
    },
  },
  {
    id: 18,
    title: "Quantum Leap",
    category: "Tutorials",
    thumbnail: "/videos/bankai.mp4",
    size: "small",
    videoUrl: "/videos/bankai.mp4",
    client: "TechNova Inc.",
    date: "2024",
    description:
      "A commercial for TechNova's revolutionary quantum computer, blending CGI with live-action.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "VFX Supervisor", name: "Raj Kapoor" },
      { role: "Copywriter", name: "Sarah Johnson" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy's vision turned our technology into a visually stunning story.",
      author: "Dr. Yuki Tanaka",
      position: "CTO, TechNova Inc.",
    },
  },
  {
    id: 19,
    title: "Quantum Leap",
    category: "Blogs",
    thumbnail: "/videos/bankai.mp4",
    size: "small",
    videoUrl: "/videos/bankai.mp4",
    client: "TechNova Inc.",
    date: "2024",
    description:
      "A commercial for TechNova's revolutionary quantum computer, blending CGI with live-action.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "VFX Supervisor", name: "Raj Kapoor" },
      { role: "Copywriter", name: "Sarah Johnson" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy's vision turned our technology into a visually stunning story.",
      author: "Dr. Yuki Tanaka",
      position: "CTO, TechNova Inc.",
    },
  },
  {
    id: 20,
    title: "Quantum Leap",
    category: "Blogs",
    thumbnail: "/videos/bankai.mp4",
    size: "small",
    videoUrl: "/videos/bankai.mp4",
    client: "TechNova Inc.",
    date: "2024",
    description:
      "A commercial for TechNova's revolutionary quantum computer, blending CGI with live-action.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "VFX Supervisor", name: "Raj Kapoor" },
      { role: "Copywriter", name: "Sarah Johnson" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy's vision turned our technology into a visually stunning story.",
      author: "Dr. Yuki Tanaka",
      position: "CTO, TechNova Inc.",
    },
  },
  {
    id: 21,
    title: "Quantum Leap",
    category: "Tutorials",
    thumbnail: "/videos/bankai.mp4",
    size: "small",
    videoUrl: "/videos/bankai.mp4",
    client: "TechNova Inc.",
    date: "2024",
    description:
      "A commercial for TechNova's revolutionary quantum computer, blending CGI with live-action.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "VFX Supervisor", name: "Raj Kapoor" },
      { role: "Copywriter", name: "Sarah Johnson" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy's vision turned our technology into a visually stunning story.",
      author: "Dr. Yuki Tanaka",
      position: "CTO, TechNova Inc.",
    },
  },
  {
    id: 22,
    title: "Quantum Leap",
    category: "Documentaries",
    thumbnail: "/videos/bankai.mp4",
    size: "small",
    videoUrl: "/videos/bankai.mp4",
    client: "TechNova Inc.",
    date: "2024",
    description:
      "A commercial for TechNova's revolutionary quantum computer, blending CGI with live-action.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "VFX Supervisor", name: "Raj Kapoor" },
      { role: "Copywriter", name: "Sarah Johnson" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy's vision turned our technology into a visually stunning story.",
      author: "Dr. Yuki Tanaka",
      position: "CTO, TechNova Inc.",
    },
  },
  {
    id: 23,
    title: "Quantum Leap",
    category: "Short Films",
    thumbnail: "/videos/bankai.mp4",
    size: "small",
    videoUrl: "/videos/bankai.mp4",
    client: "TechNova Inc.",
    date: "2024",
    description:
      "A commercial for TechNova's revolutionary quantum computer, blending CGI with live-action.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "VFX Supervisor", name: "Raj Kapoor" },
      { role: "Copywriter", name: "Sarah Johnson" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy's vision turned our technology into a visually stunning story.",
      author: "Dr. Yuki Tanaka",
      position: "CTO, TechNova Inc.",
    },
  },
  {
    id: 24,
    title: "Quantum Leap",
    category: "Commercials",
    thumbnail: "/videos/bankai.mp4",
    size: "small",
    videoUrl: "/videos/bankai.mp4",
    client: "TechNova Inc.",
    date: "2024",
    description:
      "A commercial for TechNova's revolutionary quantum computer, blending CGI with live-action.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "VFX Supervisor", name: "Raj Kapoor" },
      { role: "Copywriter", name: "Sarah Johnson" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy's vision turned our technology into a visually stunning story.",
      author: "Dr. Yuki Tanaka",
      position: "CTO, TechNova Inc.",
    },
  },
  {
    id: 25,
    title: "Quantum Leap",
    category: "Music Videos",
    thumbnail: "/videos/bankai.mp4",
    size: "small",
    videoUrl: "/videos/bankai.mp4",
    client: "TechNova Inc.",
    date: "2024",
    description:
      "A commercial for TechNova's revolutionary quantum computer, blending CGI with live-action.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "VFX Supervisor", name: "Raj Kapoor" },
      { role: "Copywriter", name: "Sarah Johnson" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy's vision turned our technology into a visually stunning story.",
      author: "Dr. Yuki Tanaka",
      position: "CTO, TechNova Inc.",
    },
  },
  {
    id: 26,
    title: "Quantum Leap",
    category: "Tutorials",
    thumbnail: "/videos/bankai.mp4",
    size: "small",
    videoUrl: "/videos/bankai.mp4",
    client: "TechNova Inc.",
    date: "2024",
    description:
      "A commercial for TechNova's revolutionary quantum computer, blending CGI with live-action.",
    credits: [
      { role: "Director", name: "Niloy Bhowmick" },
      { role: "VFX Supervisor", name: "Raj Kapoor" },
      { role: "Copywriter", name: "Sarah Johnson" },
    ],
    behindTheScenes: ["/images/dummy1.jpg", "/images/dummy2.jpg"],
    testimonial: {
      text: "Niloy's vision turned our technology into a visually stunning story.",
      author: "Dr. Yuki Tanaka",
      position: "CTO, TechNova Inc.",
    },
  },
];
