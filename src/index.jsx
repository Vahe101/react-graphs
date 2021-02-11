import React from "react";
import ReactDOM from "react-dom";
import Connected from "./components/Connected/Connected"
import reducers from "./store/chartsData/reducers/allReducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./store/chartsData/sagas/index";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Connected />
  </Provider>,
  document.getElementById("root")
);
