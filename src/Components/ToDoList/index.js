import React from "react";
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
  const remainingTodos = useSelector(
    (state) => state.todosReducer.todos.length
  );
  console.log(todoList);
  return (
    <Container>
      {todoList.map((todo) => (
        <ToDoItem activity={todo.activity} status={todo.status} id={todo.id} />
      ))}
      <Footer>
        <FooterItem> {remainingTodos} items left </FooterItem>
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
