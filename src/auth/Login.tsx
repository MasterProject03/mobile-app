import React, { useContext, useState, useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Alert, KeyboardAvoidingView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link, StackActions, NavigationProp } from "@react-navigation/native"

import { AuthContext } from "./AuthProvider"
import Button from "../components/Button"
import TextField from "../components/TextField"
import Logo from "../../assets/icons/logo.svg"
import API from "../api"

export default function Login({ navigation }: { navigation: NavigationProp<{}> }) {
  const { account, setAccount } = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    if (account != null)
      navigation.dispatch(StackActions.replace("Main"))
  }, [account])

  const submit = async () => {
    try {
      const { token } = await API.login(email, password)
      const newAccount = await API.getMe(token)

      await setAccount({ token, ...newAccount })
    } catch (error: any) {
      Alert.alert("Erreur de connexion", error.error)
      console.error(error)
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <KeyboardAvoidingView
        behavior="position"
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.header}>
            <Logo width={200} height={200} style={styles.logo} />
            <Text style={styles.title}>Se connecter à votre compte</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.fields}>
              <TextField
                style={styles.input}
                keyboardType="email-address"
                label="Adresse e-mail"
                placeholder="jean.soma@efrei.net"
                value={email}
                onChangeText={setEmail}
              />
              <TextField
                style={styles.input}
                secureTextEntry={true}
                label="Mot de passe"
                placeholder="••••••••••••"
                value={password}
                onChangeText={setPassword}
              />

              <Link style={styles.link} to={{ screen: "Register" }} action={StackActions.replace("Register")}>
                <Text style={styles.text}>Créer un compte</Text>
              </Link>
            </View>

            <Button onPress={submit} style={styles.submit}>
              Connexion
            </Button>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
  },

  scroll: {
    flex: 1,
    width: "100%",
  },

  scrollContent: {
    flex: 1,
    padding: 25,
  },

  safeArea: {
    flex: 1,
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

  form: {
    flex: 5,
  },

  fields: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },

  input: {
    marginBottom: 20,
  },

  link: {
    alignSelf: "flex-end",
  },

  text: {
    color: "white",
    fontWeight: "bold",
  },

  submit: {
    alignSelf: "center",
  },
})
