import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
  width: 540px;
  justify-content: space-between;
  margin-top: 70px;
`;

export const HeaderContainer = styled.div`
  align-items: center;
  flex-direction: column;
  z-index: 1;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 15px;
`;

export const ThemeToggler = styled.div`
  cursor: pointer;
`;
