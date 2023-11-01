import { StyleSheet, Text, View } from "react-native";

export default function StopWatch({ timer }) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{timer}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: 60,
    paddingVertical: 30,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 60,
  },
  text: {
    fontSize: 48,
  },
});
