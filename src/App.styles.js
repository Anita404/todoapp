import styled from "styled-components";

export const Title = styled.h1`
  color: black;
`;

export const TaskToDo = styled.input.attrs({
  type: "text",
  placeholder: "Create a new todo...",
})`
  color: #9495a5;
  font-family: Josefin Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.25px;
  border-color: transparent;
  outline: none;
  float: left;
  margin-top: 23px;
`;

export const TaskButton = styled.button`
  border-radius: 100px;
  background: transparent;
  border-width: 1px;
  border-color: #e3e4f1;
  width: 24px;
  height: 24px;
  margin: 20px;
  float: left;
`;
