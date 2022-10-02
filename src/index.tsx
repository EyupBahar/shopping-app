import { render } from "react-dom";
import { Provider } from "react-redux";
import { App } from "./App";
import "./index.css";
import { persistor, store } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  rootElement
);
