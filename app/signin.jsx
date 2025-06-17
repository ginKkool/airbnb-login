import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import { router } from "expo-router";
import { Link } from "expo-router";

export default function SignIn() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoTitleContainer}>
        <Image
          style={styles.imageStyle}
          resizeMode="cover"
          source={require("../assets/imgs/logo.png")}
        />
        <Text style={styles.titleText}>Sign in</Text>
      </View>
      <View>
        <TextInput style={styles.input} placeholder="email" />
        <TextInput style={styles.input} placeholder="password" />
      </View>
      <View>
        <Text style={styles.redText}>Please fill all fields</Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>
        <Link style={styles.noAccountText} href={"/signup"}>
          No account ? Register
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#717171",
  },
  logoTitleContainer: {
    alignItems: "center",
    gap: 25,
  },

  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderBottomColor: "#d6393f",
    borderBottomWidth: 2,
    padding: 10,
  },
  imageStyle: {
    width: 110,
    height: 110,
  },

  redText: {
    color: "#d6393f",
    textAlign: "center",
    paddingBottom: 15,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#717171",
  },

  button: {
    height: 60,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#d6393f",
    borderRadius: 50,
  },
  noAccountText: {
    color: "#717171",
    textAlign: "center",
    paddingTop: 15,
  },
});
