import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
  border-radius: 5px;
  background: ${({ theme }) => theme.containerColor};
  box-shadow: ${({ theme }) => theme.boxShadow};
  width: 587px;
  transition: all 0.5s linear;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 20px;
  color: #9495a5;
`;

export const FilterButton = styled.button`
  color: ${({ theme }) => theme.mainTextColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.194px;
  cursor: pointer;
`;

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 19px;
`;

export const FooterItem = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.194px;
`;

export const ClearItems = styled(FooterItem)`
  cursor: pointer;
`;

export const ToDoListContainer = styled.div`
  max-height: 330px;
  overflow-y: scroll;
`;
