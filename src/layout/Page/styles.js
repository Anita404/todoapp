import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 280px;
  position: absolute;
  top: 0;
  object-fit: cover;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 280px;
  position: absolute;
  top: 0;
  background: linear-gradient(225deg, #5596ff 0%, #ac2deb 100%);
  opacity: 0.5;
`;
