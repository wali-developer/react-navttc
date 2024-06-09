import React, { useRef } from "react";

const UseRefExample = () => {
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.value = "String value";
  };

  return (
    <div className="max-w-[500px] mx-auto py-20">
      <h1 className="text-3xl font-bold mb-5">useRef Example</h1>
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Click on the button to fucus the input"
          className="border w-full h-[45px] px-5"
        />
        <button onClick={focusInput} className="w-[200px] h-[45px] mt-5 border">
          Click
        </button>
      </div>
    </div>
  );
};

export default UseRefExample;
