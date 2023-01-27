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
} from "react-native";

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0.4)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Binds directly
        transform: [
          {
            translateX: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [150, 0], // 0 : 150, 0.5 : 75, 1 : 0
            }),
          },
        ],
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../images/bgGradient1.png")}
      resizeMode={"cover"}
    >
      <FadeInView style={styles.background}>
        <View>
          <Image source={require("../images/logo.png")} style={styles.logo} />
        </View>
        <View style={styles.headingView}>
          <Text style={styles.heading}> DocFlow</Text>
        </View>

        <TouchableOpacity onPress={() => {}} style={styles.LogInButton}>
          <Text style={styles.buttonText}>Login as Admin</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("StudentSignUp");
          }}
          style={styles.LogInButton}
        >
          <Text style={styles.buttonText}>Login as Student</Text>
        </TouchableOpacity>
      </FadeInView>
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
  logo: {
    width: 100,
    height: 100,
  },
  headingView: {
    top: 25,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },

  LogInButton: {
    backgroundColor: "#5BCC94",
    borderRadius: 30,
    padding: 15,
    width: 320,
    textAlign: "center",
    marginTop: 30,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    top: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 28,
  },
  bottomText: {
    top: 50,
    marginLeft: 210,
  },
});
