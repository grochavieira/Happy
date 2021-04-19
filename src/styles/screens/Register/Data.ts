import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
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

export const ImageContainer = styled.View`
  position: relative;
`;

export const DeleteImage = styled.TouchableOpacity`
  position: absolute;
  top: 0px;
  right: 7px;
  background-color: #fff;
  border-radius: 5px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 7px;
`;

export const DeleteImageText = styled.Text`
  color: #ff3366;
  font-family: "Nunito_700Bold";
  font-size: 15px;
  text-align: center;
`;
