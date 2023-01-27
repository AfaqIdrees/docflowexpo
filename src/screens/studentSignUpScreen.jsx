import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import SignUpFields from "./signupFields";
import LoginFields from "./loginFields";
export default function StudentSignUp({ navigation }) {
  const [showSignUp, setShowSignUp] = useState(false);
  if (showSignUp) {
    return (
      <ImageBackground
        source={require("../images/bgGradient1.png")}
        resizeMode={"cover"}
      >
        <SignUpFields setShowSignUp={setShowSignUp} />
      </ImageBackground>
    );
  } else {
    return (
      <ImageBackground
        source={require("../images/bgGradient1.png")}
        resizeMode={"cover"}
      >
        <LoginFields setShowSignUp={setShowSignUp} />
      </ImageBackground>
    );
  }
}
