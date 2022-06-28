import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import Input from "../src/components/Input";
import PinkButton from "../src/components/PinkButton";

export default function Login() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../assets/frame.svg")} />
        <Text style={styles.text}>Se connecter à votre compte</Text>
      </View>
      <Input label="Adresse email" placeholder="john.doe@email.com" />
      <Input label="Mot de passe" placeholder="Entrer votre mot de passe" />
      <PinkButton label="Se connecter"/>
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
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 50,
  },

  text: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 20,
  },

  logo: {
    width: "70%",
    height: undefined,
    aspectRatio: 1 / 1,
    marginBottom: 50,
  },
});
