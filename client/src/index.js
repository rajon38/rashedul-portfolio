import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/progress.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { sessionHelper } from "./helper/SessionHelper";

// Set the Redux store in sessionHelper
sessionHelper.setStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
