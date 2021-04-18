import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.cancel};
`;

export const CancelBlock = styled.View`
  background-color: #fff;
  padding: 20px 30px;
  border-radius: 15px;
  margin-bottom: 20px;
`;

export const CancelBlockText = styled.Text`
  color: ${(props) => props.theme.colors.cancel};
  font-family: "Nunito_700Bold";
  font-size: 25px;
  text-align: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: "Nunito_800ExtraBold";
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Description = styled.Text`
  color: #fff;
  font-family: "Nunito_700Bold";
  font-size: 20px;
  margin: 0px 40px 10px 40px;
  text-align: center;
`;

export const ConfirmContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
`;

export const ConfirmButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.cancelDark};
  padding: 20px 50px;
  border-radius: 15px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const ConfirmButtonText = styled.Text`
  color: #fff;
  font-family: "Nunito_700Bold";
  font-size: 15px;
  text-align: center;
`;
