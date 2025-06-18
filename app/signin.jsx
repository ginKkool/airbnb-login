import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { Link } from "expo-router";
import Logo from "../components/logo";
import Title from "../components/title";
import Input from "../components/input";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoTitleContainer}>
        <Logo />
        <Title content="Sign in" />
      </View>
      <View>
        <Input placeholder="Email" state={email} setState={setEmail} />
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

  logoTitleContainer: {
    alignItems: "center",
    gap: 25,
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
