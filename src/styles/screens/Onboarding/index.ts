import styled from "styled-components/native";

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  padding: 0px 50px 0px 50px;
`;

export const CurrentOnboarding = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ActiveOnboarding = styled.View`
  width: 20px;
  height: 5px;
  margin-left: 2.5px;
  margin-right: 2.5px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const InactiveOnboarding = styled.View`
  width: 15px;
  height: 5px;
  border-radius: 10px;
  margin-left: 2.5px;
  margin-right: 2.5px;
  background-color: ${(props) => props.theme.colors.text};
`;
