import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  .leaflet-container {
    z-index: 5;
  }
`;

export const Aside = styled.aside`
  width: 44rem;
  background: linear-gradient(
    329.54deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.secondary} 100%
  );
  padding: 8rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  h2 {
    font-size: 4rem;
    font-weight: 80rem;
    line-height: 4.2rem;
    margin-top: 6.4rem;
  }

  p {
    line-height: 2.8rem;
    margin-top: 2.4rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  line-height: 2.4rem;

  strong {
    font-weight: 800;
  }
`;

export const CreateOrphanage = styled.a`
  position: absolute;

  right: 4rem;
  bottom: 4rem;

  width: 6.4rem;
  height: 6.4rem;
  background: #15c3d6;
  border-radius: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  transition: background-color 0.2s;

  &:hover {
    background: #17d6eb;
  }
`;
