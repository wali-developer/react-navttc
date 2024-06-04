import React, { useEffect, useState } from "react";

const LifeCycle = () => {
  const [test, setTest] = useState(false);

  function MountCode() {
    console.log("Component Mounted..");
  }

  useEffect(MountCode, [test]);

  return (
    <div>
      <h1>Component Life cycles</h1>
      <p>State: {String(test)}</p>
      <button
        onClick={() => {
          setTest((prev) => !prev);
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export default LifeCycle;
