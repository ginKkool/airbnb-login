import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Pressable,
} from "react-native";
import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../_layout";
import { Link, Router } from "expo-router";
import Logo from "../../components/Logo";
import Title from "../../components/Title";
import Input from "../../components/Input";
import SignButton from "../../components/SignButton";
import RedirectButton from "../../components/RedirectionButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SignIn() {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("lucasz@mail.com");
  const [password, setPassword] = useState("azerty");

  const handleSubmit = async () => {
    // alert("envoyé");
    //router.replace("/home");
    try {
      const response = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
        {
          email,
          password,
        }
      );
      // console.log(response.data.token);
      // console.log(response.data.id);
      login({ id: response.data.id, token: response.data.token });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoTitleContainer}>
        <Logo />
        <Title content="Sign in" />
      </View>
      <View>
        <Input placeholder="email" state={email} setState={setEmail} />
        <Input
          placeholder="Password"
          state={password}
          setState={setPassword}
          secure={true}
        />
      </View>
      <View>
        <Text style={styles.redText}>Please fill all fields</Text>
        <SignButton text="Sign in" onPressFunc={handleSubmit} />
        <RedirectButton text={"No account ? Register !"} screen={"/signup"} />
      </View>
    </KeyboardAwareScrollView>
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
});
