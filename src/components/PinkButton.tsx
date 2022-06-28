import { StyleSheet, Text, Pressable } from "react-native";

export default function PinkButton(props: { label: string | undefined; }) {
  return (
    <Pressable style={styles.submit}>
      <Text style={styles.text}>{props.label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  submit: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: "#DA90DA",
    position: "absolute",
    bottom: 50,
  },

  text: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 20,
  },
});
