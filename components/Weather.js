import React, { useState, useEffect } from "react";
import { Text, ImageBackground, View, StyleSheet } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [forecastInfo, setForecastInfo] = useState({
    main: "-",
    description: "-",
    temp: 0,
    name: "-",
  });

  useEffect(() => {
    console.log(`fetching data with zipCode = ${props.zipCode}`);
    if (props.zipCode) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=3806e699dd8805588f1d2449cca884fb`
      )
        .then((response) => response.json())
        .then((json) => {
          setForecastInfo({
            main: json.weather[0].main,
            description: json.weather[0].description,
            temp: json.main.temp,
            name: json.name,
          });
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  }, [props.zipCode]);

  return (
    <ImageBackground source={require("../pic/bg.jpg")} style={styles.backdrop}>
      <View style={styles.container}>
        {/* <Text style={styles.text}></Text> */}
        <Forecast {...forecastInfo} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.5,
    backgroundColor: "#000000",
    width: "100%",
    height: "100%",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    textShadowColor: "black",
    paddingBottom: 10,
  },
});
