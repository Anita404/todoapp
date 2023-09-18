import React from "react";
import TaskCreation from "./TaskCreation";
import ToDoList from "./ToDoList";
import SunIcon from "./Icons/SunIcon.svg";
import Page from "./layout/Page/index";
import Header from "./layout/Header";
import bg from "./Icons/bg.png";

export default function App() {
  return (
    <Page>
      <Header />
    </Page>
  );
}

// return (
//   <>
//     {/* <HeadingContainer>
//       To Do App
//       {/* <themeIcon fxn /> */}
//       {/* would be at the edge of the heading container  */}
//     </HeadingContainer>
//     <TaskCreation></TaskCreation>
//     <ToDoList>
//       <StatsContainer></StatsContainer>
//       {/* will be in the styles for toDoList */}
//     </ToDoList>
//     <Instructions> </Instructions> */}
//   </>
// );
