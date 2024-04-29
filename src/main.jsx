import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import PizzaProvider from "./context/PizzaProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <PizzaProvider>
        <App />
      </PizzaProvider>
    </HashRouter>
  </React.StrictMode>
);
