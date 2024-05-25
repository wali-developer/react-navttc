import React, { useState } from "react";

const Child = (props) => {
  const [subject, setSubject] = useState("ReactJS");
  let sub = "Javascript";
  return (
    <>
      <div>Child Component</div>
      <p>{props.color}</p>
      <h1>Subject: {subject}</h1>
      <h2>Sub: {sub}</h2>
      <button
        onClick={() => {
          setSubject("NextJS");
        }}
      >
        Change the state
      </button>
      <button
        onClick={() => {
          sub = "NodeJS";
        }}
      >
        Change the variable
      </button>
    </>
  );
};

export default Child;
