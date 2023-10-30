import React, { useEffect, useState } from "react";
import { TaskContainer } from "./styles";
import Input from "../Input";
import { useDispatch } from "react-redux";

const TaskCreation = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const addToDo = (event) => {
    if (event.key == "Enter") {
      dispatch({ type: "addTodo", payload: inputValue });
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", addToDo);

    return () => {
      document.removeEventListener("keydown", addToDo);
    };
  });

  return (
    <TaskContainer>
      <Input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </TaskContainer>
  );
};

export default TaskCreation;
