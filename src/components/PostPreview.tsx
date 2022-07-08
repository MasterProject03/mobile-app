import React from "react"
import { StyleSheet, View, Text, Image } from "react-native"
import moment from "moment"

import Post from "../api/types/post"
import Verified from "../../assets/icons/verified.svg"

export default function PostPreview({ post }: { post: Post }) {
  const date = moment(post.publication_date * 1000).fromNow()

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.publisher}>{post.publisher.first_name} {post.publisher.last_name}</Text>
        <Verified width={20} height={20} style={styles.verifiedIcon} />
        <View style={styles.spacer}></View>
        <Text style={styles.date}>{date}</Text>
      </View>

      <View style={styles.preview}>
        <Image source={{
          uri: post.cover
        }} style={styles.cover} />

        <View style={styles.card}>
          <Text style={styles.title}>{post.title}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},

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

  preview: {
    width: "100%",
    marginTop: 10,
  },

  cover: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  card: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: "#DA90DA",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
  },

  title: {
    color: "white",
    fontSize: 16,
  },
})
