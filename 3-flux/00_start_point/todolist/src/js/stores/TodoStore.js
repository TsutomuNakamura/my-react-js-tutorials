import { EventEmitter } from "events"; //1.EventEmitterをインポートし

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

    getAll() {
        return this.todos;
    }
}

const todoStore = new TodoStore; //3.そのTodoStoreクラスをnewする(インスタンス化)

export default todoStore; //そのインスタンスを外部へエクスポートする