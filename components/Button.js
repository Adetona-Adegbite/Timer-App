import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Button({ text, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={{ padding: 5 }} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 1000,
  },
  buttonText: {
    color: "white",
  },
});
