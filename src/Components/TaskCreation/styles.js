import styled from "styled-components";

export const TaskContainer = styled.div`
  width: 540px;
  padding: 20px 24px;
  background-color: ${({ theme }) => theme.containerColor};
  display: flex;
  z-index: 1;
  border-radius: 5px;
  margin-top: 35px;
  align-items: center;
  transition: all 0.5s linear;
`;
