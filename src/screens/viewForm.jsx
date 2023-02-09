import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import { UpdateForm } from "./api";

export default function ViewForm({ route, navigation }) {
  const [form, setForm] = useState([{ type: "ABC" }]);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("New");
  useEffect(() => {
    setForm(route.params);
    setComment(route.params.adminComments);
    setStatus(route.params.status);
  }, []);
  return (
    <ImageBackground source={require("../images/bg3.png")} resizeMode={"cover"}>
      <View style={styles.background}>
        {(() => {
          if (form.type == "leave") {
            return (
              <View style={styles.leaveForm}>
                <Text
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 25,
                  }}
                >
                  Leave Form
                </Text>
                <Text style={styles.formText}>
                  Student Name: {form.firstName} {form.lastName}
                </Text>
                <Text style={styles.formText}>
                  Reg No:{" "}
                  {form.year +
                    "-" +
                    form.program?.toUpperCase() +
                    "-" +
                    form.rollNum}
                </Text>
                <Text style={styles.formText}>
                  Starting Date From: {form.date}
                </Text>
                <Text style={styles.formText}>Number of days: {form.days}</Text>
                <Text style={styles.formText}>
                  Reason for leave: {form.reason}
                </Text>
                <Text style={styles.formText}>
                  Description: {form.description}
                </Text>
                <Text style={styles.formText}>Status: {form.status}</Text>
                <Text style={styles.formText}>
                  Admin Comments: {form.adminComments}
                </Text>
                {(() => {
                  if (route.params.adminView) {
                    return (
                      <View>
                        <TextInput
                          placeholder="Add comments for the form"
                          value={comment}
                          onChangeText={(value) => setComment(value)}
                        />
                        <Picker
                          selectedValue={status}
                          style={styles.picker}
                          onValueChange={(itemValue, itemIndex) =>
                            setStatus(itemValue)
                          }
                        >
                          <Picker.Item label="New" value="New" />
                          <Picker.Item
                            label="In Progress"
                            value="In Progress"
                          />
                          <Picker.Item label="Completed" value="Completed" />
                        </Picker>
                        <TouchableOpacity
                          style={styles.updateButton}
                          onPress={() => {
                            UpdateForm(form.formId, comment, status).then(
                              (result) => {
                                console.log(result);
                                if (result) {
                                  Alert.alert("Form Updated successfully!");
                                } else {
                                  Alert.alert(
                                    "Could not update form, try again."
                                  );
                                }
                              }
                            );
                          }}
                        >
                          <Text style={{ color: "white", fontSize: 18 }}>
                            Update
                          </Text>
                        </TouchableOpacity>
                      </View>
                    );
                  }
                })()}
              </View>
            );
          } else if (form.type == "scholarship") {
            return (
              <View style={styles.leaveForm}>
                <Text
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 25,
                  }}
                >
                  Scholarship Form
                </Text>
                <Text style={styles.formText}>
                  Student Name: {form.firstName} {form.lastName}
                </Text>
                <Text style={styles.formText}>
                  Reg No:{" "}
                  {form.year +
                    "-" +
                    form.program?.toUpperCase() +
                    "-" +
                    form.rollNum}
                </Text>
                <Text style={styles.formText}>CGPA: {form.cgpa}</Text>
                <Text style={styles.formText}>
                  Description: {form.description}
                </Text>
                <Text style={styles.formText}>Status: {form.status}</Text>
                <Text style={styles.formText}>
                  Admin Comments: {form.adminComments}
                </Text>
                {(() => {
                  if (route.params.adminView) {
                    return (
                      <View>
                        <TextInput
                          placeholder="Add comments for the form"
                          value={comment}
                          onChangeText={(value) => setComment(value)}
                        />
                        <Picker
                          selectedValue={status}
                          style={styles.picker}
                          onValueChange={(itemValue, itemIndex) =>
                            setStatus(itemValue)
                          }
                        >
                          <Picker.Item label="New" value="New" />
                          <Picker.Item
                            label="In Progress"
                            value="In Progress"
                          />
                          <Picker.Item label="Completed" value="Completed" />
                        </Picker>
                        <TouchableOpacity
                          style={styles.updateButton}
                          onPress={() => {
                            UpdateForm(form.formId, comment, status).then(
                              (result) => {
                                console.log(result);
                                if (result) {
                                  Alert.alert("Form Updated successfully!");
                                } else {
                                  Alert.alert(
                                    "Could not update form, try again."
                                  );
                                }
                              }
                            );
                          }}
                        >
                          <Text style={{ color: "white", fontSize: 18 }}>
                            Update
                          </Text>
                        </TouchableOpacity>
                      </View>
                    );
                  }
                })()}
              </View>
            );
          } else if (form.type == "fee-installment") {
            return (
              <View style={styles.leaveForm}>
                <Text
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 25,
                  }}
                >
                  Fee Installments Form
                </Text>
                <Text style={styles.formText}>
                  Student Name: {form.firstName} {form.lastName}
                </Text>
                <Text style={styles.formText}>
                  Reg No:{" "}
                  {form.year +
                    "-" +
                    form.program?.toUpperCase() +
                    "-" +
                    form.rollNum}
                </Text>
                <Text style={styles.formText}>CGPA: {form.cgpa}</Text>
                <Text style={styles.formText}>Fee Amount: {form.fee}</Text>
                <Text style={styles.formText}>
                  Description: {form.description}
                </Text>
                <Text style={styles.formText}>Status: {form.status}</Text>
                <Text style={styles.formText}>
                  Admin Comments: {form.adminComments}
                </Text>
                {(() => {
                  if (route.params.adminView) {
                    return (
                      <View>
                        <TextInput
                          placeholder="Add comments for the form"
                          value={comment}
                          onChangeText={(value) => setComment(value)}
                        />
                        <Picker
                          selectedValue={status}
                          style={styles.picker}
                          onValueChange={(itemValue, itemIndex) =>
                            setStatus(itemValue)
                          }
                        >
                          <Picker.Item label="New" value="New" />
                          <Picker.Item
                            label="In Progress"
                            value="In Progress"
                          />
                          <Picker.Item label="Completed" value="Completed" />
                        </Picker>
                        <TouchableOpacity
                          style={styles.updateButton}
                          onPress={() => {
                            UpdateForm(form.formId, comment, status).then(
                              (result) => {
                                console.log(result);
                                if (result) {
                                  Alert.alert("Form Updated successfully!");
                                } else {
                                  Alert.alert(
                                    "Could not update form, try again."
                                  );
                                }
                              }
                            );
                          }}
                        >
                          <Text style={{ color: "white", fontSize: 18 }}>
                            Update
                          </Text>
                        </TouchableOpacity>
                      </View>
                    );
                  }
                })()}
              </View>
            );
          } else if (form.type == "custom") {
            return (
              <View style={styles.leaveForm}>
                <Text
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 25,
                  }}
                >
                  Custom Form
                </Text>
                <Text style={styles.formText}>
                  Student Name: {form.firstName} {form.lastName}
                </Text>
                <Text style={styles.formText}>
                  Reg No:{" "}
                  {form.year +
                    "-" +
                    form.program?.toUpperCase() +
                    "-" +
                    form.rollNum}
                </Text>
                <Text style={styles.formText}>Title: {form.reason}</Text>
                <Text style={styles.formText}>
                  Description: {form.description}
                </Text>
                <Text style={styles.formText}>Status: {form.status}</Text>
                <Text style={styles.formText}>
                  Admin Comments: {form.adminComments}
                </Text>
                {(() => {
                  if (route.params.adminView) {
                    return (
                      <View>
                        <TextInput
                          placeholder="Add comments for the form"
                          value={comment}
                          onChangeText={(value) => setComment(value)}
                        />
                        <Picker
                          selectedValue={status}
                          style={styles.picker}
                          onValueChange={(itemValue, itemIndex) =>
                            setStatus(itemValue)
                          }
                        >
                          <Picker.Item label="New" value="New" />
                          <Picker.Item
                            label="In Progress"
                            value="In Progress"
                          />
                          <Picker.Item label="Completed" value="Completed" />
                        </Picker>
                        <TouchableOpacity
                          style={styles.updateButton}
                          onPress={() => {
                            UpdateForm(form.formId, comment, status).then(
                              (result) => {
                                console.log(result);
                                if (result) {
                                  Alert.alert("Form Updated successfully!");
                                } else {
                                  Alert.alert(
                                    "Could not update form, try again."
                                  );
                                }
                              }
                            );
                          }}
                        >
                          <Text style={{ color: "white", fontSize: 18 }}>
                            Update
                          </Text>
                        </TouchableOpacity>
                      </View>
                    );
                  }
                })()}
              </View>
            );
          }

          return null;
        })()}
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
    paddingTop: 80,
  },
  leaveForm: {
    width: "95%",
    minHeight: 500,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 20,
    padding: 15,
    alignSelf: "center",
    paddingTop: 30,
  },
  viewButton: {
    alignSelf: "flex-end",
    backgroundColor: "green",
    padding: 10,
    marginRight: 15,
    top: 10,
    borderRadius: 10,
  },
  formText: {
    fontSize: 17,
    marginTop: 10,
    borderTopWidth: 0.8,
    borderTopColor: "blue",
    paddingTop: 10,
  },
  picker: {
    width: 150,
  },
  updateButton: {
    backgroundColor: "#5BCC94",
    borderRadius: 30,
    padding: 15,
    width: 120,
    textAlign: "center",
    height: "auto",
    marginLeft: 210,
    alignItems: "center",
  },
});
