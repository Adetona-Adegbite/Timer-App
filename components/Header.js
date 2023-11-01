import { StyleSheet, Text, View } from "react-native";

export default function Header({ text }) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: "red",
    borderRadius: 5,
    marginBottom: 40,
  },
  text: {
    fontSize: 32,
  },
});
