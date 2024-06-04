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
  const [selectedTodo, setSelectedTodo] = useState("");

  return (
    <div style={styles}>
      <TodoHeader />
      <AddTodo
        selectedTodo={selectedTodo}
        todos={todos}
        setTodos={setTodos}
        clearSelected={() => {
          setSelectedTodo("");
        }}
        onAdd={(item) => {
          setTodos(() => [...todos, item]);
          localStorage.setItem("todos", JSON.stringify(todos));
          setSelectedTodo("");
        }}
      />
      <TodoItems
        todos={todos}
        setTodos={setTodos}
        EditTodo={(todo) => setSelectedTodo(todo)}
      />
    </div>
  );
};

export default TodoApp;
