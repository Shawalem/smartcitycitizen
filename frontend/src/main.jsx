import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./contexts/UserContext.jsx";
import { hydrate, render } from "react-dom";
import "./index.scss";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <UserContext>
//       <App />
//     </UserContext>
//   </BrowserRouter>
// );

const Main = () => (
  <BrowserRouter>
    <UserContext>
      <App />
    </UserContext>
  </BrowserRouter>
);

const root = createRoot(document.getElementById("root"));

const isServerRendered = root._internalRoot !== null;

if (isServerRendered) {
  // If it's server-rendered, use render
  root.render(<Main />);
} else {
  // Otherwise, use hydrate
  root.hydrate(<Main />);
}