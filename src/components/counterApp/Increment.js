import Button from "../common/Button";

const Increment = (props) => {
  const { onIcrement } = props;

  return <Button title="-" onClick={onIcrement} />;
};

export default Increment;
