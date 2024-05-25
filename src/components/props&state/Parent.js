import React from "react";
import Child from "./Child";
import Childd1 from "./Childd1";

const Parent = () => {
  let color = "This is a color prop";
  return (
    <>
      <Child color={color} numbers={[12, 43, 66, 73]} />
      <Childd1 color={color} />
    </>
  );
};

export default Parent;
