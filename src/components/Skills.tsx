"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative bg-bg-elevated py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading eyebrow="Toolkit" title="Skills" />

        <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: gi * 0.05 }}
            >
              <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-gray-400">
                {group.category}
              </h3>
              <div className="flex flex-col gap-5">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-baseline justify-between">
                      <span className="text-sm font-medium text-white">{skill.name}</span>
                      <span className="font-mono text-xs text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.15 + si * 0.06 }}
                        className="h-full rounded-full bg-gradient-to-r from-red-dark to-red"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
