import React from "react";

export const TodoItem = ({ item, onClick, EditTodo }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <span>{item?.name}</span>
        <div>
          <button onClick={EditTodo}>Edit</button>
          <button onClick={onClick}>Delete</button>
        </div>
      </div>
    </>
  );
};
