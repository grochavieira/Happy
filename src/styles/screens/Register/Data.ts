import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const ImagesInput = styled.TouchableOpacity`
  background-color: ${(props) => `${props.theme.colors.formBackground}80`};
  border-style: dashed;
  border-color: #96d2f0;
  border-width: 1.4px;
  border-radius: 20px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;
