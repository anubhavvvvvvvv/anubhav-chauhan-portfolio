"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Target } from "lucide-react";
import { aboutMe, experience } from "@/data/profile";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading eyebrow="Who I Am" title="About Me" />

        <div className="mt-14 grid gap-12 lg:grid-cols-[380px_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-sm lg:mx-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border-strong">
              <Image
                src="/images/profile/anubhav.jpg"
                alt="Anubhav Chauhan"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 380px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg border border-border-strong bg-bg/90 px-4 py-2.5 backdrop-blur">
                <span className="font-mono text-xs text-gray-400">STATUS</span>
                <span className="flex items-center gap-1.5 font-mono text-xs text-red">
                  <span className="h-1.5 w-1.5 rounded-full bg-red animate-pulse" />
                  OPEN TO WORK
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            {aboutMe.paragraphs.map((p, i) => (
              <p key={i} className="mb-5 text-base leading-relaxed text-gray-100 md:text-lg last:mb-0">
                {p}
              </p>
            ))}

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <InfoCard icon={<GraduationCap size={18} />} label="Studying" value="B.Tech, Math & Computing" />
              <InfoCard icon={<Target size={18} />} label="Focus" value="Product & Data Analytics" />
              <InfoCard icon={<Sparkles size={18} />} label="Currently" value={experience.role} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-bg-card p-4 transition-colors hover:border-red/40">
      <div className="mb-2 text-red">{icon}</div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-gray-600">{label}</div>
      <div className="mt-1 text-sm font-medium text-white">{value}</div>
    </div>
  );
}
