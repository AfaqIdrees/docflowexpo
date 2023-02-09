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
import { GetMyForms } from "./api";
import { GetItem, RemoveItem } from "./asyncStorage";
import DocumentsMenu from "./documents";
export default function StudentHome({ navigation }) {
  const [student, setStudent] = useState({});
  const [newForms, setNewForms] = useState(0);
  const [inProgress, setInProgress] = useState(0);
  const [complete, setComplete] = useState(0);
  const [totalForms, setTotalForms] = useState(0);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    GetItem("@student")
      .then((item) => {
        setStudent(item);
        let newForm = 0;
        let inProgressForm = 0;
        let completeForm = 0;
        let totalForm = 0;
        GetMyForms().then((response) => {
          response.forEach((item) => {
            totalForm += 1;
            if (item.status == "New") {
              newForm += 1;
            } else if (item.status == "In Progress") {
              inProgressForm += 1;
            } else if (item.status == "Completed") {
              completeForm += 1;
            }
          });
          setNewForms(newForm);
          setInProgress(inProgressForm);
          setComplete(completeForm);
          setTotalForms(totalForm);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    GetItem("@student")
      .then((item) => {
        setStudent(item);
        let newForm = 0;
        let inProgressForm = 0;
        let completeForm = 0;
        let totalForm = 0;
        GetMyForms().then((response) => {
          response.forEach((item) => {
            totalForm += 1;
            if (item.status == "New") {
              newForm += 1;
            } else if (item.status == "In Progress") {
              inProgressForm += 1;
            } else if (item.status == "Completed") {
              completeForm += 1;
            }
          });
          setNewForms(newForm);
          setInProgress(inProgressForm);
          setComplete(completeForm);
          setTotalForms(totalForm);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, [refresh]);

  return (
    <ImageBackground source={require("../images/bg3.png")} resizeMode={"cover"}>
      <View style={styles.background}>
        <View style={styles.topCard}>
          <TouchableOpacity
            onPress={() => {
              setRefresh(!refresh);
            }}
          >
            <Text style={styles.welcomeText}>
              Welcome {student.firstName + " " + student.lastName}
            </Text>
          </TouchableOpacity>

          <Text>
            {student.year}-{student.program?.toUpperCase()}-{student.rollNum}
          </Text>

          <TouchableOpacity
            style={styles.logOutButton}
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
            <Text style={{ color: "white" }}>Log out</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formDetailCard}>
          <Text style={styles.welcomeText}>Submitted Forms: {totalForms}</Text>
          <Text style={styles.welcomeText}>New: {newForms}</Text>
          <Text style={styles.welcomeText}>Completed: {complete}</Text>
          <Text style={styles.welcomeText}>In Progress: {inProgress}</Text>
          <TouchableOpacity
            style={{
              ...styles.logOutButton,
              alignSelf: "flex-end",
              backgroundColor: "#579BB1",
            }}
            onPress={() => {
              navigation.navigate("MyForms");
            }}
          >
            <Text style={{ color: "white" }}>Details</Text>
          </TouchableOpacity>
        </View>
        <DocumentsMenu navigation={navigation} />
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
    color: "#645CBB",
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
  logOutButton: {
    backgroundColor: "#EB455F",
    padding: 5,
    alignSelf: "flex-end",
    right: 20,
    borderRadius: 10,
  },
});
