import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";

const reducer = (state={}, action) => {
    return state;
};

const middleware = applyMiddleware(createLogger());

const store = createStore(reducer, middleware);

store.dispatch((dispatch) => {
    dispatch({type: "FOO"});
    // do something async
    dispatch({type: "BAR"});
});