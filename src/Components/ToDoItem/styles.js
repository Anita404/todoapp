import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 0px;
  background-color: ${({ theme }) => theme.containerColor};
  display: flex;
  border-radius: 5px;
  align-items: center;
  border-bottom: 1px ${({ theme }) => theme.brdColor} solid;
  padding: 20px 24px;
  color: ${({ theme }) => theme.txtColor};
  transition: all 0.5s linear;

  &:first-child {
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const FinishedActivity = styled.div`
  color: #d1d2da;
  text-decoration-line: line-through;
`;
