import React from "react";
import { BackgroundImage, Container, Overlay } from "./styles";
import bg from "../../Icons/bg.png";
import { TaskContainer } from "../../TaskCreation/styles";

const Body = ({ children }) => {
  return (
    <>
      <Container>
        <BackgroundImage src={bg} />
        <Overlay />
        {children}
      </Container>
    </>
  );
};

export default Body;
