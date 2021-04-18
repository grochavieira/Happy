import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.success};
`;

export const Title = styled.Text`
  color: #fff;
  font-family: "Nunito_800ExtraBold";
  font-size: 45px;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  line-height: 50px;
`;

export const Description = styled.Text`
  color: #fff;
  font-family: "Nunito_700Bold";
  font-size: 20px;
  margin: 0px 40px 10px 40px;
  text-align: center;
`;

export const OkButton = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 20px 50px;
  border-radius: 15px;
  background-color: ${(props) => `${props.theme.colors.successDark}`};
`;

export const OkButtonText = styled.Text`
  color: #fff;
  font-family: "Nunito_700Bold";
  font-size: 15px;
  text-align: center;
`;
