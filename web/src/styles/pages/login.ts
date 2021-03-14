import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const PanelSection = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    329.54deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.primaryLight} 100%
  );

  font-size: 2rem;

  strong {
    margin-top: 5rem;
  }
`;

export const LoginSection = styled.div`
  width: 45%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 8rem;
`;

export const RememberContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  color: ${(props) => props.theme.colors.text};
  margin-top: 3rem;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;

    input {
      margin-right: 1rem;
      width: 2.5rem;
      height: 2.5rem;
      cursor: pointer;
    }
  }
`;

export const GoBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 4rem;
  right: 5rem;

  border: 0;
  border-radius: 15px;
  padding: 1.5rem;

  color: ${(props) => props.theme.colors.green};
  background-color: rgba(0, 0, 0, 0.05);

  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
