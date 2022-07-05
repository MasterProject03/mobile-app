import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Image, Linking } from "react-native";
import "react-native-gesture-handler";

const Drawer = createDrawerNavigator();

export default function Main() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props =>
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
            icon={() =>
              <Image
                style={{ height: 20, aspectRatio: 15.46 / 16.43 }}
                source={require("../../assets/icons/headphones.svg")}
              />
            }
          />
        </DrawerContentScrollView>
      }
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#0D0D0D"
        },
        drawerActiveTintColor: "#DA90DA",
        drawerActiveBackgroundColor: "#000000",
        drawerInactiveTintColor: "#FFFFFF",
        drawerInactiveBackgroundColor: "#0D0D0D",
        drawerItemStyle: {
          borderRadius: 30
        },
      }}
    >
    </Drawer.Navigator>
  );
}
