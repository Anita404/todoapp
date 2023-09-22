import React from "react";
import { Container, HeaderContainer, Title } from "./styles";
import MoonIcon from "../../Icons/MoonIcon.svg";
import { TaskContainer } from "../../TaskCreation/styles";
import { TaskButton, TaskToDo } from "../../App.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Title> TODO </Title>
        <MoonIcon />
      </Container>
      <TaskContainer>
        <TaskButton />
        <TaskToDo />
      </TaskContainer>
    </HeaderContainer>
  );
};

export default Header;
