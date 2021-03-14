import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;

  p {
    color: ${(props) => props.theme.colors.text};
    margin-top: -2rem;
    margin-bottom: 3rem;
  }

  button {
    margin-top: 2.5rem;
  }
`;

export const InputBlock = styled.div`
  label {
    display: flex;
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 0.8rem;
    line-height: 2.4rem;

    span {
      font-size: 1.4rem;
      color: ${(props) => props.theme.colors.title};
      margin-left: 2.4rem;
      line-height: 2.4rem;
    }
  }

  div {
    position: relative;
    display: flex;
  }

  div input {
    width: 100%;

    background: ${(props) => props.theme.colors.inputBackground};
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    border-radius: 2rem;
    outline: none;
    color: ${(props) => props.theme.colors.title};
  }

  input {
    height: 6.4rem;
    padding: 0 1.6rem;
  }

  svg {
    position: absolute;
    top: 33%;
    right: 2rem;
    color: ${(props) => props.theme.colors.text};
    cursor: pointer;
  }
`;
