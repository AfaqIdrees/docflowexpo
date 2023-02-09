import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { DeleteForm, GetAllForms } from "./api";
export default function AllForms({ navigation }) {
  const [forms, setForms] = useState([{}]);
  const [refreshForms, setRefreshForms] = useState(false);

  useEffect(() => {
    GetAllForms().then((response) => {
      setForms(response);
      console.log(response);
    });
  }, [refreshForms]);
  return (
    <View style={styles.background}>
      <TouchableOpacity onPress={() => setRefreshForms(!refreshForms)}>
        <Text style={{ color: "white" }}>Refresh</Text>
      </TouchableOpacity>
      <ScrollView style={{ width: "100%" }}>
        {forms.map((form, index) => {
          return (
            <View style={styles.formCard} key={form.formId}>
              <Text>Form type: {form.type}</Text>
              <Text>
                Student Name: {form.firstName} {form.lastName}
              </Text>
              <Text>
                Reg No:{" "}
                {form.year +
                  " " +
                  form.program?.toUpperCase() +
                  " " +
                  form.rollNum}
              </Text>
              <Text>Status: {form.status}</Text>
              <View style={styles.bottomButtons}>
                <TouchableOpacity
                  style={{
                    ...styles.viewButton,
                    right: "100%",
                    backgroundColor: "red",
                  }}
                  onPress={() => {
                    DeleteForm(form.formId).then((result) => {
                      console.log(result);
                      if (result) {
                        Alert.alert("Form Deleted successfully!");
                        setRefreshForms(!refreshForms);
                      } else {
                        Alert.alert("Could not delete form, try again.");
                      }
                    });
                  }}
                >
                  <Text style={{ color: "white" }}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.viewButton}
                  onPress={() => {
                    navigation.navigate("ViewForm", {
                      ...form,
                      adminView: true,
                    });
                  }}
                >
                  <Text style={{ color: "white" }}>View</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    minHeight: 500,
    maxHeight: 600,
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingTop: 30,
  },
  formCard: {
    width: "95%",
    height: 140,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    marginTop: 30,
    borderRadius: 20,
    padding: 10,
    alignSelf: "center",
  },
  viewButton: {
    alignSelf: "flex-end",
    backgroundColor: "#069A8E",
    marginRight: 15,
    top: 10,
    borderRadius: 10,
    height: 35,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  bottomButtons: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
  },
});
