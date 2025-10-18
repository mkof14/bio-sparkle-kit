import HeroLogo from "./components/HeroLogo";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroLogo />
    <App />
  </StrictMode>
);
