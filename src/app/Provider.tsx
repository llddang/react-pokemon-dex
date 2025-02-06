import store from "@/store/redux";
import { theme } from "@/styles/theme";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

interface ProviderProps {
  children: React.ReactNode;
}

export default function CustomProvider({ children }: ProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}
