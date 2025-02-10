export const theme = {
  colors: {
    primary: "#168991",
    secondary: "white",
    primaryHover: "#4CEEF9",
    secondaryHover: "#4CEEF9",
  },
} as const;

export type ThemeColors = keyof typeof theme.colors;
