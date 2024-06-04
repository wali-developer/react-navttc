import { useState } from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";
import { NavLink } from "react-router-dom";

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
  const [show, setShow] = useState(false);

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
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        Check events
      </button>

      {show && (
        <div
          style={{
            width: 500,
            height: 500,
            borderRadius: 50,
            background: "lightgray",
            marginTop: 50,
          }}
        ></div>
      )}
      <NavLink to="/todo">
        <button className="px-5 h-[44px] rounded-lg border border-black/50 block">
          Go to Todo app
        </button>
      </NavLink>
    </div>
  );
};

export default Counter;
