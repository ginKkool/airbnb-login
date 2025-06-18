import { View, Image, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <View>
      <Image
        style={styles.logoStyle}
        resizeMode="cover"
        source={require("../assets/imgs/logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoStyle: {
    width: 150,
    height: 150,
  },
});

export default Logo;
