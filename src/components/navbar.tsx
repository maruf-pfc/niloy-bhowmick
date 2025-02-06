"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-40 w-full bg-black/50 backdrop-blur-sm"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-xl font-bold text-white">
          Logo
        </Link>
        <Link href="/" className="text-xl font-light text-white">
          Niloy Bhowmick
        </Link>
        <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-white/90">
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </motion.nav>
  );
}
