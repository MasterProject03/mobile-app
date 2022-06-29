import { StyleSheet, Text, Pressable, View, Image } from "react-native";

function testNum({...props}) {
  var time = (new Date().getTime() - new Date(props.date).getTime())/ (1000 * 60);
  var display = secondsToDhms(time)
  return(display);
}
function secondsToDhms(seconds: number) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600*24));
  var h = Math.floor(seconds % (3600*24) / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 60);
  
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  var finalDisplay = dDisplay || hDisplay || mDisplay || sDisplay
  return finalDisplay
;
  }


export default function FeedInfos({...props}) {
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
          <Text style={[styles.text]}>{testNum({...props})}</Text>
        </View>
      </View>
      <View style={styles.articleInfos}>
        <Image style={styles.articlepic} source={require(props.img)} />
        <View style={styles.articleDesc}>
          <Text style={[styles.text, styles.title]}>{props.title}</Text>
          <Image style={styles.verified} source={require("../../assets/arrow.png")} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
    paddingRight: 20
  },

  profilepic: {
    width: 50,
    aspectRatio: 1 / 1,
    borderRadius: 25,
  },

  articlepic: {
    height: 170,
    aspectRatio: 1 / 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "Calc(100% - 50px)",
    alignItems: "center",
    paddingLeft: 10
  },

  publisherInfos: {
    flexDirection: "row",
    alignItems: "center",
  },

  articleInfos: {
    marginLeft: 60,
    marginRight: 20,
    width: "Calc(100% - 60px)",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#DA90DA" 
  },
  articleDesc: {
    flexDirection: "row",
    alignItems: "center"
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
    padding: 5
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
