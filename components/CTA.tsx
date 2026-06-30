"use client";

import { motion } from "framer-motion";
import { LINE_URL } from "@/lib/products";

export default function CTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="glow-ring relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-steel to-carbon px-6 py-16 text-center sm:px-12 sm:py-24"
        style={{ ["--glow" as string]: "#3FA9F5" } as React.CSSProperties}
      >
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-navy-glow/20 blur-3xl" />
        <p className="mono-label mb-5 text-[11px] text-navy-glow">◈ Specify with confidence</p>
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">
          Uncompromised performance, when it matters most.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/60">
          Talk to BIG ONE ELECTRIC directly. Get specs, pricing and lead times
          for any colour and size — fast.
        </p>
        <p className="font-thai mt-2 text-sm text-white/35">
          ปรึกษาทีมงานโดยตรงผ่าน LINE
        </p>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-signal-green px-8 py-4 text-base font-bold text-black transition-transform hover:scale-[1.03] hover:shadow-[0_0_36px_rgba(24,201,166,0.6)]"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-black/70" />
          Add LINE — Contact us
        </a>
      </motion.div>
    </section>
  );
}
