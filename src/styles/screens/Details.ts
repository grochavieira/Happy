import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const ImagesContainer = styled.View`
  height: 240px;
`;

export const DetailsContainer = styled.View`
  padding: 24px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.title};
  font-size: 30px;
  font-family: "Nunito_700Bold";
`;

export const Description = styled.Text`
  font-family: "Nunito_600SemiBold";
  color: ${(props) => props.theme.colors.text};
  line-height: 24px;
  margin-top: 16px;
`;

export const MapContainer = styled.View`
  border-radius: 20px;
  overflow: hidden;
  border: 1.2px;
  border-color: ${(props) => props.theme.colors.borderColor};
  margin-top: 40px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const ContactButton = styled(RectButton)`
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 56px;
  margin-top: 40px;
`;

export const ContactButtonText = styled.Text`
  font-family: "Nunito_800ExtraBold";
  color: #fff;
  font-size: 16px;
  margin-left: 16px;
`;

export const RoutesContainer = styled.TouchableOpacity`
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const RoutesText = styled.Text`
  font-family: "Nunito_700Bold";
  color: ${(props) => props.theme.colors.secondary};
`;

export const Separator = styled.View`
  height: 0.8px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.borderColor};
  margin: 40px 0px;
`;

export const ScheduleContainer = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ScheduleItemBlue = styled.View`
  width: 48%;
  padding: 20px;

  background: ${(props) =>
    props.theme.title === "light" ? "#e6f7fb" : "#104b57"};

  border: 1px;
  border-color: ${(props) =>
    props.theme.title === "light" ? "#b3dae2" : "#104b57"};
  border-radius: 20px;
`;

export const ScheduleTextBlue = styled.Text`
  font-family: "Nunito_600SemiBold";
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;

  color: #5c8599;
`;

export const ScheduleItemGreen = styled.View`
  width: 48%;
  padding: 20px;

  background: ${(props) =>
    props.theme.title === "light" ? "#EDFFF6" : "#0b3b23"};
  border: 1px;
  border-color: ${(props) =>
    props.theme.title === "light" ? "#A1E9C5" : "#0b3b23"};
  border-radius: 20px;
`;

export const ScheduleTextGreen = styled.Text`
  font-family: "Nunito_600SemiBold";
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;

  color: #37c77f;
`;

export const ScheduleItemRed = styled.View`
  width: 48%;
  padding: 20px;

  background: ${(props) =>
    props.theme.title === "light" ? "#FEF6F9" : "#5e132e"};
  border: 1px;
  border-color: ${(props) =>
    props.theme.title === "light" ? "#FFBCD4" : "#5e132e"};
  border-radius: 20px;
`;

export const ScheduleTextRed = styled.Text`
  font-family: "Nunito_600SemiBold";
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;

  color: #ff669d;
`;
