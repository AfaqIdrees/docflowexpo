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
import { CreateLeave, CreateScholarshipForm } from "./api";
export default function ScholarshipForm({ navigation }) {
  const [student, setStudent] = useState({});
  const [cgpa, setCgpa] = useState("");
  const [semester, setSemester] = useState("");
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
            Scholarship Form
          </Text>
          <Text>CGPA</Text>
          <TextInput
            placeholder="Your current cgpa"
            inputMode={"numeric"}
            keyboardType={"number-pad"}
            onChangeText={(value) => setCgpa(value)}
          ></TextInput>
          <Text>Semester</Text>
          <TextInput
            placeholder="Your current semester"
            inputMode={"numeric"}
            keyboardType={"number-pad"}
            onChangeText={(value) => setSemester(value)}
          ></TextInput>
          <Text>Reason for application</Text>
          <TextInput
            multiline={true}
            numberOfLines={5}
            onChangeText={(value) => setDescription(value)}
            placeholder="Reason"
          />
          <TouchableOpacity
            style={styles.SignUpButton}
            onPress={() => {
              console.log(student);
              CreateScholarshipForm(
                { student },
                cgpa,
                semester,
                description
              ).then((result) => {
                console.log(result);
                if (result) {
                  Alert.alert("Scholarship form submitted successfully!");
                } else {
                  Alert.alert("Could not submit scholarship form, try again.");
                }
              });
            }}
          >
            <Text style={{ color: "white" }}>Submit</Text>
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
