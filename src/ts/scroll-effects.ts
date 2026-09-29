// Scroll effects for browsers without CSS scroll-driven animations (Firefox,
// as of 2026). Where `animation-timeline` is supported, main.css does all of
// this itself and this file does nothing. It also does nothing under
// prefers-reduced-motion, and without JS the page is simply static.
//
// Mirrors three effects from the "Motion" section of main.css:
//   - the dark bands' glow travels bottom-left to top-right across the band
//   - the hero dot field lags behind the page (parallax)
//   - cards and steps rise into place as they enter the viewport

// Keep in step with the reveal selector list in main.css.
const REVEAL_SELECTOR = [
  ".service-card",
  ".post-card",
  ".how-steps li",
  ".pillars li",
  ".shift-split > div",
  ".quotes figure",
  ".pricing-card",
  ".law-diff",
].join(", ");

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

export function initScrollEffects(): void {
  if (CSS.supports("animation-timeline: scroll()")) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const bands = Array.from(document.querySelectorAll<HTMLElement>(".proof, .checkout-body"));
  const dots = document.querySelector<HTMLElement>(".hero-dots");

  const update = () => {
    const vh = window.innerHeight;
    for (const band of bands) {
      // 0 as the band's top enters the bottom of the screen, 1 as its bottom
      // leaves the top: the same range as the CSS `cover` timeline.
      const { top, height } = band.getBoundingClientRect();
      const progress = clamp01((vh - top) / (vh + height));
      band.style.setProperty("--glow-x", `${5 + 90 * progress}%`);
      band.style.setProperty("--glow-y", `${115 - 130 * progress}%`);
    }
    if (dots) dots.style.translate = `0 ${-160 * clamp01(window.scrollY / vh)}px`;
  };

  let queued = false;
  const onScroll = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      update();
    });
  };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll, { passive: true });
  update();

  // Reveals: hide only once we know we can show them again.
  document.documentElement.classList.add("reveal-fallback");
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px" },
  );
  for (const el of document.querySelectorAll(REVEAL_SELECTOR)) observer.observe(el);
}
