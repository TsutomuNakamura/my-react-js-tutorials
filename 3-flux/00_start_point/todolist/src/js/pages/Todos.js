import React from "react";

import Todo from "../components/Todo";

export default class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 113464613,
          text: "Go Shopping",
          complete: false
        },
        {
          id: 235684679,
          text: "Pay Bills",
          complete: false
        }
      ]
    };
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}

