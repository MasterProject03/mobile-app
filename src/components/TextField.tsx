import React from "react"
import { StyleSheet, View, TextInput, Text } from "react-native"

export default function TextField({ style, label, ...props }: any) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#C4C4C4"
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},

  label: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },

  input: {
    alignSelf: "stretch",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 1000,
  },
})
