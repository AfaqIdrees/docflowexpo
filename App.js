import StudentSignUp from "./src/screens/studentSignUpScreen";
import HomeScreen from "./src/screens/homeScreen";
import LeaveForm from "./src/screens/leaveForm";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentHome from "./src/screens/studentHome";
import ScholarshipForm from "./src/screens/scholarshipForm";
import MyForms from "./src/screens/myForms";
import ViewForm from "./src/screens/viewForm";
import FeeInstallmentForm from "./src/screens/feeInstallmentForm";
import CustomForm from "./src/screens/customForm";
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
        <Stack.Screen name="StudentHome" component={StudentHome} />
        <Stack.Screen name="LeaveForm" component={LeaveForm} />
        <Stack.Screen name="ScholarshipForm" component={ScholarshipForm} />
        <Stack.Screen name="MyForms" component={MyForms} />
        <Stack.Screen name="ViewForm" component={ViewForm} />
        <Stack.Screen
          name="FeeInstallmentFrom"
          component={FeeInstallmentForm}
        />
        <Stack.Screen name="CustomForm" component={CustomForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
