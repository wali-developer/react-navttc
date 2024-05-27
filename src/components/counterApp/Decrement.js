import Button from "../common/Button";

const Decrement = (props) => {
  const { onDecrement } = props;
  return <Button title="+" onClick={onDecrement} />;
};

export default Decrement;
