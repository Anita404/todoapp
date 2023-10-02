import React, { useState } from "react";
import { TaskContainer } from "./styles";
import Checkbox from "../CheckboxButton";
import Input from "../Input";
import { useDispatch } from "react-redux";

const TaskCreation = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  return (
    <TaskContainer>
      <Checkbox
        onClick={() => dispatch({ type: "addTodo", payload: inputValue })}
      />
      <Input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </TaskContainer>
  );
};

export default TaskCreation;
