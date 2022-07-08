import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import AuthProvider from "./AuthProvider"
import Login from "./Login"
import Register from "./Register"
import Main from "../main/Index"

const Stack = createNativeStackNavigator()

export default function Auth() {
  return (
    <AuthProvider>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} options={{ animation: "fade" }} />
        <Stack.Screen name="Register" component={Register} options={{ animation: "fade" }} />
        <Stack.Screen name="App" component={Main} />
      </Stack.Navigator>
    </AuthProvider>
  )
}
