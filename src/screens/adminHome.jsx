import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { GetMyForms } from "./api";
import AllForms from "./getAllForms";
export default function AdminHome({ navigation }) {
  const [student, setStudent] = useState({});
  const [newForms, setNewForms] = useState(0);
  const [inProgress, setInProgress] = useState(0);
  const [complete, setComplete] = useState(0);
  const [totalForms, setTotalForms] = useState(0);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    GetMyForms().then((response) => {});
  }, []);

  return (
    <ImageBackground source={require("../images/bg3.png")} resizeMode={"cover"}>
      <View style={styles.background}>
        <View style={styles.topCard}>
          <TouchableOpacity
            onPress={() => {
              setRefresh(!refresh);
            }}
          >
            <Text style={styles.welcomeText}>Welcome Admin!</Text>
          </TouchableOpacity>

          <Text>Hope you have a good day!</Text>

          <TouchableOpacity
            style={styles.logOutButton}
            onPress={() => {
              navigation.navigate("HomeScreen");
            }}
          >
            <Text style={{ color: "white" }}>Log out</Text>
          </TouchableOpacity>
        </View>
        <AllForms navigation={navigation}></AllForms>
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
