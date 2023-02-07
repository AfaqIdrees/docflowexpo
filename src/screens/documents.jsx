import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

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
            <View style={styles.icon}></View>
            <Text style={{ textAlign: "center" }}>New Form1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ScholarshipForm");
          }}
        >
          <View style={styles.square}>
            <View style={styles.icon}></View>
            <Text style={{ textAlign: "center" }}>New Form2</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ ...styles.container, marginTop: -150 }}>
        <TouchableOpacity>
          <View style={styles.square}>
            <View style={styles.icon}></View>
            <Text style={{ textAlign: "center" }}>New Form3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.square}>
            <View style={styles.icon}></View>
            <Text style={{ textAlign: "center" }}>New Form4</Text>
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
  },
  square: {
    backgroundColor: "white",
    width: 170,
    height: 130,
    margin: 14,
    borderRadius: 10,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 60,
  },
  icon: {
    height: 60,
    width: 60,
    backgroundColor: "pink",
    position: "absolute",
    top: -10,
    left: -10,
    borderRadius: 100,
    elevation: 5,
  },
});
