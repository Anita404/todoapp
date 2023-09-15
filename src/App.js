import React from "react";
import { Title } from "./App.styles";
import TaskCreation from "./TaskCreation";
import ToDoList from "./ToDoList";

export default function App() {
  return (
    <StyledPageContainer>
      <HeadingContainer>
        To Do App
        {/* <themeIcon fxn /> */}
        {/* would be at the edge of the heading container  */}
      </HeadingContainer>
      <TaskCreation></TaskCreation>
      <ToDoList>
        <StatsContainer></StatsContainer>
        {/* will be in the styles for toDoList */}
      </ToDoList>
      <Instructions> </Instructions>
    </StyledPageContainer>
  );
}
