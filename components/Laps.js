import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Laps({ laps }) {
  return (
    <ScrollView style={styles.container}>
      {laps.map((item, index) => {
        return (
          <View style={styles.lap}>
            <Text style={{ color: "white" }}>{index + 1}</Text>
            <Text style={{ color: "white" }}>{item}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  lap: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-around",
    padding: 5,
    marginLeft: 35,
  },
  container: {
    flex: 1,
  },
});
