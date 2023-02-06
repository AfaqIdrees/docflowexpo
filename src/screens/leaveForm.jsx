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
import { GetItem } from "./asyncStorage";
import { CreateLeave } from "./api";
export default function LeaveForm({ navigation }) {
  const [student, setStudent] = useState({});
  const [reason, setReason] = useState("");
  const [days, setDays] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    GetItem("@student")
      .then((item) => {
        setStudent(item);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <ImageBackground source={require("../images/bg3.png")} resizeMode={"cover"}>
      <View style={styles.background}>
        <View style={styles.formArea}>
          <Text>Reason</Text>
          <TextInput
            placeholder="State Reason for leave"
            onChangeText={(value) => setReason(value)}
          ></TextInput>
          <Text>Number of Days</Text>
          <TextInput
            placeholder="Number of days"
            inputMode={"numeric"}
            keyboardType={"number-pad"}
            onChangeText={(value) => setDays(value)}
          ></TextInput>
          <Text>Starting date from</Text>
          <TextInput
            placeholder="Starting from date (DD-MM-YYYY)"
            keyboardType={"number-pad"}
            onChangeText={(value) => setDate(value)}
          ></TextInput>
          <Text>Description</Text>
          <TextInput
            multiline={true}
            numberOfLines={5}
            onChangeText={(value) => setDescription(value)}
            placeholder="Description"
          />
          <TouchableOpacity
            style={styles.SignUpButton}
            onPress={() => {
              console.log(student);
              CreateLeave({ student }, reason, days, date, description).then(
                (result) => {
                  console.log(result);
                  if (result) {
                    Alert.alert("Leave form submitted successfully!");
                  } else {
                    Alert.alert("Could not submit leave form, try again.");
                  }
                }
              );
            }}
          >
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingTop: 50,
  },
  formArea: {
    backgroundColor: "white",
    height: 400,
    width: "95%",
    borderRadius: 30,
    padding: 20,
  },
  SignUpButton: {
    backgroundColor: "#5BCC94",
    borderRadius: 30,
    padding: 15,
    width: 120,
    alignItems: "center",
    color: "white",
    fontSize: 18,
    height: "auto",
    alignSelf: "center",
    marginTop: 50,
  },
});
