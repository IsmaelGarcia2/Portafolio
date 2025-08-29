import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // IMPORTANTE: aquí se importa todo el CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
