import React from "react";
import Page from "./layout/Page/index";
import Header from "./layout/Header";
import ToDoList from "./Components/ToDoList";
import { Provider } from "react-redux";
import store from "./Store/store";

export default function App() {
  return (
    <Provider store={store}>
      <Page>
        <Header />
        <ToDoList />
      </Page>
    </Provider>
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
