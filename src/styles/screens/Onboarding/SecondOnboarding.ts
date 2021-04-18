import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.primaryDark};
  font-family: "Nunito_800ExtraBold";
  font-size: 30px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 10px;
  text-align: right;
  line-height: 35px;
`;
