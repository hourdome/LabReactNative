import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Forecast(props) {
 
  return (
    <View>
    
      <Text style={styles.layout4}>{props.name}</Text>
      <Text style={styles.layout}>{props.main}</Text>
      <Text style={styles.layout2}>{props.description}</Text>
      <Text style={styles.layout3}>{props.temp}°</Text>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    paddingBottom: 5,
    fontFamily: "Avenir-Light",
  },
  layout2: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    paddingBottom: 10,
    fontFamily: "Avenir-Light",
  },
  layout3: {
    color: "white",
    textAlign: "center",
    fontSize: 150,
    paddingBottom: 10,
    fontFamily: "AvenirNext-UltraLight",
  },
  layout4: {
    color: "white",
    textAlign: "center",
    fontSize: 70,
    paddingBottom: 5,
    fontFamily: "Avenir-Light",
  },
});
