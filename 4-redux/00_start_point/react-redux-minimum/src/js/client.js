import { applyMiddleware, createStore } from "redux";

const reducer = (state = 0, action) => {
    switch (action.type) {
        case "INC":
            state = state + 1;
            break;
        case "DEC":
            state = state - 1;
            break;
        case "ERR":
            throw new Error("It's error!!!!");
    }
    return state;
}

const logger = (store) => (next) => (action) => {
    console.log("action fired", action);
    next(action);
}

const error = (store) => (next) => (action) => {
    try {
        next(action);
    } catch (e) {
        console.log("Error was occured", e);
    }

}

const middleware = applyMiddleware(logger, error);

const store = createStore(reducer, 1, middleware);

store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch({ type: "INC" });
store.dispatch({ type: "INC" });
store.dispatch({ type: "DEC" });
store.dispatch({ type: "DEC" });
store.dispatch({ type: "ERR" });