// Randomly filled cells on the inner-page honeycomb (.hero--page .hero-dots).
//
// The honeycomb is one repeating background tile, so CSS alone can't pick out
// individual cells. This places a small pool of hexagon-shaped .hex-fill
// elements inside the same layer (so they rotate and zoom with it), each
// exactly on a honeycomb cell, and cycles them: fade in on a random cell,
// hold, fade out, move somewhere else. Without JS it's just the outlines;
// under prefers-reduced-motion a scattering of cells is filled and stays put.

const POOL = 30;
const FADE_MS = 2400; // keep in step with the .hex-fill transition
// The SVG tile is 56x100: one hexagon centred at (28, 33), 66 tall, plus the
// neighbouring row's hexagon centred at (0, 83).
const TILE = { w: 56, h: 100, hexH: 66, aY: 33, bY: 83 };

const rand = (min: number, max: number) => min + Math.random() * (max - min);
const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

export function initHexFills(): void {
  const layer = document.querySelector<HTMLElement>(".hero--page .hero-dots");
  if (!layer) return;

  // Rendered tile size, e.g. "42px 75px", so the fills track any CSS change.
  const [tileW, tileH] = getComputedStyle(layer).backgroundSize.split(" ").map(parseFloat);
  if (!tileW || !tileH) return;
  const scale = tileW / TILE.w;
  const hexW = tileW;
  const hexH = TILE.hexH * scale;

  // Candidate cells in the middle of the layer: it's twice the hero's size
  // (inset: -50%) and turns, so the centre is always on screen.
  const cells: Array<[number, number]> = [];
  const { offsetWidth: w, offsetHeight: h } = layer;
  for (let j = 0; j * tileH < h; j++) {
    for (let i = 0; i * tileW < w; i++) {
      for (const [cx, cy] of [
        [(i + 0.5) * tileW, j * tileH + TILE.aY * scale],
        [i * tileW, j * tileH + TILE.bY * scale],
      ]) {
        if (cx > w * 0.2 && cx < w * 0.8 && cy > h * 0.2 && cy < h * 0.8) cells.push([cx, cy]);
      }
    }
  }
  if (cells.length < POOL * 2) return;

  const taken = new Set<number>();
  const place = (el: HTMLElement): number => {
    let index: number;
    do index = Math.floor(Math.random() * cells.length);
    while (taken.has(index));
    taken.add(index);
    const [cx, cy] = cells[index];
    Object.assign(el.style, {
      left: `${cx - hexW / 2}px`,
      top: `${cy - hexH / 2}px`,
      width: `${hexW}px`,
      height: `${hexH}px`,
    });
    return index;
  };

  const fills = Array.from({ length: POOL }, () => {
    const el = document.createElement("span");
    el.className = "hex-fill";
    layer.append(el);
    return el;
  });

  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    for (const el of fills) {
      place(el);
      el.classList.add("is-on");
    }
    return;
  }

  const cycle = async (el: HTMLElement, startDelay: number) => {
    await sleep(startDelay);
    for (;;) {
      const index = place(el);
      // Let the new position apply while transparent, then fade in.
      await new Promise(requestAnimationFrame);
      el.classList.add("is-on");
      await sleep(FADE_MS + rand(2500, 7000));
      el.classList.remove("is-on");
      await sleep(FADE_MS);
      taken.delete(index);
      await sleep(rand(500, 4000));
    }
  };
  fills.forEach((el) => void cycle(el, rand(0, 6000)));
}
