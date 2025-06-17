import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        resizeMode="cover"
        source={require("../assets/imgs/logo.png")}
      />
      <Text style={styles.title}>Bienvenue sur AirBnB !</Text>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  imageStyle: {
    width: 150,
    height: 150,
  },
  enterText: {
    fontSize: 30,
    color: "#717171",
    fontWeight: "bold",
  },
});
