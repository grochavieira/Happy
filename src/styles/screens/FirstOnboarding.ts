import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.primaryDark};
  font-family: "Nunito_800ExtraBold";
  font-size: 45px;
  margin-left: 50px;
  margin-right: 20px;
  margin-bottom: 10px;
  text-align: left;
  line-height: 50px;
`;

export const Description = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: "Nunito_700Bold";
  font-size: 20px;
  margin: 0px 50px 10px 50px;
  text-align: left;
`;

export const ImageContainer = styled.Image``;

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
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const InactiveOnboarding = styled.View`
  width: 15px;
  height: 5px;
  border-radius: 10px;
  margin-left: 5px;
  background-color: ${(props) => props.theme.colors.text};
`;

export const GoForward = styled.TouchableOpacity`
  background-color: ${(props) => `${props.theme.colors.primaryLight}33`};
  padding: 20px;
  border-radius: 20px;
`;
