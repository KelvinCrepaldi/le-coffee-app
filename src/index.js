import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ProvidersGathered from "./Providers";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ProvidersGathered>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProvidersGathered>
  </React.StrictMode>,
  document.getElementById("root")
);
