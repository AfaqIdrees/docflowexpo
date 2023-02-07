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
import { getMyForms } from "./api";
import { GetItem, RemoveItem } from "./asyncStorage";
import DocumentsMenu from "./documents";
export default function StudentHome({ navigation }) {
  const [student, setStudent] = useState({});
  useEffect(() => {
    GetItem("@student")
      .then((item) => {
        setStudent(item);
      })
      .catch((err) => {
        console.error(err);
      });
  });
  return (
    <ImageBackground source={require("../images/bg3.png")} resizeMode={"cover"}>
      <View style={styles.background}>
        <View style={styles.topCard}>
          <Text style={styles.welcomeText}>Welcome {student.firstName}</Text>
          <Text>
            {student.year}-{student.program?.toUpperCase()}-{student.rollNum}
          </Text>
        </View>
        <View style={styles.formDetailCard}>
          <Text style={styles.welcomeText}>Submitted Forms: 4</Text>
          <Text style={styles.welcomeText}>Completed: 2</Text>
          <Text style={styles.welcomeText}>In Progress: 2</Text>
          <TouchableOpacity
            style={{ alignSelf: "flex-end" }}
            onPress={() => {
              navigation.navigate("MyForms");
            }}
          >
            <Text>Details</Text>
          </TouchableOpacity>
        </View>
        <DocumentsMenu navigation={navigation}></DocumentsMenu>
        <TouchableOpacity
          onPress={() => {
            RemoveItem("@student")
              .then((response) => {
                console.log("Logging out");
                navigation.navigate("StudentSignUp");
              })
              .catch((error) => {
                console.log("Couldn't log out", error);
              });
          }}
        >
          <Text>Log out</Text>
        </TouchableOpacity>
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
  },
  topCard: {
    height: 100,
    width: "95%",
    backgroundColor: "white",
    marginTop: 50,
    borderRadius: 20,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "purple",
  },
  formDetailCard: {
    height: 200,
    width: "87%",
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 20,
    elevation: 10,
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
});
