import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableHighlight } from "react-native-gesture-handler";

const availableZipItems = [
  { place: "Hat Yai", code: "90110" },
  { place: "Trang", code: "92000" },
  { place: "Chiangmai", code: "50000" },
  { place: "Khonkaen", code: "40000" },
  { place: "Chonburi", code: "20000" },
  { place: "Bangkok", code: "10200"},
  { place: "Songkhla", code: "90000"},
];

const ZipItem = ({ place, code, navigation }) => (
  <TouchableHighlight
    onPress={() => navigation.navigate("Weather", { zipCode: code })}
  >
    <ImageBackground style={styles.backdrop}>
      <View style={styles.zipItem}>
        <Text style={styles.zipPlace}>{place}</Text>
      </View>
    </ImageBackground>
  </TouchableHighlight>
);

export default function ZipCodeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground source={require("../pic/bg3.gif")} style={styles.backtap}>
      <FlatList
        data={availableZipItems}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
      />
    </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  zipItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
  },
  zipPlace: {
    fontSize: 50,
    color: "white",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    textShadowColor: "black",
  },

  backdrop: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    display: "flex",
    height: 200,
    opacity: 0.5,
    backgroundColor: "#000",
  },
  backtap:{
    width: "100%",
    height: "100%",
  }
});
