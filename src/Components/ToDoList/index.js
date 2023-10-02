import React, { useState } from "react";
import {
  Container,
  FilterButton,
  FiltersContainer,
  Footer,
  FooterItem,
} from "./styles";
import ToDoItem from "../ToDoItem";
import { useSelector } from "react-redux";

const ToDoList = () => {
  const todoList = useSelector((state) => state.todosReducer.todos);

  return (
    <Container>
      {todoList.map((todo) => (
        <ToDoItem activity={todo.activity} />
      ))}
      <Footer>
        <FooterItem> 5 items left </FooterItem>
        <FiltersContainer>
          <FilterButton> All </FilterButton>
          <FilterButton> Active </FilterButton>
          <FilterButton> Completed </FilterButton>
        </FiltersContainer>
        <FooterItem> Clear Completed </FooterItem>
      </Footer>
    </Container>
  );
};

export default ToDoList;
