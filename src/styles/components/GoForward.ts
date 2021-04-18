import styled from "styled-components/native";

export const Container = styled.View``;

export const NextButton = styled.TouchableOpacity`
  background-color: ${(props) => `${props.theme.colors.primaryLight}33`};
  padding: 20px;
  border-radius: 20px;
`;
