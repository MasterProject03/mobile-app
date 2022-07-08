import React, { useContext } from "react"
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"
import { StyleSheet, Linking } from "react-native"
import { StackActions, NavigationProp } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import "react-native-gesture-handler"

import { AuthContext } from "../auth/AuthProvider"
import Feed from "./Feed"
import Profile from "./Profile"
import Settings from "./Settings"
import Logo from "../../assets/icons/logo.svg"
import FeedIcon from "../../assets/icons/feed.svg"
import ProfileIcon from "../../assets/icons/profile.svg"
import SettingsIcon from "../../assets/icons/settings.svg"
import PrivacyIcon from "../../assets/icons/privacy.svg"
import HeadphonesIcon from "../../assets/icons/headphones.svg"
import Button from "../components/Button"
import PostDetails from "./PostDetails"

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator({ navigation }: { navigation: NavigationProp<{}> }) {
  const { setAccount } = useContext(AuthContext)

  const logout = async () => {
    await setAccount(undefined)
    navigation.dispatch(StackActions.replace("Login"))
  }

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props =>
        <DrawerContentScrollView {...props}>
          <Logo width={100} height={100} style={styles.logo} />

          <DrawerItemList {...props} />

          <DrawerItem
            label="Privacy"
            onPress={() => Linking.openURL("https://ducki.dev")}
            labelStyle={{ color: "#ffffff" }}
            activeTintColor="#DA90DA"
            activeBackgroundColor="#FFFFFF"
            inactiveTintColor="#FFFFFF"
            inactiveBackgroundColor="#0D0D0D"
            icon={({ color }) =>
              <PrivacyIcon width={20} height={20} style={{ color } as any} />
            }
          />

          <DrawerItem
            label="Help center"
            onPress={() => Linking.openURL("https://ducki.dev")}
            labelStyle={{ color: "#ffffff" }}
            activeTintColor="#DA90DA"
            activeBackgroundColor="#FFFFFF"
            inactiveTintColor="#FFFFFF"
            inactiveBackgroundColor="#0D0D0D"
            icon={({ color }) =>
              <HeadphonesIcon width={20} height={20} style={{ color } as any} />
            }
          />

          <Button onPress={logout} style={styles.logout}>
            Se déconnecter
          </Button>
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
      <Drawer.Screen name="Feed" component={Feed} options={{
        headerStyle: styles.header,
        headerTintColor: "#DA90DA",
        drawerIcon: ({ color }) =>
          <FeedIcon width={20} height={20} style={{ color } as any} />
      }} />
      <Drawer.Screen name="Profile" component={Profile} options={{
        headerStyle: styles.header,
        headerTintColor: "#DA90DA",
        drawerIcon: ({ color }) =>
          <ProfileIcon width={20} height={20} style={{ color } as any} />
      }} />
      <Drawer.Screen name="Settings" component={Settings} options={{
        headerStyle: styles.header,
        headerTintColor: "#DA90DA",
        drawerIcon: ({ color }) =>
          <SettingsIcon width={20} height={20} style={{ color } as any} />
      }} />
    </Drawer.Navigator>
  )
}

export default function Main() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Main" component={DrawerNavigator} />
      <Stack.Screen name="PostDetails" component={PostDetails} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0D0D0D",
  },

  logo: {
    alignSelf: "center",
    marginVertical: 50,
  },

  logout: {
    alignSelf: "center",
    marginTop: 50,
  },
})
