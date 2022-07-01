import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import FeedInfos from "../src/components/FeedInfos";
import { SafeAreaView } from "react-native-safe-area-context";
import {Poppins_500Medium} from '@expo-google-fonts/dev'

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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.feed}>
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
      </ScrollView>
      <View style={styles.newArticle}>
        <Image style={styles.image} source={require("../assets/pen.png")}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: Poppins_500Medium
  },

  feed: {
    paddingBottom: 200,
    paddingTop: 20,
    paddingLeft: 20
  },

  text: {
    color: "#ffffff",
    fontFamily: Poppins_500Medium
  },

  newArticle: {
   position: 'absolute',
   right:     '25px',
   bottom:      '20px',
   backgroundColor: '#DA90DA',
   height: '50px',
   width: '50px',
   borderRadius: 50
  },

  image: {
    aspectRatio: 1 / 1,
  }
});
