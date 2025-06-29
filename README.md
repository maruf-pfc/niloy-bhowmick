# Niloy Bhowmick - Video Editor Portfolio

A modern, responsive video editor portfolio website showcasing professional video editing work, motion graphics, and client projects. Built with Next.js 15 and featuring smooth animations, YouTube integration, and a sleek glassmorphism design.

![Project Overview](./public/demo.png)

🌐 **Live Website**: [https://www.itsniloy.me](https://www.itsniloy.me)

## Features

### Core Features

- **YouTube Video Integration**: Embedded video players with click-to-play functionality
- **Glassmorphism Design**: Modern glass-like UI elements with backdrop blur effects
- **Grid Background Pattern**: Professional dark gradient background with subtle grid patterns
- **Mouse Movement Effects**: Dynamic background gradients that follow cursor movement
- **Responsive Design**: Fully responsive across all device sizes
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Jump to Top Button**: Easy navigation on all pages
- **SEO Optimized**: Comprehensive meta tags and structured data

### Pages & Sections

- **Home Page**: Video project showcase with category filtering and pagination
- **About Page**: Personal story, client showcase with animated slider, and professional stats
<!-- - **Services Page**: Detailed service offerings, pricing packages, and workflow process -->
- **Skills Page**: Technical skills, specializations, achievements, and workflow
- **Contact Page**: Professional contact form with FAQ section and client testimonials
- **Project Detail Pages**: Individual video project pages with embedded players and client feedback

### Technical Features

- **Category Filtering**: Talking Head, Shorts, Promo, Documentary, Animation, Explainer
- **Smart Pagination**: Load more functionality for "All" category, infinite scroll for filtered categories
- **YouTube API Integration**: Automatic thumbnail generation and video embedding
- **Email Integration**: Resend API for professional contact form handling
- **Client Management**: Animated client logo slider and testimonial system
- **Performance Optimized**: Next.js Image optimization and lazy loading
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom grid patterns
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Email Delivery**: Resend (Transactional Emails API)
- **Validation**: Client-side & server-side spam protection
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Package Manager**: pnpm

## Project Structure

```plaintext
📦niloy-bhowmick
 ┣ 📂public
 ┃ ┣ 📂companies
 ┃ ┣ 📂project-images
 ┃ ┣ 📂tools
 ┃ ┣ 📜demo.png
 ┃ ┣ 📜logo-transparent.png
 ┃ ┣ 📜logo-white.png
 ┃ ┣ 📜niloybhowmick.png
 ┃ ┗ 📜not-found.jpg
 ┣ 📂src
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📂_services
 ┃ ┃ ┣ 📂about
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┗ 📂send-email
 ┃ ┃ ┣ 📂contact
 ┃ ┃ ┣ 📂project
 ┃ ┃ ┣ 📂skills
 ┃ ┃ ┣ 📜favicon.ico
 ┃ ┃ ┣ 📜globals.css
 ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┣ 📜loading.tsx
 ┃ ┃ ┣ 📜not-found.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂animate-ui
 ┃ ┃ ┣ 📂ui
 ┃ ┃ ┣ 📜CTASection.tsx
 ┃ ┃ ┣ 📜email-template.tsx
 ┃ ┃ ┣ 📜footer.tsx
 ┃ ┃ ┣ 📜glassmorphism-card.tsx
 ┃ ┃ ┣ 📜intro-animation.tsx
 ┃ ┃ ┣ 📜jump-to-top.tsx
 ┃ ┃ ┣ 📜mouse-move-effect.tsx
 ┃ ┃ ┣ 📜navbar.tsx
 ┃ ┃ ┗ 📜theme-provider.tsx
 ┃ ┣ 📂db
 ┃ ┃ ┣ 📜categories.ts
 ┃ ┃ ┣ 📜clients.ts
 ┃ ┃ ┣ 📜data.ts
 ┃ ┃ ┗ 📜skills.ts
 ┃ ┣ 📂hooks
 ┃ ┃ ┗ 📜use-mobile.tsx
 ┃ ┣ 📂lib
 ┃ ┃ ┣ 📜helper.ts
 ┃ ┃ ┗ 📜utils.ts
 ┃ ┣ 📂styles
 ┃ ┗ 📂types
 ┃ ┃ ┣ 📜cta.ts
 ┃ ┃ ┗ 📜videos.ts
 ┣ 📜.dockerignore
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜Dockerfile
 ┣ 📜LICENSE
 ┣ 📜README.md
 ┣ 📜components.json
 ┣ 📜eslint.config.mjs
 ┣ 📜next-env.d.ts
 ┣ 📜next.config.ts
 ┣ 📜package.json
 ┣ 📜pnpm-lock.yaml
 ┣ 📜postcss.config.mjs
 ┗ 📜tsconfig.json
```

## Key Components

### Video Project Showcase

- Interactive video project cards with YouTube thumbnail integration
- Category-based filtering with smooth animations
- Smart pagination system (Load More for "All", infinite scroll for categories)
- Project detail pages with embedded YouTube players
- Client information and feedback display
- Project gallery with animated carousel

### Client Management System

- Animated client logo slider on about page
- Client testimonials with professional presentation
- Client information integration in project details
- Professional client showcase with company logos

### Contact & Services Integration

- Professional contact form with project type selection
- Resend API integration for email delivery
- Service packages with detailed pricing
- FAQ section with common questions
- Professional workflow presentation

### Skills & Expertise Display

- Technical skills with proficiency levels
- Video editing specializations showcase
- Professional achievements and statistics
- Workflow process visualization
- Software proficiency indicators

## Video Categories

The portfolio supports the following video categories:

- **Talking Head**: Professional talking head videos with clean editing and color grading
- **Shorts**: Viral short-form content optimized for social media platforms
- **Promo**: Promotional videos for brands, products, and services
- **Documentary**: Long-form documentary style content with storytelling
- **Animation**: Logo animations, motion graphics, and animated titles
- **Explainer**: Educational and explainer videos with visual elements

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm package manager

### Installation

1. **Clone the repository**

```shellscript
git clone https://github.com/maruf-pfc/niloy-bhowmick.git
cd niloy-bhowmick
```

2. **Install dependencies**

```shellscript
pnpm install
```

3. **Set up environment variables**

```shellscript
cp .env.example .env
```

Add your environment variables:

```plaintext
RESEND_API_KEY=your_resend_api_key_here
NEXT_PUBLIC_SITE_URL=https://www.itsniloy.me
```

4. **Run the development server**

```shellscript
pnpm dev
```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```shellscript
pnpm build
pnpm start
```

## Customization

### Adding New Video Projects

Edit the video projects data in `lib/data.ts`:

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

### Styling Customization

- **Grid Patterns**: Modify grid classes in `app/globals.css`
- **Colors**: Update Tailwind config in `tailwind.config.ts`
- **Glassmorphism**: Adjust opacity and blur in `components/glassmorphism-card.tsx`
- **Animations**: Customize Framer Motion animations in respective components

### Contact Form Setup

1. **Get Resend API Key**: Sign up at [resend.com](https://resend.com)
2. **Add to Environment**: Update `.env.local` with your API key
3. **Configure Email**: Update sender/receiver emails in contact form handler

## Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Key responsive features:

- Mobile-first design approach
- Touch-friendly video controls and navigation
- Responsive grid layouts with proper spacing
- Optimized typography scaling across devices
- Mobile-optimized contact forms and interactions

## Performance Optimizations

- **Next.js Image Optimization**: Automatic image optimization and lazy loading
- **YouTube Thumbnail Loading**: Optimized thumbnail loading from YouTube API
- **Code Splitting**: Automatic code splitting with Next.js App Router
- **Static Generation**: Pre-rendered pages for better performance
- **Efficient Animations**: Hardware-accelerated CSS transforms
- **Optimized Fonts**: Google Fonts optimization with Next.js
- **CSS Grid Patterns**: Lightweight CSS-based background patterns

## Development

### Adding New Pages

1. Create new page in `app/` directory
2. Add route to navigation in `components/navbar.tsx`
3. Update data functions in `lib/data.ts` if needed
4. Add to footer quick links in `components/footer.tsx`

### Component Development

- Use TypeScript for type safety
- Follow the existing glassmorphism design patterns
- Implement responsive design with Tailwind CSS
- Add proper accessibility attributes
- Include Framer Motion animations for consistency

## Contact Integration

The contact form uses Resend for email delivery:

- **Spam Protection**: Client and server-side validation
- **Professional Templates**: Styled email templates
- **Error Handling**: Comprehensive error handling and user feedback
- **Success Notifications**: Toast notifications for form submissions

To implement actual email functionality:

1. Add a form handler API route in `app/api/contact/route.ts`
2. Integrate with Resend email service
3. Add form validation and error handling
4. Implement success/error notifications

## Features in Detail

### Video Project Management

- **YouTube Integration**: Automatic thumbnail generation and video embedding
- **Category Filtering**: Smooth transitions between video categories
- **Smart Pagination**: Load More button for "All" category, infinite scroll for others
- **Project Details**: Comprehensive project pages with galleries and client feedback
- **Client Showcase**: Professional client information and testimonials

### Professional Services Display

<!-- - **Service Packages**: Basic ($50-100), Professional ($150-300), Premium ($400-800) -->
- **Workflow Process**: 6-step process from consultation to delivery
- **Skills Showcase**: Technical proficiency with progress indicators
- **Achievement Display**: Professional statistics and client ratings

### Contact & Communication

- **Contact Form**: Project type selection and detailed requirements
- **FAQ Section**: Common questions and professional answers
- **Quick Response**: Professional email templates with fast delivery
- **Client Testimonials**: Integrated feedback system throughout the site

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard:

```plaintext
RESEND_API_KEY=your_production_resend_key
NEXT_PUBLIC_SITE_URL=https://www.itsniloy.me
```

4. Deploy automatically

### Other Platforms

- **Netlify**: Static site deployment with form handling
- **AWS Amplify**: Full-stack deployment with API integration
- **GitHub Pages**: Static deployment (limited functionality)

## Security Considerations

- **Environment Variables**: Secure API keys and tokens
- **External Links**: Proper `rel="noopener noreferrer"` attributes
- **Input Validation**: Sanitized form inputs and spam protection
- **HTTPS**: Enforced secure connections
- **Content Security Policy**: Implemented CSP headers

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [Apache License](LICENSE).

## ‍ About Niloy Bhowmick

**Professional Video Editor & Motion Graphics Designer**

- 🎬 Specializing in YouTube content, social media videos, and corporate projects
- 🎨 Expert in DaVinci Resolve, Premiere Pro, and After Effects
- 📈 7+ successful projects with 5-star client ratings
- ⚡ Fast turnaround times with professional quality
- 🌍 Available for both short-term and long-term projects

### Professional Experience

- **Freelance Video Editor** - 3+ years of professional experience
- **YouTube Content Creator** - Educational and entertainment content
- **Corporate Video Producer** - Brand videos and promotional content
- **Social Media Specialist** - Short-form content optimization

### Technical Skills

- **Video Editing**: DaVinci Resolve, Premiere Pro, Final Cut Pro
- **Motion Graphics**: After Effects, Cinema 4D
- **Audio Editing**: Audition, Pro Tools
- **Design**: Photoshop, Illustrator
- **Color Grading**: Professional color correction and cinematic grading

### Services Offered

- **YouTube Video Editing**: Complete post-production for YouTube creators
- **Social Media Content**: Short-form content for Instagram, TikTok, Facebook
- **Corporate Videos**: Professional corporate and promotional content
- **Educational Content**: Course videos, tutorials, and explainer videos
- **Motion Graphics**: Logo animations, lower thirds, and animated titles
- **Color Grading**: Professional color correction and cinematic grading

### Client Testimonials

- **Stack Learner**: "Niloy delivered exceptional work with perfect color grading and professional editing."
- **Edu Bridge Academy**: "Incredible promotional video that exceeded our expectations."
- **EcoRevolution**: "Masterful storytelling through video editing with perfect flow."

### Contact Information

- **Website**: [https://www.itsniloy.me](https://www.itsniloy.me)
- **Email**: [contact.niloybhowmick@gmail.com](contact.niloybhowmick@gmail.com)
- **Response Time**: Within 24 hours
- **Availability**: Flexible with time zones and deadlines

---

Built with ❤️ using Next.js 15, TypeScript, Tailwind CSS, and modern web technologies.
