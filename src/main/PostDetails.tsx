import React, { useState, useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, ScrollView, Alert, Text, TouchableOpacity } from "react-native"
import { RouteProp } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import HTMLView from "react-native-htmlview"
import moment from "moment"
import * as Linking from "expo-linking"

import Loading from "./Loading"
import API from "../api"
import Post from "../api/types/post"
import Verified from "../../assets/icons/verified.svg"

export default function PostDetails({ route }: { route: RouteProp<{ PostDetails: { id: string } }, "PostDetails"> }) {
  const { id } = route.params

  const [post, setPost] = useState<Post | undefined>(undefined)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await API.getPost(id)

        setPost(post)
      } catch (error: any) {
        Alert.alert("Erreur de chargement", error.error)
        console.error(error)
      }
    }

    fetchPost()
  }, [id])

  if (post === undefined)
    return <Loading />

  const date = moment(post.publication_date * 1000).fromNow()

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.top}>
            <Text style={styles.publisher}>{post.publisher.first_name} {post.publisher.last_name}</Text>
            <Verified width={20} height={20} style={styles.verifiedIcon} />
            <View style={styles.spacer}></View>
            <Text style={styles.date}>{date}</Text>
          </View>

          <Text style={styles.title}>{post.title}</Text>

          <HTMLView value={post.content} stylesheet={htmlStyles} />

          <Text style={styles.sources}>Sources</Text>

          {post.sources.map((source, i) =>
            <TouchableOpacity key={i} style={styles.source} onPress={() => Linking.openURL(source)}>
              <Text style={styles.sourceText}>{source}</Text>
            </TouchableOpacity>
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

  scrollContent: {},

  safeArea: {
    flex: 1,
    padding: 25,
  },

  top: {
    flexDirection: "row",
  },

  publisher: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  verifiedIcon: {
    color: "white",
    width: 20,
    height: 20,
    marginLeft: 10,
  },

  spacer: {
    flex: 1,
  },

  date: {
    color: "#DA90DA",
    opacity: 0.5,
  },

  title: {
    marginVertical: 50,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  content: {
    width: "100%",
  },

  sources: {
    marginTop: 50,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  source: {
    marginTop: 20,
  },

  sourceText: {
    color: "#DA90DA",
    textDecorationLine: "underline",
  },
})

const htmlStyles = StyleSheet.create({
  p: {
    color: "white",
  },

  h1: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  h2: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  h3: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  a: {
    color: "#DA90DA",
    textDecorationLine: "underline",
  },
})
