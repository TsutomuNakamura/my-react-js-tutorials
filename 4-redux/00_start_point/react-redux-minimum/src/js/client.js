import { applyMiddleware, createStore } from "redux";

const reducer = (state = 0, action) => {
    switch(action.type) {
        case "INC":
            state = state + 1;
            break;
        case "DEC":
            state = state - 1;
            break;
    }
    return state;
}

const logger = (state) => (next) => (action) => {
    console.log("action fired", action);
    next(action);
}

const middleware = applyMiddleware(logger);

const store = createStore(reducer, 1, middleware);

store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch({type: "INC"});
store.dispatch({type: "INC"});
store.dispatch({type: "DEC"});
store.dispatch({type: "DEC"});