import React, { useState } from "react";
import { Text, ImageBackground, View, StyleSheet } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [forecastInfo, setForecastInfo] = useState({
    main: "main",
    description: "description",
    temp: 0,
  });
  return (
    <ImageBackground source={require("../bg.jpg")} style={styles.backdrop}>
      <View style={styles.container}>
        <Text style={styles.text}>Zip Code is {props.zipCode}</Text>
        <Forecast {...forecastInfo} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.5,
    backgroundColor: "#012",
    width: "100%",
    height: "50%",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    textShadowColor: "black",
    paddingBottom: 10,
  },
});
