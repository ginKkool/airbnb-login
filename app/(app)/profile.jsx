import { View, StyleSheet, Text } from "react-native";
import { Link, router } from "expo-router";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <Link style={styles.text} href={"/signin"} replace={true}>
        disconnect
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
