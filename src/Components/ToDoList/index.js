import React, { useState } from "react";
import {
  Container,
  FilterButton,
  FiltersContainer,
  Footer,
  FooterItem,
} from "./styles";
import ToDoItem from "../ToDoItem";

const todoList = [
  { activity: "Jog around and find out" },
  { activity: "Feed spiteful cat" },
  { activity: "Learn frontend w/Frontend God" },
  { activity: "Figure out life" },
];

const ToDoList = () => {
  const [state, setState] = useState(todoList);

  const onClick = () => {
    setState([...state, { activity: "something" }]);
    console.log(todoList);
  };
  return (
    <Container>
      {state.map((todo) => (
        <ToDoItem activity={todo.activity} />
      ))}
      <Footer>
        <FooterItem> 5 items left </FooterItem>
        <FiltersContainer>
          <FilterButton onClick={onClick}> All </FilterButton>
          <FilterButton> Active </FilterButton>
          <FilterButton> Completed </FilterButton>
        </FiltersContainer>
        <FooterItem> Clear Completed </FooterItem>
      </Footer>
    </Container>
  );
};

export default ToDoList;
