import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const NextButton = styled(RectButton)`
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  height: 56px;
  margin-top: 32px;
`;

export const NextButtonText = styled.Text`
  font-family: "Nunito_800ExtraBold";
  font-size: 16px;
  color: #fff;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.title};
  font-size: 24px;
  font-family: "Nunito_700Bold";
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom-width: 0.8px;
  border-color: ${(props) => props.theme.colors.borderColor};
`;

export const Label = styled.Text`
  color: ${(props) => props.theme.colors.title};
  font-family: "Nunito_600SemiBold";
  margin-bottom: 8px;
`;

export const Comment = styled.Text`
  font-size: 11px;
  color: #8fa7b3;
`;

export const Input = styled.TextInput`
  background-color: ${(props) => props.theme.colors.formBackground};
  color: ${(props) => props.theme.colors.text};
  border-width: 1.4px;
  border-color: ${(props) => props.theme.colors.borderColor};
  border-radius: 20px;
  height: 56px;
  padding: 18px 24px;
  margin-bottom: 16px;
`;

export const SwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
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
