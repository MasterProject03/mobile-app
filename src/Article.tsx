import { StyleSheet, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import ArticleInfos from "../src/components/ArticleInfos";
import ArticleSources from "../src/components/ArticleSources";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Article() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar style="auto" />
        <ArticleInfos
          publisher="LeMonde"
          username="lemonde"
          title="Un vaste trafic de montres de luxe volées démantelé"
          author="Luc Leroux(Marseille, correspondant)"
        />
        <Text style={styles.text}>
          Après les bitcoins, les narcotrafiquants investissent le marché des
          montres de luxe. Ces Rolex, Audemars Piguet, Richard Mille et autres
          Patek Philippe dont les prix varient de 10 000 à 400 000 euros, sont,
          pour eux, un nouveau moyen pour blanchir leurs revenus colossaux.
          L’illustration de ce phénomène nouveau est apportée par une enquête de
          la police judiciaire de Nice qui a abouti, entre les 21 et 23 juin, à
          l’interpellation de trente-trois personnes en France et à Anvers
          (Belgique), membres, selon Patrice Ollivier-Maurel, procureur de la
          République adjoint de Marseille, d’un « réseau criminel international de
          grande envergure de recel de produits de luxe ». En août 2021, les
          policiers s’alarment d’une recrudescence des vols de montres de luxe à
          Nice, Saint-Tropez, Paris et dans plusieurs métropoles touristiques
          européennes. Pour les seules Alpes-Maritimes, ce type de vols commis
          avec violences, voire sous la menace d’une arme ou donnant lieu à une
          séquestration, a augmenté de 90 % entre 2020 et 2021, selon les chiffres
          dévoilés par Florent Mion, chef de l’antenne de police judiciaire de
          Nice lors d’une conférence de presse, lundi 27 juin à Marseille. Les
          choses ne font que s’accélérer : les soixante-dix montres de luxe volées
          dans les Alpes-Maritimes au cours des cinq premiers mois de l’année
          représentent une augmentation de 600 %. « On est sur un marché
          spéculatif, explique M. Mion. Avec des prix qui ont explosé, suscitant
          la convoitise comme objet de prédation pour les voyous ou comme objet de
          thésaurisation pour des investisseurs qui peuvent ainsi détenir
          plusieurs centaines voire plusieurs millions d’euros dans un coffre. »
          Après les bitcoins, les narcotrafiquants investissent le marché des
          montres de luxe. Ces Rolex, Audemars Piguet, Richard Mille et autres
          Patek Philippe dont les prix varient de 10 000 à 400 000 euros, sont,
          pour eux, un nouveau moyen pour blanchir leurs revenus colossaux.
          L’illustration de ce phénomène nouveau est apportée par une enquête de
          la police judiciaire de Nice qui a abouti, entre les 21 et 23 juin, à
          l’interpellation de trente-trois personnes en France et à Anvers
          (Belgique), membres, selon Patrice Ollivier-Maurel, procureur de la
          République adjoint de Marseille, d’un « réseau criminel international de
          grande envergure de recel de produits de luxe ». En août 2021, les
          policiers s’alarment d’une recrudescence des vols de montres de luxe à
          Nice, Saint-Tropez, Paris et dans plusieurs métropoles touristiques
          européennes. Pour les seules Alpes-Maritimes, ce type de vols commis
          avec violences, voire sous la menace d’une arme ou donnant lieu à une
          séquestration, a augmenté de 90 % entre 2020 et 2021, selon les chiffres
          dévoilés par Florent Mion, chef de l’antenne de police judiciaire de
          Nice lors d’une conférence de presse, lundi 27 juin à Marseille. Les
          choses ne font que s’accélérer : les soixante-dix montres de luxe volées
          dans les Alpes-Maritimes au cours des cinq premiers mois de l’année
          représentent une augmentation de 600 %. « On est sur un marché
          spéculatif, explique M. Mion. Avec des prix qui ont explosé, suscitant
          la convoitise comme objet de prédation pour les voyous ou comme objet de
          thésaurisation pour des investisseurs qui peuvent ainsi détenir
          plusieurs centaines voire plusieurs millions d’euros dans un coffre. »
        </Text>
        <ArticleSources/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    alignItems: "center",
    paddingBottom: 200
  },

  container: {
    padding: 25,
  },

  text: {
    color: "#ffffff",
  },
});
