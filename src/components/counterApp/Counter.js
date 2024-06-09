import { useContext, useState } from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";
import { NavLink } from "react-router-dom";
import { CounterContext } from "../../contexts/CounterContext";

const style = {
  display: "flex",
  gap: 20,
  justifyContent: "center",
  alignItems: "center",
  width: "150px",
  height: "150px",
  border: "1px solid black",
  borderRadius: "50%",
  backgroundColor: "lightgreen",
  color: "white",
  fontSize: "30px",
  fontWeight: "bold",
  cursor: "pointer",
  margin: "10px",
};

const Counter = () => {
  const { state } = useContext(CounterContext);

  return (
    <div>
      <h1>Counter App</h1>
      <div style={style}>
        <Decrement />
        <span>{state.count}</span>
        <Increment />
      </div>
    </div>
  );
};

export default Counter;
