const size = {
  sm: "640px",
  md: "800px",
  lg: "1100px",
  xl: "1600px",
} as const;

export const media = {
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
} as const;
