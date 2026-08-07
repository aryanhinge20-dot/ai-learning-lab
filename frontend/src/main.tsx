import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app/App";
import "./styles/global.css";
import { ExperimentProvider } from "@/context/ExperimentContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ExperimentProvider>
      <App />
    </ExperimentProvider>
  </React.StrictMode>
);