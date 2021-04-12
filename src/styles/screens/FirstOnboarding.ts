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
