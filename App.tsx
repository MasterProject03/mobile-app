import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import "react-native-gesture-handler"

import Auth from "./src/auth/Index"

export default function App() {
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  )
}
