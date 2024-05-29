import React from "react";
import ListItem from "./ListItem";
import { ListStyles } from "./Style";

const Lists = () => {
  const subjects = ["Home", "About", "Contact"];

  return (
    <div style={ListStyles.lists}>
      {subjects.map((subject, index) => (
        <ListItem key={subject + index} title={subject} />
      ))}
    </div>
  );
};

export default Lists;
