"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import { contact } from "@/data/profile";

export default function ResumeSection() {
  return (
    <section className="relative overflow-hidden bg-bg-elevated py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,9,20,0.1),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-red/40 bg-red/10 text-red">
            <FileText size={24} />
          </div>
          <h2 className="font-display text-4xl text-white sm:text-5xl">Want the Full Story?</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Get the complete breakdown of my education, experience, and technical skills in one PDF —
            ready to share with your team.
          </p>
          <a
            href={contact.resumeUrl}
            download
            className="mt-8 inline-flex items-center gap-2 rounded bg-red px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-105 hover:bg-red-dark"
          >
            <Download size={18} />
            Download Resume (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
}
