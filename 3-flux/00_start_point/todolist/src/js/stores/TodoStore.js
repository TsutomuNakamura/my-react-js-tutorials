import { EventEmitter } from "events"; //1.EventEmitterをインポートし
import dispatcher from "../dispatcher"; 

class TodoStore extends EventEmitter { //2.それを継承したTodoStoreクラスを作成
    constructor() {
        super();
        this.todos = [
            {
                id: 113464613,
                text: "買い物へ行く",
                complete: false
            },
            {
                id: 235684679,
                text: "請求書を支払う",
                complete: false
            }
        ];
    }

    createTodo(text) {
        const id = Date.now();

        this.todos.push({
            id,
            text,
            complete: false
        });

        this.emit("change");
    }

    getAll() {
        return this.todos;
    }
    
    reciveTodos(todos) {
        this.todos = todos;
        this.emit("change");
    }

    handleActions(action) {
        switch(action.type) {
            case "CREATE_TODO": {
                this.createTodo(action.text);
            }
            case "RECEIVE_TODOS": {
                this.reciveTodos(action.todos);
            }
        }
    }
}

const todoStore = new TodoStore; //3.そのTodoStoreクラスをnewする(インスタンス化)
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore; //そのインスタンスを外部へエクスポートする