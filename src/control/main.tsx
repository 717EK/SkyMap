import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Control } from "./Control.js";
import { registerSW } from "../lib/registerSW.js";
import "../styles/control.css";

registerSW();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Control />
  </StrictMode>,
);
