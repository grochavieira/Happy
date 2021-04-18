import React, { useContext, useEffect, useRef } from "react";
import { Dimensions, Animated } from "react-native";
import { Container, Logo } from "../styles/screens/Home";
import { LinearGradient } from "expo-linear-gradient";
import { ThemeContext } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import themes from "../styles/themes";
import HomeLogo from "../images/HomeLogo/HomeLogo.png";

export default function Home() {
  const { title } = useContext(ThemeContext);
  const navigation = useNavigation();

  function handleNavigateToOrphanagesMap() {
    navigation.navigate("OrphanagesMap");
  }

  const animatedValue = useRef(new Animated.Value(0)).current;
  const Animation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    Animation();
    setTimeout(() => {
      handleNavigateToOrphanagesMap();
    }, 2000);
  }, []);

  return (
    <Container>
      <LinearGradient
        colors={
          title === "light"
            ? [themes.light.colors.primaryLight, themes.light.colors.primary]
            : [themes.dark.colors.primaryLight, themes.dark.colors.primary]
        }
        start={[0, 0]}
        end={[1, 1]}
        style={{
          position: "absolute",
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height + 100,
        }}
      />
      <Animated.View
        style={{
          transform: [
            {
              translateY: animatedValue.interpolate({
                inputRange: [0, 0.5, 0.7, 0.9, 1],
                outputRange: [0, -600, -500, -550, -550],
              }),
            },
          ],
        }}
      >
        <Logo
          style={{
            transform: [
              {
                translateY: 450,
              },
            ],
          }}
          source={HomeLogo}
        />
      </Animated.View>
    </Container>
  );
}
