import { createStore } from "redux";

// const reducer = () => {
//     console.log("reducer has been called.");
// }
const reducer = (state = 0, action) => { //3.送信されたActionのタイプから分岐処理
    switch (action.type) {
        case "INC":
            return state + action.payload;
        case "DEC":
            return state - action.payload;
    }
    return state;
}

const store = createStore(reducer, 1); //1.初期化される

store.subscribe(() => {
    console.log("store changed", store.getState());//4.Actionが送信されたら通知
});

store.dispatch({ type: "INC", payload: 1});//2.storeにActionを送信する
store.dispatch({ type: "INC", payload: 2});
store.dispatch({ type: "INC", payload: 22});
store.dispatch({ type: "INC", payload: 222});
store.dispatch({ type: "DEC", payload: 1000});