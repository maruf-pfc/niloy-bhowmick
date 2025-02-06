"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Youtube,
  Clock,
  Users,
  Video,
} from "lucide-react";
import { sendEmail } from "@/lib/send-email";

const services = [
  {
    icon: Video,
    title: "Video Editing",
    description:
      "Professional video editing with attention to detail and creative storytelling.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Work closely with clients to achieve their vision and exceed expectations.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Fast delivery without compromising on quality.",
  },
];

const achievements = [
  { number: "100+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "10+", label: "Awards Won" },
];

const faqs = [
  {
    question: "What is your typical turnaround time?",
    answer:
      "Turnaround time varies depending on the project scope. Simple edits can be completed in 24-48 hours, while complex projects may take 1-2 weeks.",
  },
  {
    question: "What formats do you work with?",
    answer:
      "I work with all major video formats including 4K, HD, and various aspect ratios. I can deliver in any format you need.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes, I offer up to 3 rounds of revisions to ensure you're completely satisfied with the final product.",
  },
];

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (formStatus === "success" || formStatus === "error") {
      const timer = setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  //   async function handleSubmit(formData: FormData) {
  //     setFormStatus("submitting");
  //     const result = await sendEmail(formData);
  //     setFormStatus(result.success ? "success" : "error");
  //   }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent default form submission

    setFormStatus("submitting");

    const formData = new FormData(event.currentTarget); // Extract form data from form element

    const result = await sendEmail(formData); // Send the form data

    setFormStatus(result.success ? "success" : "error");
  }

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-5xl font-bold text-white">
            Let's Create Something Amazing
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            I'm always excited to collaborate on new projects and bring creative
            visions to life through the power of video editing.
          </p>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Services Offered
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="rounded-xl bg-white/5 p-6 backdrop-blur"
              >
                <service.icon className="mb-4 h-8 w-8 text-white" />
                <h3 className="mb-2 text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-white/60">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid gap-8 md:grid-cols-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white">
                  {achievement.number}
                </div>
                <div className="text-white/60">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Grid */}
        <div className="mb-16 grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white">
                Get in Touch
              </h2>
              <p className="text-lg text-white/60">
                Ready to start your next project? Contact me for a free
                consultation.
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:contact@niloybhowmick.com"
                className="flex items-center space-x-4 rounded-lg bg-white/5 p-4 transition-colors hover:bg-white/10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="h-6 w-6 text-white" />
                <span className="text-white">contact@niloybhowmick.com</span>
              </motion.a>

              <motion.a
                href="tel:+1234567890"
                className="flex items-center space-x-4 rounded-lg bg-white/5 p-4 transition-colors hover:bg-white/10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="h-6 w-6 text-white" />
                <span className="text-white">+1 (234) 567-890</span>
              </motion.a>

              <motion.div
                className="flex items-center space-x-4 rounded-lg bg-white/5 p-4"
                whileHover={{ scale: 1.02 }}
              >
                <MapPin className="h-6 w-6 text-white" />
                <span className="text-white">New York, NY</span>
              </motion.div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Follow Me</h3>
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Youtube, href: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="rounded-full bg-white/5 p-3 transition-colors hover:bg-white/10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="h-6 w-6 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl bg-white/5 p-8 backdrop-blur"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/30 backdrop-blur focus:border-white/20 focus:outline-none focus:ring-0"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/30 backdrop-blur focus:border-white/20 focus:outline-none focus:ring-0"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-white"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  className="mt-1 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/30 backdrop-blur focus:border-white/20 focus:outline-none focus:ring-0"
                >
                  <option value="">Select a project type</option>
                  <option value="music-video">Music Video</option>
                  <option value="commercial">Commercial</option>
                  <option value="short-film">Short Film</option>
                  <option value="documentary">Documentary</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/30 backdrop-blur focus:border-white/20 focus:outline-none focus:ring-0"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full rounded-lg bg-white px-6 py-3 text-center font-medium text-black transition-colors hover:bg-white/90 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formStatus === "submitting" ? "Sending..." : "Send Message"}
              </motion.button>

              <AnimatePresence mode="wait">
                {formStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="text-center text-green-400"
                  >
                    Message sent successfully!
                  </motion.p>
                )}

                {formStatus === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="text-center text-red-400"
                  >
                    There was an error sending your message. Please try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="rounded-xl bg-white/5 p-6 backdrop-blur"
              >
                <h3 className="mb-2 text-xl font-bold text-white">
                  {faq.question}
                </h3>
                <p className="text-white/60">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
