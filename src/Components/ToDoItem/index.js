import React from "react";
import { Container, FinishedActivity } from "./styles";
import Checkbox from "../CheckboxButton";

const ToDoItem = ({ activity, status, id }) => {
  return (
    <Container>
      <Checkbox onClick={onClick} status={status} />
      {!status ? <FinishedActivity> {activity} </FinishedActivity> : activity}
    </Container>
  );
};

export default ToDoItem;
