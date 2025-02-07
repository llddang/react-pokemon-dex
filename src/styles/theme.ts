export const theme = {
  colors: {
    primary: "#4CEEF94D",
    secondary: "#8f9fb0",
    primaryHover: "#4CEEF9",
    secondaryHover: "#708090",
  },
} as const;

export type ThemeColors = keyof typeof theme.colors;
