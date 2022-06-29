import { StyleSheet, Text, Pressable, View, Image } from "react-native";

export default function ArticleInfos({...props}) {
  return (
    <View style={styles.container}>
      <Image style={styles.profilepic} source={require("../../assets/lemonde.png")} />
      <View style={styles.top}>
        <View style={styles.publisherInfos}>
          <Text style={[styles.text, styles.publisher]}>{props.publisher}</Text>
          <Image style={styles.verified} source={require("../../assets/verified.svg")} />
          <Text style={[styles.text, styles.username]}>@{props.username}</Text>
        </View>
        <View style={styles.vote}>
          <Pressable>
            <Image style={styles.arrow} source={require("../../assets/uparrow.svg")} />
          </Pressable>
          <Pressable>
            <Image style={styles.arrow} source={require("../../assets/downarrow.svg")} />
          </Pressable>
        </View>
      </View>
      <View style={styles.articleInfos}>
        <Text style={[styles.text, styles.title]}>{props.title}</Text>
        <Text style={[styles.text, styles.author]}>{props.author}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },

  profilepic: {
    width: 50,
    aspectRatio: 1 / 1,
    borderRadius: 25,
  },

  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "Calc(100% - 50px)",
    alignItems: "center",
    paddingLeft: 10,
  },

  publisherInfos: {
    flexDirection: "row",
    alignItems: "center",
  },

  articleInfos: {
    marginLeft: 60,
    width: "Calc(100% - 60px)",
  },

  verified:{
    width: 18,
    aspectRatio: 14.63 / 17.6,
    marginHorizontal: 5,
  },

  text: {
    color: "#ffffff",
  },

  publisher: {
    fontSize: 18,
    fontWeight: "bold",
  },

  username: {
    fontStyle: "italic",
    color: "#DA90DA",
    fontWeight: "bold",
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
    wordBreak: "break-all",
  },

  author: {
    opacity: .8,
  },

  vote: {
    flexDirection: "row",
    gap: 10,
  },

  arrow: {
    width: 18,
    aspectRatio: 13.64 / 16.69,
  },
});
