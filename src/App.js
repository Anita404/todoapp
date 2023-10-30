import React from "react";
import Page from "./layout/Page/index";
import Header from "./layout/Header";
import ToDoList from "./Components/ToDoList";
import { Provider } from "react-redux";
import store from "./Store/store";
import { GlobalStyles } from "./GlobalStyles";
import Theme, { darkTheme, lightTheme } from "./theme";

export default function App() {
  return (
    <Provider store={store}>
      <Theme>
        <GlobalStyles />
        <Page>
          <Header />
          <ToDoList />
        </Page>
      </Theme>
    </Provider>
  );
}
