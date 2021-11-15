import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import thunk from "redux-thunk";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import reducers from "./redux/Combine";
import reportWebVitals from "./reportWebVitals";
import { Provider, teamsTheme } from "@fluentui/react-northstar";
import { Provider as Providerr } from "react-redux";
const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
  <Provider theme={teamsTheme}>
    <Providerr store={store}>
      <App />
    </Providerr>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
