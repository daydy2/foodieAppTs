import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { colors } from "../../util/color";
import { CaretLeft } from "../Icons/Icon";

const GoBack = ({ goBack }: any) => {
  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      onPress={goBack}
      style={({ pressed }) =>
        pressed ? [styles.container, styles.pressed] : styles.container
      }
    >
      <View>
        <CaretLeft size={24} color="#165B3A" />
      </View>
    </Pressable>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderRadius: 25,
    padding: 12,
    height: 50,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.4,
  },
});
