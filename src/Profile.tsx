import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,ScrollView } from "react-native";
import ProfileInfos from "../src/components/ProfileInfos";
import FeedInfos from "../src/components/FeedInfos";
const userData = [{
  id: 0,
  publisher:"LeMonde",
  username:"lemonde",
  title:"Un vaste trafic de montres de luxe volées démantelé",
  author:"Luc Leroux(Marseille, correspondant)",
  date:"2013-02-20T12:01:04.753Z",
  img:"https://media-exp1.licdn.com/dms/image/C4D03AQEYmMJaCDOGBA/profile-displayphoto-shrink_[…]90400&v=beta&t=RWCyw4KdbMdptSi6qOlY65d0oaj0UIuFrTW3vb7mQRI"
},
{
  id:1,
  publisher:"LeMonde",
  username:"lemonde",
  title:"Un vaste trafic de montres de luxe volées démantelé",
  author:"Luc Leroux(Marseille, correspondant)",
  date:"2013-02-20T12:01:04.753Z",
  img:"https://media-exp1.licdn.com/dms/image/C4D03AQEYmMJaCDOGBA/profile-displayphoto-shrink_[…]90400&v=beta&t=RWCyw4KdbMdptSi6qOlY65d0oaj0UIuFrTW3vb7mQRI"
},
{
  id: 2,
  publisher:"LeMonde",
  username:"lemonde",
  title:"Un vaste trafic de montres de luxe volées démantelé",
  author:"Luc Leroux(Marseille, correspondant)",
  date:"2013-02-20T12:01:04.753Z",
  img:"https://media-exp1.licdn.com/dms/image/C4D03AQEYmMJaCDOGBA/profile-displayphoto-shrink_[…]90400&v=beta&t=RWCyw4KdbMdptSi6qOlY65d0oaj0UIuFrTW3vb7mQRI"
},
{
  id: 3,
  publisher:"LeMonde",
  username:"lemonde",
  title:"Un vaste trafic de montres de luxe volées démantelé",
  author:"Luc Leroux(Marseille, correspondant)",
  date:"2013-02-20T12:01:04.753Z",
  img:"https://media-exp1.licdn.com/dms/image/C4D03AQEYmMJaCDOGBA/profile-displayphoto-shrink_[…]90400&v=beta&t=RWCyw4KdbMdptSi6qOlY65d0oaj0UIuFrTW3vb7mQRI"
},
{
  id: 4,
  publisher:"LeMonde",
  username:"lemonde",
  title:"Un vaste trafic de montres de luxe volées démantelé",
  author:"Luc Leroux(Marseille, correspondant)",
  date:"2013-02-20T12:01:04.753Z",
  img:"https://media-exp1.licdn.com/dms/image/C4D03AQEYmMJaCDOGBA/profile-displayphoto-shrink_[…]90400&v=beta&t=RWCyw4KdbMdptSi6qOlY65d0oaj0UIuFrTW3vb7mQRI"
}
]
export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.profileInfos}>
      <ProfileInfos
          publisher="LeMonde"
          username="lemonde"
          title="Un vaste trafic de montres de luxe volées démantelé"
          author="Luc Leroux(Marseille, correspondant)" 
      />
      </View>
      <View style={styles.profileFeed}>
        {userData.map(a=>{
          return <FeedInfos
          key={a.id}
          publisher={a.publisher}
          username={a.username}
          title={a.title}
          author={a.author}
          date={a.date}
          img={a.img}
          />
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "#0d0d0d",
  },

  text: {
    color: "#ffffff",
  },

  profileInfos: {
    paddingLeft: 20,
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: "#DA90DA",
    marginBottom: 10
  },

  profileFeed: {
    paddingBottom: 200,
    paddingLeft: 20,
  }
});
