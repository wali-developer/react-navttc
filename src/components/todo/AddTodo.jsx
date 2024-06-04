import React, { useEffect, useState } from "react";

const AddTodo = ({ onAdd, selectedTodo, setTodos, clearSelected, todos }) => {
  const [todo, setTodo] = useState("");

  useEffect(() => {
    setTodo(selectedTodo?.name);
  }, [selectedTodo]);

  const updateTodo = () => {
    const arr = todos?.map((item) => {
      if (item?.id === selectedTodo?.id) {
        return {
          ...item,
          name: todo,
        };
      } else {
        return item;
      }
    });
    setTodos(arr);
    clearSelected();
    setTodo("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Todo.."
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      {selectedTodo ? (
        <button
          onClick={() => {
            updateTodo();
          }}
          type="button"
        >
          {"Update"}
        </button>
      ) : (
        <button
          onClick={() => {
            if (todo?.length === 0) {
              alert("Please provide a value");
            } else {
              onAdd({
                id: Math.floor(Math.random() * 200 + 5),
                name: todo,
              });
              setTodo("");
            }
          }}
        >
          {"Add"}
        </button>
      )}
    </div>
  );
};
export default AddTodo;
