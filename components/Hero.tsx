"use client";

import { motion } from "framer-motion";
import Beacon from "./Beacon";
import { colorways, LINE_URL } from "@/lib/products";

const amber = colorways[0];

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 sm:pt-24"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-6">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <motion.p
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mono-label mb-5 text-[11px] text-navy-glow"
          >
            ◈ Rotary Warning Light System
          </motion.p>

          <motion.h1
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Engineered for{" "}
            <span className="text-signal-amber neon" style={{ ["--glow" as string]: amber.glow }}>
              Absolute Safety
            </span>
            .
          </motion.h1>

          <motion.p
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg"
          >
            Re-imagining the future of warning systems. The{" "}
            <span className="text-white">BIG ONE ELECTRIC</span> rotary beacon
            turns industrial safety into high-tech precision — relentless,
            adaptive, and impossible to ignore.
          </motion.p>

          <motion.p
            custom={2.5}
            variants={fade}
            initial="hidden"
            animate="show"
            className="font-thai mt-2 text-sm text-white/40"
          >
            ไฟหมุนเตือนภัย LED — ออกแบบเพื่อความปลอดภัยสูงสุด
          </motion.p>

          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-signal-green px-7 py-3.5 text-sm font-bold text-black transition-transform hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(24,201,166,0.6)]"
            >
              Contact via LINE
              <span aria-hidden>→</span>
            </a>
            <a
              href="#spectrum"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              Explore the Spectrum
            </a>
          </motion.div>

          <motion.dl
            custom={4}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6"
          >
            {[
              ["4", "Spectrum signals"],
              ["AC 220V", "LED running"],
              ["30+ yrs", "Made in Thailand"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-display text-xl font-bold text-white">{v}</dt>
                <dd className="mt-1 text-[11px] uppercase tracking-wider text-white/40">
                  {l}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Product */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2"
        >
          <Beacon
            image={amber.image}
            glow={amber.glow}
            alt="BIG ONE ELECTRIC amber LED rotary warning light"
            swapKey="hero-amber"
            priority
          />
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/30 sm:flex">
        <span className="mono-label text-[10px]">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
