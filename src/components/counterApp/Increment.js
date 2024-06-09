import { useContext } from "react";
import Button from "../common/Button";
import { CounterContext } from "../../contexts/CounterContext";

const Increment = (props) => {
  const { dispatch } = useContext(CounterContext);

  return (
    <Button
      title="+"
      onClick={() => {
        dispatch({ type: "increment" });
      }}
    />
  );
};

export default Increment;
