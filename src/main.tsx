import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
