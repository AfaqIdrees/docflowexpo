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
import { Picker } from "@react-native-picker/picker";
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

export default function SignUpFields({ setShowSignUp }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [year, setSelectedYear] = useState();
  const [program, setSelectedProgram] = useState();
  return (
    <FadeInView style={styles.background}>
      <View>
        <Image source={require("../images/logo.png")} style={styles.logo} />
      </View>
      <View style={styles.headingView}>
        <Text style={styles.heading}> DocFlow</Text>
      </View>
      <View style={styles.formView}>
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
        <View style={styles.rollNum}>
          <Text>Reg Num : </Text>
          <Picker
            selectedValue={year}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setSelectedYear(itemValue)}
          >
            <Picker.Item label="2015" value="2015" />
            <Picker.Item label="2016" value="2016" />
            <Picker.Item label="2017" value="2017" />
            <Picker.Item label="2018" value="2018" />
            <Picker.Item label="2019" value="2019" />
            <Picker.Item label="2020" value="2020" />
            <Picker.Item label="2021" value="2021" />
            <Picker.Item label="2022" value="2022" />
            <Picker.Item label="2023" value="2023" />
          </Picker>

          <Picker
            selectedValue={program}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedProgram(itemValue)
            }
          >
            <Picker.Item label="BBIT" value="bbit" />
            <Picker.Item label="BBA" value="bba" />
            <Picker.Item label="MBA" value="mba" />
          </Picker>

          <TextInput
            placeholder="00"
            inputMode={"numeric"}
            keyboardType={"number-pad"}
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
            onChange={(text) => {
              console.log(text);
              setConfirmPassword(text);
            }}
            secureTextEntry={true}
          ></TextInput>
        </View>
      </View>
      <TouchableOpacity style={{ top: -130 }}>
        <Text style={styles.SignUpButton}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomText}
        onPress={() => setShowSignUp(false)}
      >
        <Text style={{ color: "#8ecae6" }}>Already have an Account</Text>
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
    marginTop: 100,
  },
  headingView: {
    marginTop: 15,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  formView: {
    marginTop: 40,
    height: 500,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 48,
  },
  button: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#219ebc",
  },
  firstlastname: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
  },
  rollNum: {
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
    flexDirection: "row",
    width: "90%",
    marginLeft: 20,
  },
  picker: {
    width: 100,
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
  },
  email: {
    color: "#8ecae6",
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    width: "90%",
    borderRadius: 15,
    marginTop: 20,
  },
  SignUpButton: {
    backgroundColor: "#219ebc",
    borderRadius: 30,
    padding: 15,
    width: 120,
    textAlign: "center",
    alignSelf: "center",
    color: "white",
    fontSize: 18,
    marginLeft: 210,
  },
  bottomText: {
    top: -90,
    marginLeft: 210,
  },
});
