import React, { Component } from "react";

import TodoList from "TodoList";
import initialTodos from "dataBase/todos.json";

class App extends Component {
  state = {
    todos: initialTodos,
  };

  onDeleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  onReadyTodos = () => this.state.todos.filter(todo => todo.completed === true);

  render() {
    const { todos } = this.state;

    const completedTodosCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );

    return (
      <div className="App">
        <p>Всього завдань: {todos.length}</p>
        <p>Виконаних завдань: {completedTodosCount}</p>
        <TodoList todos={todos} onDeleteTodo={this.onDeleteTodo} />
      </div>
    );
  }
}

export default App;
