"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Mail, ChevronDown } from "lucide-react";
import { contact } from "@/data/profile";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-bg"
    >
      {/* Backdrop image */}
      <div className="absolute inset-0">
        <Image
          src="/images/profile/hero-cinematic.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[center_20%] opacity-45 md:opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(229,9,20,0.12),transparent_55%)]" />
      </div>

      {/* Ambient floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-red/60"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            animate={{
              y: [0, -18, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 md:px-10"
      >
        <motion.div
          variants={item}
          className="mb-5 inline-flex items-center gap-2 rounded border border-red/40 bg-red/10 px-3 py-1.5 font-mono text-xs tracking-widest text-red uppercase"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-red animate-pulse" />
          Open to Data Analyst Internships
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-[16vw] leading-[0.92] text-white sm:text-7xl md:text-8xl lg:text-[8.5rem]"
        >
          ANUBHAV
          <br />
          <span className="text-red">CHAUHAN</span>
        </motion.h1>

        <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-3">
          <span className="rounded border border-border-strong bg-bg-card/80 px-3 py-1 font-mono text-xs text-gray-100 backdrop-blur">
            DATA ANALYST
          </span>
          <span className="rounded border border-border-strong bg-bg-card/80 px-3 py-1 font-mono text-xs text-gray-100 backdrop-blur">
            SQL &middot; PYTHON &middot; TABLEAU
          </span>
          <span className="flex items-center gap-1.5 rounded border border-red/50 bg-red/10 px-3 py-1 font-mono text-xs text-red">
            98% MATCH FOR DATA ROLES
          </span>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-relaxed text-gray-100 md:text-lg"
        >
          I turn messy business data into decisions people can act on — from
          uncovering <span className="text-white font-medium">$4.35M</span> in
          loss-making sales to building a Tableau dashboard behind{" "}
          <span className="text-white font-medium">₹986M+</span> in revenue.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={contact.resumeUrl}
            download
            className="group flex items-center gap-2 rounded bg-white px-6 py-3.5 text-sm font-bold text-bg transition-all hover:bg-gray-100 hover:scale-105"
          >
            <Play size={18} fill="currentColor" />
            View Resume
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded border border-border-strong bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition-all hover:bg-white/20 hover:scale-105"
          >
            <Mail size={17} />
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gray-400 transition-colors hover:text-red"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
