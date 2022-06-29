import { StyleSheet, Text, Pressable, View, Image } from "react-native";

export default function ProfileInfos({...props}) {
  return (
    <View style={styles.container}>
      <Image style={styles.profilepic} source={require("../../assets/lemonde.png")} />
      <View>
      <View style={styles.top}>
        <View style={styles.publisherInfos}>
          <Text style={[styles.text, styles.publisher]}>{props.publisher}</Text>
          <Image style={styles.verified} source={require("../../assets/verified.svg")} />
        </View>
      </View>
      <Text style={[styles.text, styles.username]}>@{props.username}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20
  },

  profilepic: {
    width: 75,
    aspectRatio: 1 / 1,
    borderRadius: 50,
  },

  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "Calc(100% - 50px)",
    alignItems: "center",
    paddingLeft: 20,
  },

  publisherInfos: {
    flexDirection: "row",
    alignItems: "center",
  },

  verified:{
    width: 18,
    aspectRatio: 14.63 / 17.6,
    marginHorizontal: 7,
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
    marginLeft: 20,
  }
});
