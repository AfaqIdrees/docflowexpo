import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StudentSignUp from "./src/screens/studentSignUpScreen";
export default function App() {
  return (
    <View>
      <StudentSignUp />
    </View>
  );
}
