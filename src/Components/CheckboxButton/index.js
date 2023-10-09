import styled, { css } from "styled-components";
import React from "react";

const Container = styled.button`
  border-radius: 100px;
  background: ${({ status }) =>
    !status ? "linear-gradient(#e66465, #9198e5)" : "transparent"};
  border: 1px #e3e4f1 solid;
  width: 24px;
  height: 24px;
  margin-right: 24px;
`;

const Checkmark = styled.div`
  transform: rotate(45deg);
  height: 9px;
  width: 4px;
  border-bottom: 2px solid white;
  border-right: 2px solid white;
  margin-left: 9px;
  margin-bottom: 2px;
`;

const Checkbox = ({ onClick, status }) => {
  return (
    <Container onClick={onClick} status={status}>
      {!status && <Checkmark />}
    </Container>
  );
};

export default Checkbox;
