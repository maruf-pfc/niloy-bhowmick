"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import GlassmorphismCard from "@/components/glassmorphism-card";
import {
  Linkedin,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Send,
  Phone,
} from "lucide-react";
import { RollingText } from "@/components/animate-ui/text/rolling";

const ContactPage = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (res.ok) {
      alert("Message sent!");
      form.reset(); // reset the form
    } else {
      alert("Something went wrong: " + result.error);
    }
  };
  return (
    <div className="min-h-screen py-20 px-4">
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Get In Touch
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I&apos;d love to
              hear from you. Let&apos;s create something amazing together!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <GlassmorphismCard className="p-6 w-full">
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-600 p-3 rounded-lg">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a
                        href="tel:+8801580385556"
                        className="text-white hover:text-purple-400 transition-colors"
                      >
                        +8801580385556
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a
                        href="mailto:mdmarufsarker.mms@gmail.com"
                        className="text-white hover:text-blue-400 transition-colors break-all"
                      >
                        contact.niloybhowmick@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 p-3 rounded-lg">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white">Feni, Bangladesh</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700">
                  <p className="text-gray-400 text-sm mb-4">
                    Follow me on social media
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://www.linkedin.com/in/niloy-bhowmick/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="text-white" size={20} />
                    </a>
                    <a
                      href="https://twitter.com/md_marufsarker"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-sky-500 p-2 rounded-lg hover:bg-sky-600 transition-colors"
                    >
                      <Twitter className="text-white" size={20} />
                    </a>
                    <a
                      href="https://youtube.com/@maruf_sarker"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 p-2 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <Youtube className="text-white" size={20} />
                    </a>
                  </div>
                </div>
              </GlassmorphismCard>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <GlassmorphismCard className="p-6 w-full">
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  Send a Message
                </h3>
                <form
                  method="POST"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2 text-gray-300"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2 text-gray-300"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="contact@gmail.com"
                        className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2 text-gray-300"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Email Subject"
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-gray-300"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell me about your project..."
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="outline"
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    Send Message <Send className="ml-2" size={20} />
                  </Button>
                </form>
              </GlassmorphismCard>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
