import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./contexts/UserContext.jsx";
import { hydrate, render } from "react-dom";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContext>
      <App />
    </UserContext>
  </BrowserRouter>
);

// const main = (
//   <BrowserRouter>
//     <UserContext>
//       <App />
//     </UserContext>
//   </BrowserRouter>
// );

// const root = document.getElementById("root");
// if (root.hasChildNodes()) {
//   hydrate(main, root);
// } else {
//   render(main, root);
// }
