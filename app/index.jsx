import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";
import Logo from "../components/logo";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.welcomeText}>Bienvenue sur AirBnB !</Text>
      <Link style={styles.enterText} href={"/signin"}>
        ➤ Entrez ici
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  enterText: {
    fontSize: 30,
    color: "#717171",
    fontWeight: "bold",
  },
});
