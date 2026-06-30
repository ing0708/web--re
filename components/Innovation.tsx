"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Trait {
  id: string;
  title: string;
  titleTh: string;
  body: string;
  /** structural metadata revealed on hover */
  meta: string;
  glow: string;
}

const traits: Trait[] = [
  {
    id: "01",
    title: "Smart",
    titleTh: "ชาญฉลาด",
    body: "A constant 120-flash rotary sweep tuned for maximum human peripheral detection. It thinks in photons so your crew reacts in milliseconds.",
    meta: "MODE: ROTARY · 120 FPM · PERIPHERAL-OPTIMISED",
    glow: "#4E78F0",
  },
  {
    id: "02",
    title: "Nerd",
    titleTh: "ลึกซึ้ง",
    body: "Obsessively engineered LED arrays — 18 to 36 emitters per dome, each binned for spectral purity. The deep analytical core behind a simple beacon.",
    meta: "ARRAY: 18–36 LED · SPECTRAL-BINNED",
    glow: "#18C9A6",
  },
  {
    id: "03",
    title: "Flexible",
    titleTh: "ยืดหยุ่น",
    body: "Four spectrum signals, four sizes, one mounting language. It adapts to any harsh environment — like the brightest minds, it reshapes to fit the problem.",
    meta: "RANGE: 4 COLOURS × 4 SIZES · TWIN-STUD",
    glow: "#FFB732",
  },
  {
    id: "04",
    title: "Practical",
    titleTh: "ใช้งานจริง",
    body: "IP44 housing, 50,000-hour lifespan, plug-and-play AC 220V. Brilliance means nothing if it fails on site — so it simply doesn't.",
    meta: "BUILD: IP44 · 50,000 HRS · AC 220V",
    glow: "#FF4D4D",
  },
];

export default function Innovation() {
  return (
    <section id="innovation" className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
      <div className="max-w-3xl">
        <p className="mono-label mb-4 text-[11px] text-navy-glow">◈ The Innovation</p>
        <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">
          Smart. Flexible.{" "}
          <span className="text-white/40">Indestructible.</span>
        </h2>
        <p className="mt-6 text-base leading-relaxed text-white/60 sm:text-lg">
          Like the brightest minds, our rotary lights adapt to any harsh
          environment — delivering uncompromised performance when it matters
          most. Nerdy by design, functional by obsession.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-4">
        {traits.map((t, i) => (
          <TraitCard key={t.id} trait={t} index={i} />
        ))}
      </div>
    </section>
  );
}

function TraitCard({ trait, index }: { trait: Trait; index: number }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative flex min-h-[330px] flex-col bg-carbon p-7 transition-colors duration-300"
      style={
        hover
          ? ({
              ["--glow" as string]: trait.glow,
              boxShadow: `inset 0 0 60px ${trait.glow}22`,
            } as React.CSSProperties)
          : ({ ["--glow" as string]: trait.glow } as React.CSSProperties)
      }
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-sm text-white/30">{trait.id}</span>
        <span
          className="h-2.5 w-2.5 rounded-full transition-all duration-300"
          style={{
            background: trait.glow,
            boxShadow: hover ? `0 0 14px ${trait.glow}` : "none",
            opacity: hover ? 1 : 0.4,
          }}
        />
      </div>

      <h3
        className="mt-10 font-display text-2xl font-bold transition-all duration-300 sm:text-3xl"
        style={hover ? { color: "#fff" } : { color: "rgba(255,255,255,0.85)" }}
      >
        <span className={hover ? "neon" : ""}>{trait.title}</span>
      </h3>
      <p className="font-thai mt-1 text-xs text-white/35">{trait.titleTh}</p>

      <p className="mt-5 text-sm leading-relaxed text-white/55">{trait.body}</p>

      {/* hover-revealed structural metadata — kept in flow so it never overlaps */}
      <div className="mt-auto overflow-hidden pt-6">
        <motion.p
          className="mono-label truncate text-[9px]"
          style={{ color: trait.glow }}
          animate={{ opacity: hover ? 1 : 0, y: hover ? 0 : 8 }}
          transition={{ duration: 0.3 }}
        >
          {trait.meta}
        </motion.p>
      </div>
    </motion.div>
  );
}
