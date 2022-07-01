import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProfileInfos from "../src/components/ProfileInfos";
import FeedInfos from "../src/components/FeedInfos";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.profileInfos}>
      <ProfileInfos
          publisher="LeMonde"
          username="lemonde"
          title="Un vaste trafic de montres de luxe volées démantelé"
          author="Luc Leroux(Marseille, correspondant)" 
      />
      <FeedInfos
          publisher="LeMonde"
          username="lemonde"
          title="Un vaste trafic de montres de luxe volées démantelé"
          author="Luc Leroux(Marseille, correspondant)" 
          date="2013-02-20T12:01:04.753Z"
          img="https://media-exp1.licdn.com/dms/image/C4D03AQEYmMJaCDOGBA/profile-displayphoto-shrink_[…]90400&v=beta&t=RWCyw4KdbMdptSi6qOlY65d0oaj0UIuFrTW3vb7mQRI"
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
  },

  text: {
    color: "#ffffff",
  },

  profileInfos: {
    paddingLeft: 20,
    marginTop: 20
  }
});
