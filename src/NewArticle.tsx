import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View,TextInput } from "react-native";
import { CALLBACK_TYPE } from "react-native-gesture-handler/lib/typescript/handlers/gestures/gesture";
import { 
    Poppins_500Medium,
  } from '@expo-google-fonts/dev'
export default function NewArticle() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.cancel}>Cancel</Text>
          <View style={styles.logoButton}>Mackee</View>
      </View>
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
    fontFamily: Poppins_500Medium
  },

  header: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: 20,
      paddingRight: 20,
      paddingLeft: 20,
      color: "white"
  },

  input: {
    color: "#ffffff",
    height: 200,
    width: "100%",
    marginTop: 10,
    outlineStyle: 'none',
    fontFamily: Poppins_500Medium
  },
  logoButton: {
      backgroundColor: "#DA90DA",
      paddingTop: 2,
      paddingBottom: 2,
      paddingRight: 25,
      paddingLeft: 25,
      borderRadius: 15,
  },
  cancel: {
      color: "white"
  },

  profilepic: {
    width: 50,
    aspectRatio: 1 / 1,
    borderRadius: 25,
    alignSelf: "flex-start",
    marginRight: 8
  },

  editContainer: {
    flexDirection: "row",
    width: "100%",
    padding: 20,
  }
});