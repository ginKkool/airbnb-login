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
import Logo from "../../components/Logo";
import Title from "../../components/Title";
import Input from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import SignButton from "../../components/SignButton";
import RedirectButton from "../../components/RedirectionButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    // alert("envoyé");

    try {
      // const response = await axios.post()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      style={{ flex: 1 }}
    >
      <View style={styles.logoTitleContainer}>
        <Logo />
        <Title content="Sign up" />
      </View>
      <View>
        <Input placeholder="email" state={email} setState={setEmail} />
        <Input placeholder="username" />
        <TextArea placeholder="describe yourself in a few words..." />
        <Input placeholder="password" />
        <Input placeholder="confirm password" />
      </View>
      <View>
        <Text style={styles.redText}>Passwords must be the same</Text>
        <SignButton text="Sign up" onPressFunc={handleSubmit} />
        <RedirectButton
          text={"Already have an account ? Login !"}
          screen={"/signin"}
        />
        {/* <Link style={styles.noAccountText} href={"/signin"}>
          Already have an account ? Sign in
        </Link> */}
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 30,
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
});
