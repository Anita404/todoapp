import React from "react";
import { Container } from "./styles";
import Checkbox from "../CheckboxButton";
import Input from "../Input";

const ToDoItem = ({ activity }) => {
  return (
    <Container>
      <Checkbox />
      {activity}
    </Container>
  );
};

export default ToDoItem;
