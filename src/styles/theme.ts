export const theme = {
  colors: {
    primary: "#ff0000",
    secondary: "#8f9fb0",
    primaryHover: "#8b0000",
    secondaryHover: "#708090",
  },
} as const;

export type ThemeColors = keyof typeof theme.colors;
