import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
  Alert,
} from "react-native";
export default function StudentHome() {
  return (
    <ImageBackground source={require("../images/bg3.png")} resizeMode={"cover"}>
      <View style={styles.background}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
