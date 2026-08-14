// The Diligence Monster video carousel.
//
// The track itself is a CSS scroll-snap strip, so with no JS at all it still
// scrolls (touch, trackpad, arrow keys), and the dots and FEATURES links are
// ordinary in-page anchors that jump to a slide. This file adds the two things
// markup can't express:
//   - prev/next buttons, which are `hidden` until we're here to drive them
//   - keeping the dots in sync with whatever slide is actually on screen

export function initCarousels(): void {
  for (const carousel of document.querySelectorAll<HTMLElement>(".carousel")) {
    const track = carousel.querySelector<HTMLElement>(".carousel-track");
    if (!track) continue;

    const slides = Array.from(track.querySelectorAll<HTMLElement>(".carousel-slide"));
    const dots = Array.from(carousel.querySelectorAll<HTMLAnchorElement>(".carousel-dot"));

    const scrollBy = (direction: 1 | -1) => {
      track.scrollBy({ left: direction * track.clientWidth, behavior: "smooth" });
    };

    for (const button of carousel.querySelectorAll<HTMLButtonElement>(".carousel-prev")) {
      button.hidden = false;
      button.addEventListener("click", () => scrollBy(-1));
    }
    for (const button of carousel.querySelectorAll<HTMLButtonElement>(".carousel-next")) {
      button.hidden = false;
      button.addEventListener("click", () => scrollBy(1));
    }

    if (dots.length === 0) continue;

    // Mark the dot for whichever slide is most visible in the track.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = slides.indexOf(entry.target as HTMLElement);
          dots.forEach((dot, i) => {
            dot.classList.toggle("is-active", i === index);
            if (i === index) {
              dot.setAttribute("aria-current", "true");
            } else {
              dot.removeAttribute("aria-current");
            }
          });
        }
      },
      { root: track, threshold: 0.6 },
    );

    for (const slide of slides) observer.observe(slide);
  }
}
