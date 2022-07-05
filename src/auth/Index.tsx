import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./Login";
import Register from "./Register";
import Main from "../main/Index";

const Stack = createNativeStackNavigator();

export default function Auth() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} options={{ animation: "fade" }} />
      <Stack.Screen name="Register" component={Register} options={{ animation: "fade" }} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}
