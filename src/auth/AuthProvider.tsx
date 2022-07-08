import React, { useState, createContext, ReactNode, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

import Account from "../api/types/account"
import Loading from "../main/Loading"
import API from "../api";
import { Alert } from "react-native";

export const AuthContext = createContext<{
  account?: Account,
  setAccount: (newAccount?: Account) => Promise<void>
}>({
  account: undefined,
  setAccount: async () => {}
});

export default function AuthProvider({ children }: { children: ReactNode | ReactNode[] }) {
  const [loading, setLoading] = useState<boolean>(true)
  const [account, setAccount] = useState<Account | undefined>(undefined)

  const setAccountPersist = async (newAccount?: Account) => {
    if (newAccount === undefined) {
      await AsyncStorage.removeItem("@account")
    } else {
      await AsyncStorage.setItem("@account", JSON.stringify(newAccount))
    }

    setAccount(newAccount)
  }

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const accountData = await AsyncStorage.getItem("@account")
        if (accountData === null) {
          setLoading(false)
          return
        }

        const oldAccount = JSON.parse(accountData) as Account
        if (oldAccount.token === undefined) {
          setLoading(false)
          return
        }

        const { token } = await API.refreshToken(oldAccount.token)
        const newAccount = await API.getMe(token)

        await setAccountPersist({ token, ...newAccount })
        setLoading(false)
      } catch (error: any) {
        Alert.alert("Erreur de reconnexion", error.error)
        console.error(error)
        setLoading(false)
      }
    }

    fetchAccount()
  }, [])

  return (
    <AuthContext.Provider value={{ account, setAccount: setAccountPersist }}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  )
}
