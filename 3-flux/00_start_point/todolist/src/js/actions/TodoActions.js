import dispatcher from "../dispatcher";

export function createTodo(text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id
    });
}

export function reloadTodos() {
    // axios("http://someurl.com/somedataendpoint").then((data) => {
    //   console.log("got the data!", data);
    // });

    setTimeout(() => {
        dispatcher.dispatch({
            type: "RECEIVE_TODOS",
            todos: [
                {
                    id: 213464613,
                    text: "再び買い物へ行く",
                    complete: false
                },
                {
                    id: 335684679,
                    text: "庭で寝る",
                    complete: false
                }
            ]
        });
    }, 1000);
}