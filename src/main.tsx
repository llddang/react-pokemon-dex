import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "@/App.tsx";
import Provider from "@/app/Provider";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <App />
      <ToastContainer />
    </Provider>
  </StrictMode>
);
