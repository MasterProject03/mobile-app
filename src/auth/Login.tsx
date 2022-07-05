import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, StackActions } from "@react-navigation/native";

import Logo from "../../assets/icons/logo.svg";

export default function Login() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <SafeAreaView>
        <View style={styles.header}>
          <Logo width={200} height={200} style={styles.logo} />
          <Text style={styles.title}>Se connecter à votre compte</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.text}>TODO</Text>

          <Link to={{ screen: "Register" }} action={StackActions.replace("Register")}>
            <Text style={styles.text}>Créer un compte</Text>
          </Link>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    padding: 25,
  },

  header: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    marginBottom: 50,
  },

  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },

  form: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
