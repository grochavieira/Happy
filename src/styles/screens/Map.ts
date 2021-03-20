import styled from "styled-components/native";

import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
`;

export const CalloutContainer = styled.View`
  width: 160px;
  height: 46px;
  padding: 0px 16px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  justify-content: center;
`;

export const CalloutText = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: 14px;
  font-family: "Nunito_700Bold";
`;

export const Footer = styled.View`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 32px;

  background-color: ${(props) => `${props.theme.colors.background}`};
  border-radius: 20px;
  height: 56px;
  padding-left: 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  elevation: 3;
`;

export const FooterText = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: "Nunito_700Bold";
`;

export const CreateOrphanage = styled(RectButton)`
  width: 56px;
  height: 56px;
  background-color: ${(props) => props.theme.colors.primaryLight};
  border-radius: 20px;

  justify-content: center;
  align-items: center;
`;
