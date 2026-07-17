"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(align === "center" && "text-center")}
    >
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-red">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-4xl leading-none text-white sm:text-5xl md:text-6xl">
        {title}
      </h2>
      <div className={cn("mt-5 h-[3px] w-16 bg-red", align === "center" && "mx-auto")} />
    </motion.div>
  );
}
