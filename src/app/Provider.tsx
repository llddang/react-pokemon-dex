import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

interface ProviderProps {
  children: React.ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
