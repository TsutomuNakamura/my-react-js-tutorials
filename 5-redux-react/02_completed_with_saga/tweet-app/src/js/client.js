import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Layout from "./components/Layout";
import configureStore from "./store";
import rootSaga from "./sagas"

const app = document.getElementById('app');
const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>, app);

