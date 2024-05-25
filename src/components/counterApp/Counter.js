import { useState } from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";

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
  const [count, setCount] = useState(1);
  console.log(count);

  const decrementCount = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div>
      <h1>Counter App</h1>
      <div style={style}>
        <Decrement onDecrement={decrementCount} />
        <span>{count}</span>
        <Increment
          onIcrement={() => {
            setCount((prev) => prev + 1);
          }}
        />
      </div>
    </div>
  );
};

export default Counter;
