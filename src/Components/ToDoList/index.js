import React from "react";
import {
  ClearItems,
  Container,
  FilterButton,
  FiltersContainer,
  Footer,
  FooterItem,
  ToDoListContainer,
} from "./styles";
import ToDoItem from "../ToDoItem";
import { useDispatch, useSelector } from "react-redux";

const ToDoList = () => {
  const todoList = useSelector((state) =>
    state.todosReducer.active
      ? state.todosReducer.activeTodos
      : state.todosReducer.completed
      ? state.todosReducer.completedTodos
      : state.todosReducer.todos
  );

  const remainingTodos = useSelector(
    (state) => state.todosReducer.activeTodos.length
  );

  const showCompleted = useSelector((state) => state.todosReducer.completed);

  const dispatch = useDispatch();

  const handleActiveItems = () => {
    dispatch({
      type: "toggleActive",
    });
  };

  const handleCompletedItems = () => {
    dispatch({
      type: "toggleCompleted",
    });
  };

  const handleAllItems = () => {
    dispatch({
      type: "toggleAll",
    });
  };

  const removeCompleted = () => {
    dispatch({
      type: "clearCompleted",
    });
  };

  return (
    <Container>
      <ToDoListContainer>
        {todoList.map((todo) => (
          <ToDoItem
            activity={todo.activity}
            status={todo.status}
            id={todo.id}
          />
        ))}
      </ToDoListContainer>
      <Footer>
        <FooterItem>
          {showCompleted ? true : `${remainingTodos} items left`}
        </FooterItem>
        <FiltersContainer>
          <FilterButton onClick={handleAllItems}> All </FilterButton>
          <FilterButton onClick={handleActiveItems}> Active </FilterButton>
          <FilterButton onClick={handleCompletedItems}>Completed</FilterButton>
        </FiltersContainer>
        <ClearItems onClick={removeCompleted}> Clear Completed </ClearItems>
      </Footer>
    </Container>
  );
};

export default ToDoList;
