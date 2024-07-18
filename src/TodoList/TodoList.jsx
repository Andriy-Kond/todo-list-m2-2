import { List, ListItem } from "./TodoList.styled";

const TodoList = props => {
  const { todos, onDeleteTodo } = props;

  return (
    <>
      <List>
        {todos.map(({ id, text, completed }) => (
          <ListItem key={id}>
            <span>Task: {text}</span>
            <span>Completed: {completed ? "завершено" : "в процесі"}</span>
            <button
              onClick={() => {
                onDeleteTodo(id);
              }}>
              Delete task
            </button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TodoList;
