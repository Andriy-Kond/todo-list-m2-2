import React, { Component } from "react";

import TodoList from "TodoList";
import initialTodos from "dataBase/todos.json";

import RegisterForm from "TodoList/RegisterForm";

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  submitForm = todoData => console.log("todoData :>> ", todoData);

  render() {
    const { todos } = this.state;

    const completedTodosCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );

    return (
      <div>
        {/* <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          // onChange комбінує onBlur/onFocus і onInput
          // onBlur={console.log("onBlur")}
          // onFocus={console.log("onFocus")}
        /> */}

        <RegisterForm handleSubmit={this.submitForm} />
        <RegisterForm handleSubmit={this.submitForm} />

        <p>Всього завдань: {todos.length}</p>
        <p>Виконаних завдань: {completedTodosCount}</p>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
