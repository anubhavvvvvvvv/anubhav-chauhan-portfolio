"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Copy } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { contact } from "@/data/profile";
import { useToast } from "./Toast";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const { showToast } = useToast();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      showToast("Email copied to clipboard");
    } catch {
      showToast("Couldn't copy — try selecting the email manually");
    }
  };

  return (
    <section id="contact" className="relative bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-10">
        <SectionHeading eyebrow="Get In Touch" title="Let's Work Together" align="center" />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-5 max-w-xl text-center text-gray-400"
        >
          Looking for a Data Analyst intern who asks &ldquo;why&rdquo; before building the dashboard?
          I&apos;d love to hear from you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2"
        >
          <button
            onClick={copyEmail}
            className="group flex items-center gap-4 rounded-xl border border-border bg-bg-card p-5 text-left transition-colors hover:border-red/50"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red/10 text-red">
              <Mail size={19} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-gray-600">Email</span>
              <span className="block truncate text-sm font-medium text-white">{contact.email}</span>
            </span>
            <Copy size={15} className="shrink-0 text-gray-600 transition-colors group-hover:text-red" />
          </button>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-border bg-bg-card p-5 transition-colors hover:border-red/50"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red/10 text-red">
              <LinkedinIcon size={19} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-gray-600">LinkedIn</span>
              <span className="block truncate text-sm font-medium text-white">Anubhav Chauhan</span>
            </span>
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-border bg-bg-card p-5 transition-colors hover:border-red/50"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red/10 text-red">
              <GithubIcon size={19} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-gray-600">GitHub</span>
              <span className="block truncate text-sm font-medium text-white">@anubhavvvvvvvv</span>
            </span>
          </a>

          <div className="flex items-center gap-4 rounded-xl border border-border bg-bg-card p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red/10 text-red">
              <MapPin size={19} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-gray-600">Location</span>
              <span className="block truncate text-sm font-medium text-white">{contact.location}</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
