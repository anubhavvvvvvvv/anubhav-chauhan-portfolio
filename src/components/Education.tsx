"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education, experience, positionOfResponsibility } from "@/data/profile";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading eyebrow="Background" title="Education & Experience" />

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-gray-400">
              <GraduationCap size={14} className="text-red" />
              Education
            </h3>
            <div className="relative flex flex-col gap-6 border-l border-border pl-6">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.course}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-red bg-bg" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-semibold text-white">{edu.course}</h4>
                    <span className="font-mono text-xs text-gray-600">{edu.year}</span>
                  </div>
                  <p className="text-sm text-gray-400">{edu.institution}</p>
                  <span className="mt-1.5 inline-block rounded border border-red/40 bg-red/10 px-2 py-0.5 font-mono text-[11px] text-red">
                    {edu.metricLabel}: {edu.metric}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-gray-400">
                Experience
              </h3>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
                className="rounded-lg border border-border bg-bg-card p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-semibold text-white">{experience.role}</h4>
                  <span className="font-mono text-xs text-gray-600">{experience.duration}</span>
                </div>
                <p className="mb-3 text-sm text-gray-400">{experience.organization}</p>
                <ul className="flex flex-col gap-2">
                  {experience.points.map((pt, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-100">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div>
              <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-gray-400">
                Leadership
              </h3>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-lg border border-border bg-bg-card p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-semibold text-white">{positionOfResponsibility.role}</h4>
                  <span className="font-mono text-xs text-gray-600">{positionOfResponsibility.duration}</span>
                </div>
                <p className="mb-3 text-sm text-gray-400">{positionOfResponsibility.organization}</p>
                <ul className="flex flex-col gap-2">
                  {positionOfResponsibility.points.map((pt, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-100">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
