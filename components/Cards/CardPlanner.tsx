import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { getTimeAndDate } from "../../util/util";
import Buttons from "../Button/Button";
import { colors } from "../../util/color";

interface CardPlannerProps {
  dismiss: () => void;
  plan: () => void;
}

const CardPlanner: React.FC<CardPlannerProps> = ({ dismiss, plan }) => {
  const { hours } = getTimeAndDate();
  let timeOfDay;
  let nextTime;

  if (hours >= 5 && hours < 12) {
    timeOfDay = "morning";
    nextTime = "lunch";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
    nextTime = "dinner";
  } else {
    timeOfDay = "evening";
    nextTime = "breakfast";
  }
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.text}>
          Good {timeOfDay}. Do you want to plan ahead for {nextTime}?
        </Text>
        <View style={styles.buttonContainer}>
          <Buttons
            color="transparent"
            textColor={colors.primary}
            linear={false}
            onPress={dismiss}
          >
            Dismiss
          </Buttons>
          <Buttons
            color={colors.primary}
            textColor="white"
            linear={false}
            onPress={plan}
          >
            Okay, let's plan
          </Buttons>
        </View>
      </View>
    </View>
  );
};

export default CardPlanner;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.secondary,
    gap: 32,
    paddingVertical: 40,
    paddingHorizontal: 32,
    borderRadius: 24,
  },
  text: {
    lineHeight: 25.6,
    fontSize: 16,
    fontWeight: "400",
    color: "white",
    fontFamily: "YaroRg",
  },
  inner: {
    gap: 32,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 32,
    alignItems: "center",
  },
});
