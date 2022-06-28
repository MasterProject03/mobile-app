import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/Login";
import Register from "./src/Register";
import Home from "./src/Home";
import Profile from "./src/Profile";
import Article from "./src/Article";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Group>

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />

        <Stack.Group
          screenOptions={{
            presentation: "modal"
          }}
        >
          <Stack.Screen name="Article" component={Article} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
