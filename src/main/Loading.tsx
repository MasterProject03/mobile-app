import React from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import Logo from "../../assets/icons/logo.svg"

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Logo width={200} height={200} style={styles.logo} />
          <Text style={styles.title}>Chargement en cours...</Text>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
  },

  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    flex: 3,
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
})
