import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  position: absolute;

  align-items: center;
  justify-content: center;

  background-color: ${(props) => `${props.theme.colors.primary}dd`};
  z-index: 1000;
`;

export const Information = styled.Text`
  color: #fff;
  font-family: "Nunito_800ExtraBold";
  font-size: 20px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 10px;
  text-align: center;
`;
