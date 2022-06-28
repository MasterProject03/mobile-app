import { ReactChild, ReactFragment, ReactPortal } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Input(props: { label: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; placeholder: string | undefined; }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        // onChangeText={}
        // value={}
        placeholder={props.placeholder}
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    width: "100%",
  },

  label: {
    color: "#ffffff",
    fontSize: 14,
    textAlign: "left",
    width: "100%",
    paddingLeft: 10,
  },

  input: {
    width: "100%",
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 30,
    marginBottom: 30,
  },
});
