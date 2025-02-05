export const theme = {
  colors: {
    primary: "#ff0000",
    secondary: "#a7b6c4",
    primaryHover: "#8b0000",
    secondaryHover: "#708090",
  },
} as const;

export type ThemeColors = keyof typeof theme.colors;
