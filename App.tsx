import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";

import Login from "./src/Login";
import Register from "./src/Register";
import Home from "./src/Home";
import Profile from "./src/Profile";
import Article from "./src/Article";

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("./assets/frame.svg")}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Group>

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />

        <Stack.Group
          screenOptions={{
            presentation: "modal",
          }}
        >
          <Stack.Screen
            name="Article"
            component={Article}
            options={{
              headerTitle: () => <LogoTitle />,
              headerBackVisible: true,
              headerStyle: { backgroundColor: "#0D0D0D" },
              headerShadowVisible: false,
              headerTitleAlign: "center",
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
