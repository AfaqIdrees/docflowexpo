import StudentSignUp from "./src/screens/studentSignUpScreen";
import HomeScreen from "./src/screens/homeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />

        <Stack.Screen name="StudentSignUp" component={StudentSignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
