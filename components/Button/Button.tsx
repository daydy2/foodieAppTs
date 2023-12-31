import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { ReactNode } from "react";
import LinearGradient from "react-native-linear-gradient";

interface ButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  onPress?: () => void;
  textColor: string;
  linear: boolean;
  color?: string;
  propStyle?: object;
  disable?: boolean;
  loading?: boolean;
}
const Buttons: React.FC<ButtonProps> = ({
  children,
  icon,
  onPress,
  textColor,
  linear,
  color,
  propStyle,
  disable = true,
  loading = false,
}) => {
  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => pressed && styles.pressed}
      onPress={disable ? onPress : () => {}}
    >
      {linear ? (
        <LinearGradient
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          colors={["#06C167", "#165B3A"]}
          locations={[0, 9.56]}
          style={styles.container}
        >
          {loading ? (
            <ActivityIndicator size={"small"} color={"white"} />
          ) : (
            <>
              <Text style={[{ color: textColor }, styles.buttonText]}>
                {children}
              </Text>
              {icon && icon}
            </>
          )}
        </LinearGradient>
      ) : (
        <View style={[styles.container, { backgroundColor: color }, propStyle]}>
          {loading ? (
            <ActivityIndicator size={"small"} color={"white"} />
          ) : (
            <>
              <Text style={[{ color: textColor }, styles.buttonText]}>
                {children}
              </Text>
              {icon && icon}
            </>
          )}
        </View>
      )}
    </Pressable>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    borderRadius: 10,
    backgroundImage: "",
    // width: "100%",
  },
  pressed: {
    opacity: 0.6,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 20,
    fontFamily: "YaroRg",
  },
});

{
  /*  */
}
