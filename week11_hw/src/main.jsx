import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PartProvider } from "./contexts/PartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PartProvider>
      <App />
    </PartProvider>
  </StrictMode>,
);
