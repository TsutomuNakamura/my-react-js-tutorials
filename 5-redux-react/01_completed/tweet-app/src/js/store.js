import { applyMiddleware, createStore } from "redux";

import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { createPromise } from 'redux-promise-middleware';
const promise = createPromise({ types: { fulfilled: 'success' } });

import reducer from "./reducers";

const middleware = applyMiddleware(promise, thunk, createLogger());

export default createStore(reducer, middleware);
