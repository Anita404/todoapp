import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";

if (module.hot) {
  module.hot.accept();
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
