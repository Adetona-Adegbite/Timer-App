import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Button from "./components/Button";
import StopWatch from "./components/Stopwatch";
import { useEffect, useRef, useState } from "react";
import Laps from "./components/Laps";

export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  const [lapList, setLapList] = useState([]);
  const timerRef = useRef();
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1000);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);
  function toggleTimer() {
    if (isRunning) {
      setIsRunning(false);
    } else {
      setIsRunning(true);
    }
  }
  function resetTimer() {
    setIsRunning(false);
    setTimer(0);
  }
  function formatTimer(time) {
    const seconds = Math.floor(time / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    // console.log(
    //   `${hours.toString()}:${minutes.toString()}:${seconds.toString()}`
    // );
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
  function lapTImer(time) {
    const seconds = Math.floor(time / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    setLapList((prevList) => [
      ...prevList,
      `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
    ]);
  }
  return (
    <View style={styles.container}>
      <Header text="Stopwatch⌚" />
      <StopWatch timer={formatTimer(timer)} />
      <View style={styles.buttonContainer}>
        <Button onPress={toggleTimer} text={isRunning ? "Pause" : "Start"} />
        <Button onPress={resetTimer} text="Reset" />
      </View>
      <Button onPress={lapTImer.bind(this, timer)} text="Lap" />
      <View style={styles.headers}>
        <Text style={styles.lapText}>Lap</Text>
        <Text style={styles.lapText}>Time</Text>
      </View>
      <Laps laps={lapList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 100,
    backgroundColor: "#464F51",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
  },
  headers: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-around",
    padding: 20,
  },
  lapText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
