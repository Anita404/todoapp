import React from "react";
import { Container, HeaderContainer, Title } from "./styles";
import MoonIcon from "../../Icons/MoonIcon.svg";
import TaskCreation from "../../Components/TaskCreation";

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Title> TODO </Title>
        <MoonIcon />
      </Container>
      <TaskCreation />
    </HeaderContainer>
  );
};

export default Header;
