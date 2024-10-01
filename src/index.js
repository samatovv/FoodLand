import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { store } from "./redux/index";
import { Provider } from "react-redux";
import Preloader from "./shared/Preloader";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<Preloader />}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </Suspense>
);
