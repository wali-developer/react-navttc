const Increment = (props) => {
  const { onIcrement } = props;

  return <button onClick={onIcrement}>+</button>;
};

export default Increment;
