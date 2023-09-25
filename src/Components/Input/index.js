import styled from "styled-components";

const Input = styled.input.attrs({
  type: "text",
  placeholder: "Create a new todo...",
})`
  width: 100%;
  color: #9495a5;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.25px;
  border-color: transparent;
  outline: none;
`;

export default Input;
