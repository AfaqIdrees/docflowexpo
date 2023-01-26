import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
export default function StudentSignUp() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  if (showSignUp) {
    return (
      <ImageBackground
        source={require("../images/bgGradient1.png")}
        resizeMode={"cover"}
      >
        <View style={styles.background}>
          <View>
            <Image source={require("../images/logo.png")} style={styles.logo} />
          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}> DocFlow</Text>
          </View>
          <View style={styles.formView}>
            <View style={styles.TopButtons}>
              <TouchableOpacity>
                <Text
                  style={styles.button}
                  onPress={() => setShowSignUp(false)}
                >
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.button} onPress={() => setShowSignUp(true)}>
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.firstlastname}>
              <TextInput
                style={styles.textInput}
                placeholder={"First Name"}
                onChangeText={(text) => {
                  setFirstName(text);
                }}
              ></TextInput>
              <TextInput
                style={styles.textInput}
                placeholder={"Last Name"}
                onChangeText={(text) => {
                  setLastName(text);
                }}
              ></TextInput>
            </View>
            <View style={styles.emailView}>
              <TextInput
                style={styles.email}
                placeholder={"example@gmail.com"}
                onChangeText={(text) => {
                  setEmail(text);
                }}
              ></TextInput>
            </View>
            <View style={styles.emailView}>
              <TextInput
                style={styles.email}
                placeholder={"Password"}
                onChangeText={(text) => {
                  setPassword(text);
                }}
                secureTextEntry={true}
              ></TextInput>
            </View>
            <View style={styles.emailView}>
              <TextInput
                style={styles.email}
                placeholder={"Confirm Password"}
                onChangeText={(text) => {
                  setConfirmPassword(text);
                }}
                secureTextEntry={true}
              ></TextInput>
            </View>
            <TouchableOpacity>
              <Text style={styles.SignUpButton}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  } else {
    return (
      <ImageBackground
        source={require("../images/bgGradient1.png")}
        resizeMode={"cover"}
      >
        <View style={styles.background}>
          <View>
            <Image source={require("../images/logo.png")} style={styles.logo} />
          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}> DocFlow</Text>
          </View>
          <View style={styles.formView}>
            <View style={styles.TopButtons}>
              <TouchableOpacity>
                <Text
                  style={styles.button}
                  onPress={() => setShowSignUp(false)}
                >
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.button} onPress={() => setShowSignUp(true)}>
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.emailView}>
              <TextInput
                style={styles.email}
                placeholder={"Enter your email"}
                onChangeText={(text) => {
                  setLoginEmail(text);
                }}
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
              ></TextInput>
            </View>

            <TouchableOpacity>
              <Text style={styles.SignUpButton}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
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
    height: "70%",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 48,
    // elevation: 15,
  },
  TopButtons: {
    top: 20,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#8ecae6",
    width: "auto",
    height: "auto",
  },

  button: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#219ebc",
  },
  firstlastname: {
    flexDirection: "row",
    justifyContent: "space-around",
    top: 40,
  },
  textInput: {
    color: "#8ecae6",
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    width: 150,
    borderRadius: 15,
  },
  emailView: {
    left: 18,
    marginTop: 20,
  },
  email: {
    color: "#8ecae6",
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    width: "90%",
    borderRadius: 15,
    top: 40,
  },
  SignUpButton: {
    backgroundColor: "#219ebc",
    borderRadius: 30,
    padding: 15,
    top: 120,
    width: 150,
    textAlign: "center",
    alignSelf: "center",
    color: "white",
    fontSize: 18,
  },
});
