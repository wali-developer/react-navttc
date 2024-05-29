import React from "react";
import { TodoItem } from "./TodoItem";

const TodoItems = ({ todos }) => {
  return (
    <div>
      {todos?.map((todo, index) => (
        <TodoItem key={index} item={todo} />
      ))}
    </div>
  );
};

export default TodoItems;
