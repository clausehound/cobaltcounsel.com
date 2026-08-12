// The nav dropdown is a <details> element, so it already opens, closes and is
// keyboard-reachable with no JS. This adds the two behaviours the platform
// doesn't give you, and without which an open menu feels stuck:
//   - clicking anywhere outside closes it
//   - Escape closes it and returns focus to the summary

export function initDropdowns(): void {
  const dropdowns = Array.from(document.querySelectorAll<HTMLDetailsElement>("details.dropdown"));
  if (dropdowns.length === 0) return;

  document.addEventListener("pointerdown", (event) => {
    for (const dropdown of dropdowns) {
      if (dropdown.open && !dropdown.contains(event.target as Node)) {
        dropdown.open = false;
      }
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    for (const dropdown of dropdowns) {
      if (!dropdown.open) continue;
      dropdown.open = false;
      dropdown.querySelector("summary")?.focus();
    }
  });
}
