import React, { useState, useEffect } from "react";
import { ImageBackground, View, StyleSheet, Text } from "react-native";
import { GetMyForms } from "./api";
export default function MyForms({ navigation }) {
  const [forms, setForms] = useState([{ type: "ABC" }]);
  useEffect(() => {
    GetMyForms().then((response) => {
      setForms(response);
      console.log(forms);
    });
  }, []);
  return (
    <ImageBackground source={require("../images/bg3.png")} resizeMode={"cover"}>
      <View style={styles.background}>
        {forms.map((form) => {
          return (
            <View
              style={{
                marginTop: 100,
                width: 100,
                height: 100,
                backgroundColor: "black",
              }}
            >
              <Text style={{ color: "white" }}>Form type: {form.type}</Text>
            </View>
          );
        })}
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
});
