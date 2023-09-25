import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 0px;
  background-color: #fff;
  display: flex;
  border-radius: 5px;
  align-items: center;
  border-bottom: 1px #e3e4f1 solid;
  padding: 20px 24px;
  color: #494c6b;

  &:first-child {
  }

  &:last-child {
    border-bottom: none;
  }
`;
