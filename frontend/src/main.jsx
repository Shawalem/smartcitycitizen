import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./contexts/UserContext.jsx";
import "./index.scss";
import ReportContext from "./contexts/ReportContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContext>
      <ReportContext>
        <App />
      </ReportContext>
    </UserContext>
  </BrowserRouter>
);
