import { StyleSheet, Text, View, Linking } from "react-native";

export default function ArticleSources({...props}) {
  const sources = [
    {
      title: "Top 2006",
      link: "https://abcnews.go.com/",
      source: "PME magazine, numéro hors série",
    },
    {
      title: "Rolex maintient son leadership horloger",
      link: "https://abcnews.go.com/",
      source: "Le Temps, 19 juin 2013",
    },
    {
      title: "Hans Wilsdorf 1881 - 1960, Allemagne",
      link: "https://abcnews.go.com/",
      source: "lepoint.fr (consulté le 1er juin 2021)",
    },
  ]
  return (
    <View>
      <Text style={styles.text}>Sources</Text>
      {sources.map((source, key) => {
        return (
          <Text key={key} style={styles.source}>
            <Text style={styles.title}>{source.title}</Text>
            <Text style={styles.origin} onPress={() => Linking.openURL(source.link)}> | {source.source}</Text>
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  source: {
    marginBottom: 10,
  },

  title: {
    color: "#ffffff",
  },

  origin: {
    color: "#DA90DA",
    textDecorationLine: "underline",
  },

  text: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 30,
  },
});
