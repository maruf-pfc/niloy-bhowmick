# Niloy Bhowmick

<div align="center">

![Project Banner](./public/demo.png)

### Midnight Liquid Glass Portfolio
*A premium, responsive video editing portfolio built with modern web technologies.*

[![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

[**🌐 Live Website**](https://www.itsniloy.me)

</div>

## ✨ Design Philosophy: Midnight Liquid Glass

This project implements a unique **"Midnight Liquid Glass"** aesthetic, focusing on deep blacks, neon accents, and organic fluidity.

-   **Frosted Glass 2.0**: Premium `backdrop-blur-3xl` with milky-white tint for distinct separation.
-   **Unified Liquid Navigation**: A shapeshifting navbar that fluidly expands to contain mobile menus.
-   **Dynamic Interactions**: Mouse-following gradients and spotlight effects.
-   **YouTube Integration**: Custom light-weight players with high-quality playback enforcement.

## 🚀 Getting Started

### Prerequisites
- Node.js 22+
- pnpm

### Quick Start

```bash
# 1. Clone
git clone https://github.com/maruf-pfc/niloy-bhowmick.git
cd niloy-bhowmick

# 2. Install
pnpm install

# 3. Configure
cp .env.example .env
# Set RESEND_API_KEY and NEXT_PUBLIC_SITE_URL

# 4. Run
pnpm dev
```

## 📂 Project Structure

```plaintext
📦src
 ┣ 📂app           # Next.js App Router pages
 ┣ 📂components    # Shadcn UI & Custom Glass Components
 ┣ 📂db            # Static Data (Projects, Clients)
 ┣ 📂hooks         # Custom Hooks (use-mobile)
 ┗ 📂lib           # Utilities & Helpers
```

### 📝 Adding New Video Projects

To add a new project, simply edit `src/lib/data.ts`. No new code required!

```typescript
export const videoProjectsData = {
  "Talking Head": [
    {
      id: "unique-video-id",
      video_title: "Your Video Title",
      video_description: "Detailed description...",
      tags: ["Tag1", "Tag2"],
      cover_image: "youtube-video-id",
      publish_date: "2024-01-01",
      client_name: "Client Name",
      client_image: "/companies/client-logo.png",
      client_feedback: "Client testimonial...",
      video_link: "https://youtu.be/video-id",
      project_images: ["/path/to/image1.jpg"],
      category: "Talking Head",
      duration: "5:30",
      software_used: ["DaVinci Resolve", "After Effects"],
    },
  ],
};
```

## 🛠️ Tech Stack

-   **Core**: Next.js 15, TypeScript
-   **Styling**: Tailwind CSS, Shadcn/ui
-   **Animation**: Framer Motion
-   **Backend**: Resend (Email), Server Actions

---

<div align="center">

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=maruf-pfc/niloy-bhowmick&type=Date)](https://star-history.com/#maruf-pfc/niloy-bhowmick&Date)

</div>
