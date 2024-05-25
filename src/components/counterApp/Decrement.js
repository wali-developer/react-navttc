const Decrement = (props) => {
  const { onDecrement } = props;
  return <button onClick={onDecrement}>-</button>;
};

export default Decrement;
