import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Forecast(props) {
  return (
    <View>
      <Text style={styles.layout}>{props.main}</Text>
      <Text style={styles.layout2}>{props.description}</Text>
      <Text style={styles.layout}>{props.temp} °C</Text>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    color: "white",
    textAlign: "center",
    fontSize: 45,
    paddingBottom: 25,
    fontFamily: "Arial",
  },
  layout2: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    paddingBottom: 25,
    fontFamily: "Arial",
  },
});
