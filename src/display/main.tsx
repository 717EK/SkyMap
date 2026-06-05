import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Display } from "./Display.js";
import { registerSW } from "../lib/registerSW.js";
import "../styles/display.css";

registerSW();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Display />
  </StrictMode>,
);
