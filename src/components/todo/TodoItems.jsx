import React from "react";
import { TodoItem } from "./TodoItem";

const TodoItems = ({ todos, setTodos, EditTodo }) => {
  return (
    <>
      <div>
        {todos?.map((todo, index) => (
          <TodoItem
            key={index}
            item={todo}
            onClick={() => {
              const filteredTodos = todos?.filter((item) => item !== todo);
              setTodos(filteredTodos);
            }}
            EditTodo={() => EditTodo(todo)}
          />
        ))}
      </div>
      <button style={{ marginTop: 40 }} onClick={() => setTodos([])}>
        Delete All
      </button>
    </>
  );
};

export default TodoItems;
