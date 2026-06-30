"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface BeaconProps {
  image: string;
  glow: string;
  alt: string;
  /** key that changes when the variant changes, to drive the crossfade */
  swapKey: string;
  priority?: boolean;
}

/**
 * The hero product render. The official product photos ship on a white studio
 * background, so the beacon is presented inside a luminous "light-pod": a white
 * radial glow whose falloff is matched by the image mask, letting the photo's
 * white background melt seamlessly into a glowing orb. A slowly rotating conic
 * "sweep" rings the pod for the rotary-beacon feel, tinted to the active signal
 * colour. The image source crossfades smoothly whenever `swapKey` changes.
 */
export default function Beacon({
  image,
  glow,
  alt,
  swapKey,
  priority = false,
}: BeaconProps) {
  // shared radial falloff: opaque core, fully transparent by the pod rim
  const falloff =
    "radial-gradient(circle at 50% 50%, #000 50%, rgba(0,0,0,0.55) 66%, transparent 74%)";

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[460px] items-center justify-center">
      {/* rotating rotary sweep — shows through the pod rim and beyond */}
      <div
        className="pointer-events-none absolute inset-0 animate-sweep rounded-full opacity-80 blur-2xl motion-reduce:animate-none"
        style={{
          background: `conic-gradient(from 0deg, transparent 0deg, ${glow} 40deg, transparent 130deg, transparent 220deg, ${glow} 250deg, transparent 340deg)`,
          maskImage:
            "radial-gradient(circle at center, transparent 30%, black 60%, transparent 88%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, transparent 30%, black 60%, transparent 88%)",
        }}
      />

      {/* coloured outer bloom */}
      <motion.div
        key={`bloom-${swapKey}`}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: glow }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 0.6 }}
      />

      {/* luminous white light-pod (matches the photo's studio background) */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 46%, rgba(255,255,255,0.97) 0%, rgba(248,250,252,0.95) 42%, rgba(255,255,255,0.55) 60%, rgba(255,255,255,0) 72%)",
          boxShadow: `0 0 70px ${glow}66, 0 0 24px ${glow}55`,
        }}
      />

      {/* product image with crossfade, masked to the same falloff as the pod */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={swapKey}
          className="relative z-10 h-full w-full"
          initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{
            WebkitMaskImage: falloff,
            maskImage: falloff,
          }}
        >
          <Image
            src={image}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 80vw, 460px"
            className="object-contain"
          />
        </motion.div>
      </AnimatePresence>

      {/* contact shadow */}
      <div className="pointer-events-none absolute bottom-[6%] left-1/2 h-5 w-1/2 -translate-x-1/2 rounded-[100%] bg-black/60 blur-xl" />
    </div>
  );
}
