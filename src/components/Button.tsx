import React from "react"
import { StyleSheet, Pressable, Text } from "react-native"

export default function Button({ children, style, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [
      styles.button,
      pressed ? styles.pressed : null,
      style,
    ]}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#DA90DA",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 16,
    borderRadius: 1000,
  },

  pressed: {
    opacity: 0.8,
  },

  text: {
    color: "white",
    fontWeight: "bold",
  },
})
