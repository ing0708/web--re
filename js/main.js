/* =================================================================
   BIG ONE ELECTRIC — Hero interactions
   Minimal, dependency-free, motion-respectful.
   ================================================================= */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- 1. Entrance reveal (IntersectionObserver) ----------------- */
  const animated = document.querySelectorAll("[data-animate]");

  if (prefersReduced || !("IntersectionObserver" in window)) {
    animated.forEach((el) => el.classList.add("is-in"));
  } else {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    animated.forEach((el) => io.observe(el));
  }

  /* ---- 2. Whisper-quiet parallax on the product (< 5%) ----------- */
  const stage = document.querySelector("[data-parallax] .hero__product-stage");

  if (stage && !prefersReduced && window.matchMedia("(pointer: fine)").matches) {
    let targetX = 0, targetY = 0, curX = 0, curY = 0, raf = null;
    const MAX = 7; // px — keeps movement well under the 5% / 3px-float spirit

    const onMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      targetX = ((e.clientX - cx) / cx) * MAX;
      targetY = ((e.clientY - cy) / cy) * MAX;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const tick = () => {
      curX += (targetX - curX) * 0.06;
      curY += (targetY - curY) * 0.06;
      stage.style.transform = `translate3d(${curX.toFixed(2)}px, ${curY.toFixed(2)}px, 0)`;
      if (Math.abs(targetX - curX) > 0.1 || Math.abs(targetY - curY) > 0.1) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = null;
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
  }

  /* ---- 3. Scroll cue → smooth scroll one viewport ---------------- */
  const scrollBtn = document.querySelector(".hero__scroll");
  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: prefersReduced ? "auto" : "smooth",
      });
    });
  }
})();
