import React, { useContext, useState, useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, ScrollView, Alert, RefreshControl } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { AuthContext } from "../auth/AuthProvider"
import Loading from "./Loading"
import API from "../api"
import Post from "../api/types/post"

export default function Feed() {
  const { account } = useContext(AuthContext)
  const [feed, setFeed] = useState<Post[] | undefined>(undefined)
  const [refreshing, setRefreshing] = useState<boolean>(false)

  useEffect(() => {
    if (account === undefined)
      return

    const fetchFeed = async () => {
      try {
        const feed = await API.getFeed(account.token)

        setFeed(feed)
        setTimeout(() => setRefreshing(false), 500)
      } catch (error: any) {
        Alert.alert("Erreur de chargement", error.error)
        console.error(error)
      }
    }

    if (feed === undefined || refreshing)
      fetchFeed()
  }, [account, refreshing])

  if (feed === undefined)
    return <Loading />

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => setRefreshing(true)}
          />
        }
      >
        <SafeAreaView style={styles.safeArea}>
          {feed.map(post =>
            <View>
              <Text>{post.title}</Text>
              <Text>{post.content}</Text>
            </View>
          )}
        </SafeAreaView>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
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
})
