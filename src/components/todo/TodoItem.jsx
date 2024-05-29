import React from "react";

export const TodoItem = ({ item }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 20,
      }}
    >
      <span>{item}</span>
      <button>Delete</button>
    </div>
  );
};
