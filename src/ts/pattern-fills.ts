// Randomly filled cells on the inner-page hero patterns.
//
// Each pattern is one repeating background tile, so CSS alone can't pick out
// individual cells. For each pattern this places a small pool of cell-shaped
// elements inside the same layer (so they rotate and zoom with it), each
// exactly on a cell, and cycles them: fade in on a random free cell, hold,
// fade out, move somewhere else. Without JS it's just the outlines; under
// prefers-reduced-motion a scattering of cells is filled and stays put.
//
//   team page      honeycomb   .hero--page .hero-dots    Parakeet fills
//   service pages  triangles   .service-hero .hero-dots  random palette colours

const FADE_MS = 2400; // keep in step with the .hex-fill / .tri-fill transitions

interface Cell {
  x: number; // bounding box, in layer pixels
  y: number;
  w: number;
  h: number;
  className: string;
}

interface Pattern {
  selector: string;
  pool: number;
  // Cells for the whole layer, given the rendered tile size.
  cells(tileW: number, tileH: number, w: number, h: number): Cell[];
  colour?: () => string;
}

const rand = (min: number, max: number) => min + Math.random() * (max - min);
const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

// Honeycomb: the 56x100 tile holds one hexagon centred at (28, 33), 66 tall,
// and the neighbouring row's hexagon centred at (0, 83).
const honeycomb: Pattern = {
  selector: ".hero--page .hero-dots",
  pool: 30,
  cells(tileW, tileH, w, h) {
    const scale = tileW / 56;
    const hexH = 66 * scale;
    const out: Cell[] = [];
    for (let j = 0; j * tileH < h; j++) {
      for (let i = 0; i * tileW < w; i++) {
        for (const [cx, cy] of [
          [(i + 0.5) * tileW, j * tileH + 33 * scale],
          [i * tileW, j * tileH + 83 * scale],
        ]) {
          out.push({ x: cx - tileW / 2, y: cy - hexH / 2, w: tileW, h: hexH, className: "hex-fill" });
        }
      }
    }
    return out;
  },
};

// Palette colours for the triangles, at a light fill strength.
const PALETTE = ["--color-primary", "--color-heading", "--color-tertiary", "--color-verified", "--color-highlight"];

// Triangle lattice: rows of height tileH / 2, side tileW. Even rows have their
// top vertices at multiples of the side; odd rows are offset by half a side.
// Each row alternates down-pointing (flat top) and up-pointing (flat bottom).
const triangles: Pattern = {
  selector: ".service-hero .hero-dots",
  pool: 34,
  colour: () =>
    `color-mix(in srgb, var(${PALETTE[Math.floor(Math.random() * PALETTE.length)]}) ${Math.round(rand(18, 30))}%, transparent)`,
  cells(tileW, tileH, w, h) {
    const s = tileW;
    const rowH = tileH / 2;
    const out: Cell[] = [];
    for (let r = 0; r * rowH < h; r++) {
      const offset = r % 2 ? s / 2 : 0;
      for (let k = -1; k * s < w; k++) {
        const y = r * rowH;
        out.push({ x: k * s + offset, y, w: s, h: rowH, className: "tri-fill tri-fill--down" });
        out.push({ x: k * s + offset - s / 2, y, w: s, h: rowH, className: "tri-fill tri-fill--up" });
      }
    }
    return out;
  },
};

function run(pattern: Pattern): void {
  const layer = document.querySelector<HTMLElement>(pattern.selector);
  if (!layer) return;

  // Rendered tile size, e.g. "42px 75px", so the fills track any CSS change.
  const [tileW, tileH] = getComputedStyle(layer).backgroundSize.split(" ").map(parseFloat);
  if (!tileW || !tileH) return;

  // Only cells in the middle of the layer: it's twice the hero's size
  // (inset: -50%) and turns, so the centre is always on screen.
  const { offsetWidth: w, offsetHeight: h } = layer;
  const cells = pattern
    .cells(tileW, tileH, w, h)
    .filter(({ x, y, w: cw, h: ch }) => {
      const cx = x + cw / 2;
      const cy = y + ch / 2;
      return cx > w * 0.2 && cx < w * 0.8 && cy > h * 0.2 && cy < h * 0.8;
    });
  if (cells.length < pattern.pool * 2) return;

  const taken = new Set<number>();
  const place = (el: HTMLElement): number => {
    let index: number;
    do index = Math.floor(Math.random() * cells.length);
    while (taken.has(index));
    taken.add(index);
    const { x, y, w: cw, h: ch, className } = cells[index];
    el.className = className;
    Object.assign(el.style, { left: `${x}px`, top: `${y}px`, width: `${cw}px`, height: `${ch}px` });
    if (pattern.colour) el.style.background = pattern.colour();
    return index;
  };

  const fills = Array.from({ length: pattern.pool }, () => {
    const el = document.createElement("span");
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

export function initPatternFills(): void {
  run(honeycomb);
  run(triangles);
}
