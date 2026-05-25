import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";

// punto de entrada de la aplicacion
// busca el div con id="root" en el index.html y monta el app ahi
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* StrictMode ayuda a detectar problemas en desarrollo */}
    <App />
  </StrictMode>
);