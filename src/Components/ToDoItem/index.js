import React from "react";
import { Container, FinishedActivity } from "./styles";
import Checkbox from "../CheckboxButton";
import { useDispatch } from "react-redux";

const ToDoItem = ({ activity, status, id }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch({
      type: "toggleTodo",
      payload: id,
    });
  };

  return (
    <Container>
      <Checkbox onClick={handleDeleteClick} status={status} />
      {!status ? <FinishedActivity> {activity} </FinishedActivity> : activity}
    </Container>
  );
};

export default ToDoItem;
