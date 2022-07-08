import React from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.title}>Chargement en cours...</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
  },

  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
})
