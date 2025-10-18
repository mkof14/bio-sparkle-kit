import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

console.log("BOOT: main.tsx loaded");

const el = document.getElementById("root");
if (!el) {
  const div = document.createElement("div");
  div.id = "root";
  document.body.appendChild(div);
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
