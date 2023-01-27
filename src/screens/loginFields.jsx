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
import { O2A } from "object-to-array-convert";
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

export default function LoginFields({ setShowSignUp }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Object.keys(obj).forEach((key) => {
  //   console.log(`key: ${key}, value: ${obj[key].username}`);
  // });

  return (
    <FadeInView style={styles.background}>
      <View>
        <Image source={require("../images/logo.png")} style={styles.logo} />
      </View>
      <View style={styles.headingView}>
        <Text style={styles.heading}> DocFlow</Text>
      </View>
      <View style={styles.formView}>
        <View style={[styles.emailView, { marginTop: 20 }]}>
          <TextInput
            style={[styles.email, { marginTop: 20 }]}
            placeholder={"Enter your email"}
            onChangeText={(text) => {
              setLoginEmail(text);
            }}
            placeholderTextColor="#FFFF"
          ></TextInput>
        </View>
        <View style={styles.emailView}>
          <TextInput
            style={styles.email}
            placeholder={"Password"}
            onChangeText={(text) => {
              setLoginPassword(text);
            }}
            secureTextEntry={true}
            placeholderTextColor="#FFFF"
          ></TextInput>
        </View>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.SignUpButton}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setShowSignUp(true);
        }}
        style={styles.bottomText}
      >
        <Text style={{ color: "#FFFF" }}>Don't have an account?</Text>
      </TouchableOpacity>
    </FadeInView>
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
    top: 70,
  },
  headingView: {
    top: 75,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  formView: {
    top: 90,
    height: 300,
    width: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 48,
  },

  emailView: {
    left: 18,
  },
  email: {
    color: "#8ecae6",
    borderColor: "white",
    borderWidth: 1,
    padding: 10,
    width: "90%",
    borderRadius: 15,
    marginTop: 20,
  },
  SignUpButton: {
    backgroundColor: "#5BCC94",
    borderRadius: 30,
    padding: 15,
    width: 120,
    textAlign: "center",
    color: "white",
    fontSize: 18,
    height: "auto",
    marginTop: -40,
    marginLeft: 210,
  },
  bottomText: {
    top: 50,
    marginLeft: 210,
  },
});
