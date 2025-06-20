import { StyleSheet, TextInput } from "react-native";

export const TextArea = ({ state, setState, placeholder }) => {
  return (
    <TextInput
      style={styles.textArea}
      value={state}
      onChangeText={setState}
      placeholder={placeholder}
      multiline={true}
      numberOfLines={10}
      maxLength={250}
    />
  );
};

const styles = StyleSheet.create({
  textArea: {
    height: 100,
    width: 300,
    margin: 12,
    borderColor: "#d6393f",
    borderWidth: 1,
    padding: 10,
    marginTop: 30,
  },
});
