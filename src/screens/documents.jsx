import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";

export default function DocumentsMenu({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("LeaveForm");
          }}
        >
          <View style={styles.square}>
            <View style={styles.icon}>
              <AntDesign name="form" size={30} color="white" />
            </View>
            <Text style={{ textAlign: "center" }}>Leave Form</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ScholarshipForm");
          }}
        >
          <View style={styles.square}>
            <View style={styles.icon}>
              <Entypo name="graduation-cap" size={30} color="white" />
            </View>
            <Text style={{ textAlign: "center" }}>Scholarship Form</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ ...styles.container, marginTop: -50 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("FeeInstallmentFrom");
          }}
        >
          <View style={styles.square}>
            <View style={styles.icon}>
              <FontAwesome5 name="money-check-alt" size={25} color="white" />
            </View>
            <Text style={{ textAlign: "center" }}>Fee Installment Form</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CustomForm");
          }}
        >
          <View style={styles.square}>
            <View style={styles.icon}>
              <MaterialIcons
                name="dashboard-customize"
                size={30}
                color="white"
              />
            </View>
            <Text style={{ textAlign: "center" }}>Custom Form</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
    width: "90%",
    marginTop: 20,
  },
  square: {
    backgroundColor: "white",
    width: 150,
    height: 130,
    margin: 14,
    borderRadius: 10,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 60,
    marginTop: 20,
  },
  icon: {
    height: 60,
    width: 60,
    backgroundColor: "#3F979B",
    position: "absolute",
    top: -10,
    left: -10,
    borderRadius: 100,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
