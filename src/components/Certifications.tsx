"use client";

import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";
import { certifications, achievements } from "@/data/profile";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="relative bg-bg-elevated py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading eyebrow="Recognition" title="Certifications & Achievements" />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-gray-400">
              <Award size={14} className="text-red" />
              Certifications
            </h3>
            <div className="flex flex-col gap-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center justify-between rounded-lg border border-border bg-bg-card p-4 transition-colors hover:border-red/40"
                >
                  <div>
                    <div className="text-sm font-semibold text-white">{cert.title}</div>
                    <div className="text-xs text-gray-400">{cert.issuer}</div>
                  </div>
                  {cert.score && (
                    <span className="rounded border border-red/40 bg-red/10 px-2.5 py-1 font-mono text-xs font-semibold text-red">
                      {cert.score}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-gray-400">
              <Trophy size={14} className="text-red" />
              Achievements
            </h3>
            <div className="flex flex-col gap-3">
              {achievements.map((ach, i) => (
                <motion.div
                  key={ach.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-lg border border-border bg-bg-card p-4 transition-colors hover:border-red/40"
                >
                  <div className="text-sm font-semibold text-white">{ach.title}</div>
                  <p className="mt-1.5 text-xs leading-relaxed text-gray-400">{ach.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
