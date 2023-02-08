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
import { CreateCustomForm } from "./api";
export default function CustomForm({ navigation }) {
  const [student, setStudent] = useState({});
  const [reason, setReason] = useState("");
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
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              borderBottomWidth: 1,
              paddingBottom: 5,
              marginBottom: 15,
            }}
          >
            Custom Form
          </Text>
          <Text>Title</Text>
          <TextInput
            placeholder="State a short title of the form"
            onChangeText={(value) => setReason(value)}
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
              CreateCustomForm({ student }, reason, description).then(
                (result) => {
                  console.log(result);
                  if (result) {
                    Alert.alert("Custom form submitted successfully!");
                  } else {
                    Alert.alert("Could not submit custom form, try again.");
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
