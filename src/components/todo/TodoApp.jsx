import React, { useState } from "react";
import TodoHeader from "./TodoHeader";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";

const styles = {
  display: "flex",
  justifyContent: "center",
  marginTop: 50,
  gap: 20,
  flexDirection: "column",
  alignItems: "center",
};

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div style={styles}>
      <TodoHeader />
      <AddTodo
        onAdd={(item) => {
          setTodos((prevArr) => [...prevArr, item]);
        }}
      />
      <TodoItems todos={todos} />
    </div>
  );
};

export default TodoApp;
