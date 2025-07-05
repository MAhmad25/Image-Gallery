import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ImageProvider from "./contexts/ImageProvider.jsx";

createRoot(document.getElementById("root")).render(
      <StrictMode>
            <ImageProvider>
                  <BrowserRouter>
                        <App />
                  </BrowserRouter>
            </ImageProvider>
      </StrictMode>
);
