import React, { PropsWithChildren, ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../util/color";
import { Feather } from "@expo/vector-icons";
import { CartIcon } from "../Icons/Icon";

const TopNav = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <View style={styles.container}>
      {children}
      <View style={styles.iconContainer}>
        {/* <Feather name="shopping-cart" size={24} color={colors.mint} /> */}
        <CartIcon size={24} color={colors.mint}/>
      </View>
    </View>
  );
};

export default TopNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  iconContainer: {
    backgroundColor: colors.secondary,
    opacity: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 110,
    height: 50,
  },
});
