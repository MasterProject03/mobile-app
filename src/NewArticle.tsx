import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View,TextInput } from "react-native";

export default function NewArticle() {
  return (
    <View style={styles.container}>
     <View style={styles.editContainer}>
     <Image style={styles.profilepic} source={require("../assets/lemonde.png")} />
        <TextInput
        style={styles.input}
        placeholder="What's happening ?"
        multiline={true}
        />
     </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
 
  },

  input: {
    color: "#ffffff",
    height: 200
  },

  profilepic: {
    width: 50,
    aspectRatio: 1 / 1,
    borderRadius: 25,
  },

  editContainer: {
    flexDirection: "row"
  }
});