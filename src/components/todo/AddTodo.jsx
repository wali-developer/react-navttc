import React, { useEffect, useState } from "react";

const AddTodo = ({ onAdd, selectedTodo, setTodos, todos }) => {
  const [todo, setTodo] = useState("");

  useEffect(() => {
    setTodo(selectedTodo);
  }, [selectedTodo]);

  const updateTodo = () => {
    const arr = todos?.map((item) => {
      if (item === selectedTodo) {
        return todo;
      }
    });
    setTodos(arr);
  };

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
      {selectedTodo ? (
        <button onClick={updateTodo} type="button">
          {"Update"}
        </button>
      ) : (
        <button type="submit">{"Add"}</button>
      )}
    </form>
  );
};
export default AddTodo;
