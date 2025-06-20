import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";
import Logo from "../components/Logo";
import { Redirect } from "expo-router";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Logo />
      <Redirect href={"/signin"} />
      <Text style={styles.welcomeText}>Welcome home !</Text>
      {/* <Link style={styles.enterText} href={"/signin"}>
        Enter
      </Link> */}
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
