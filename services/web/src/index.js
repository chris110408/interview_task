import * as serviceWorker from "./serviceWorker";
import React from "react";
import { render } from "react-dom";


import App from "./App.jsx";

const rootElement = document.getElementById("root");

render(
  <App />,
  rootElement
);
serviceWorker.unregister()
