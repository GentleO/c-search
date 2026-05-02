import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ResultsContext from "./components/ResultsContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ResultsContext>
        <App />
      </ResultsContext>
    </BrowserRouter>
  </StrictMode>,
);
