import { View, StyleSheet, Text } from "react-native";
import { router, Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Link style={styles.text} href={"/users/settings"}>
        Settings
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

  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
