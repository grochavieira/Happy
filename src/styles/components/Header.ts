import styled from "styled-components/native";

export const Container = styled.View`
  padding: 24px;
  background-color: ${(props) => props.theme.colors.background};
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.colors.borderColor};
  padding-top: 44px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: "Nunito_600SemiBold";
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  margin-right: 10px;
`;
