import { useContext } from "react";
import Button from "../common/Button";
import { CounterContext } from "../../contexts/CounterContext";

const Decrement = (props) => {
  const { dispatch } = useContext(CounterContext);
  return (
    <Button
      title="-"
      onClick={() => {
        dispatch({ type: "decrement" });
      }}
    />
  );
};

export default Decrement;
