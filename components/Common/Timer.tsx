import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { getTimeAndDate } from "../../util/util";
import { colors } from "../../util/color";

const Timer = (): JSX.Element => {
  const { time, date } = getTimeAndDate();
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{time}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    color: colors.secondary,
    fontFamily: "YaroRg",
  },
  date: {
    fontSize: 10,
    fontWeight: "400",
    color: colors.secondary,
    fontFamily: "YaroRg",
  },
});
