import React, { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [todo, setTodo] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(todo);
        setTodo("");
      }}
    >
      <input
        type="text"
        placeholder="Todo.."
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};
export default AddTodo;
