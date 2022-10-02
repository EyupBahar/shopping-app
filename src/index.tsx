import { render } from "react-dom";
import { Provider } from "react-redux";
import { App } from "./App";
import "./index.css";
import { store } from "./app/store";

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
