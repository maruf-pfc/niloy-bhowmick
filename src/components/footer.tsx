"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Youtube, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/maruf-pfc",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/mdmarufsarker",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/md_marufsarker",
      icon: Twitter,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@maruf_sarker",
      icon: Youtube,
    },
    {
      name: "Email",
      href: "mailto:mdmarufsarker.mms@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-gray-900/50 backdrop-blur-md border-t border-gray-700/50 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Niloy Bhowmick</h3>
            <p className="text-gray-400 text-sm">
              Passionate Video Editor and Motion Graphics Designer with a deep love for storytelling through visuals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About Me
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-1">
            Made with <Heart className="text-red-500" size={16} /> by Niloy Bhowmick © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
