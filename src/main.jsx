import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NavBar from "./components/nav";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>
);