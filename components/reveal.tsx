"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/site";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function ChapterLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
      <span className="text-signal">Capitolo {number}</span>
      <span aria-hidden="true" className="h-px w-8 bg-border" />
      {children}
    </p>
  );
}
