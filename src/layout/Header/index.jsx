import React, { useState } from "react";
import { Container, HeaderContainer, ThemeToggler, Title } from "./styles";
import MoonIcon from "../../Icons/MoonIcon.svg";
import SunIcon from "../../Icons/SunIcon.svg";
import TaskCreation from "../../Components/TaskCreation";

const Header = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  return (
    <HeaderContainer>
      <Container>
        <Title> TODO </Title>
        <ThemeToggler onClick={toggleTheme}>
          {theme == "dark" ? <SunIcon /> : <MoonIcon />}
        </ThemeToggler>
      </Container>
      <TaskCreation />
    </HeaderContainer>
  );
};

export default Header;
