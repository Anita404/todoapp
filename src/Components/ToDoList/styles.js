import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  width: 587px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 20px;
  color: #9495a5;
`;

export const FilterButton = styled.button`
  color: #9495a5;
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
