import React from "react";
import { TaskContainer } from "./styles";
import Checkbox from "../CheckboxButton";
import Input from "../Input";

const TaskCreation = () => {
  return (
    <TaskContainer>
      <Checkbox />
      <Input />
    </TaskContainer>
  );
};

export default TaskCreation;
