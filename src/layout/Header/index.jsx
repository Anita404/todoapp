import React, { useContext } from "react";
import { Container, HeaderContainer, ThemeToggler, Title } from "./styles";
import MoonIcon from "../../Icons/MoonIcon.svg";
import SunIcon from "../../Icons/SunIcon.svg";
import TaskCreation from "../../Components/TaskCreation";
import { ThemeContext } from "../../theme";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

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
