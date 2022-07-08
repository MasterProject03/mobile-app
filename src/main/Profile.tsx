import React, { useContext } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { AuthContext } from "../auth/AuthProvider"
import Loading from "./Loading"
import Verified from "../../assets/icons/verified.svg"
import Unverified from "../../assets/icons/unverified.svg"

export default function Profile() {
  const { account } = useContext(AuthContext)

  if (account === undefined)
    return <Loading />

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <SafeAreaView style={styles.safeArea}>
        <Image source={require("../../assets/icons/user.png")} width={100} height={100} style={styles.picture} />

        <View style={styles.field}>
          <Text style={styles.label}>Prénom</Text>
          <Text style={styles.value}>{account.first_name}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Nom de famille</Text>
          <Text style={styles.value}>{account.last_name}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Adresse email</Text>
          <Text style={styles.value}>{account.email}</Text>
        </View>

        <View style={styles.verification}>
          <Text style={styles.verifiedLabel}>Identité vérifiée</Text>
          <Verified width={20} height={20} style={styles.verifiedIcon} />
        </View>

        <View style={[styles.verification, styles.verificationFailed]}>
          <Text style={styles.unverifiedLabel}>Média certifié</Text>
          <Unverified width={20} height={20} style={styles.unverifiedIcon} />
        </View>

        <View style={styles.idField}>
          <Text style={styles.value}>ID: {account.id}</Text>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },

  safeArea: {
    flex: 1,
    paddingHorizontal: 25,
  },

  picture: {
    alignSelf: "center",
    width: 100,
    height: 100,
    marginBottom: 50,
  },

  field: {
    marginVertical: 10,
  },

  label: {
    marginBottom: 5,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  value: {
    color: "white",
    fontSize: 16,
  },

  verification: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  verifiedLabel: {
    marginBottom: 5,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  verifiedIcon: {
    color: "white",
    width: 20,
    height: 20,
    marginLeft: 10,
  },

  verificationFailed: {
    opacity: 0.3
  },

  unverifiedLabel: {
    marginBottom: 5,
    color: "#DA90DA",
    fontSize: 24,
    fontWeight: "bold",
  },

  unverifiedIcon: {
    color: "#DA90DA",
    width: 20,
    height: 20,
    marginLeft: 10,
  },

  idField: {
    marginTop: 30,
    opacity: 0.2,
  },
})
