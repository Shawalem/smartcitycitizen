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

// const Main = () => (
//   <BrowserRouter>
//     <UserContext>
//       <App />
//     </UserContext>
//   </BrowserRouter>
// );

// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   hydrate(<Main />, rootElement);
// } else {
//   render(<Main />, rootElement);
// }
