import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ThemeSwitcher = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
  margin-top: 40px;
  margin-right: 20px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.gradientText};
  font-family: "Nunito_800ExtraBold";
  font-size: 50px;
  margin-left: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Description = styled.Text`
  color: ${(props) => props.theme.colors.gradientText};
  font-family: "Nunito_700Bold";
  font-size: 20px;
  margin: 30px 30px 10px 30px;
  text-align: center;
`;

export const NextButton = styled.TouchableOpacity`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 20px;
  position: absolute;
  bottom: 0;
  margin-bottom: 40px;
`;

export const Logo = styled.Image``;
