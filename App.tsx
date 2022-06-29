import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image, Linking } from "react-native";
import "react-native-gesture-handler";

import Login from "./src/Login";
import Register from "./src/Register";
import Home from "./src/Home";
import Feed from "./src/Feed";
import Profile from "./src/Profile";
import Article from "./src/Article";
import Settings from "./src/Settings";
import Privacy from "./src/Privacy";

const Drawer = createDrawerNavigator();

// const Stack = createNativeStackNavigator();
// const MyStack = () => {
//   return (
//     <Stack.Navigator initialRouteName="Login">
//       <Stack.Group
//         screenOptions={{
//           headerShown: false,
//         }}
//       >
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Register" component={Register} />
//       </Stack.Group>

//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Profile" component={Profile} />

//       <Stack.Group
//         screenOptions={{
//           presentation: "modal",
//         }}
//       >
//         <Stack.Screen
//           name="Article"
//           component={Article}
//           options={{
//             headerTitle: () => <LogoTitle />,
//             headerBackVisible: true,
//             headerStyle: { backgroundColor: "#0D0D0D" },
//             headerShadowVisible: false,
//             headerTitleAlign: "center",
//           }}
//         />
//       </Stack.Group>
//     </Stack.Navigator>
//   );
// };

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("./assets/frame.svg")}
    />
  );
}

function CustomDrawerContent({ ...props }) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help center"
        onPress={() => Linking.openURL("https://ducki.dev")}
        labelStyle={{ color: "#ffffff" }}
        activeTintColor="#DA90DA"
        activeBackgroundColor="#FFFFFF"
        inactiveTintColor="#FFFFFF"
        inactiveBackgroundColor="#0D0D0D"
        icon={() => (
          <Image
            style={{ height: 20, aspectRatio: 15.46 / 16.43 }}
            source={require("./assets/headphones.svg")}
          />
        )}
      />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Group>

        <Stack.Screen name="Home" component={Home} />
      
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
          <Stack.Screen
            name="Profile"
            component={Profile}
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
