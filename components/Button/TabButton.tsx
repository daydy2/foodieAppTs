import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { CategoryIcon, HomeIcon, ProfileIcon, StoreIcon } from "../Icons/Icon";
import { colors } from "../../util/color";
import Animated, { SlideInRight, SlideOutRight, ZoomIn, ZoomOut } from 'react-native-reanimated';

interface TabButtonProps { 
  props: any;
  iconName: string;
}

const TabButton: React.FC<TabButtonProps> = ({ props, iconName }) => {
  const { onPress, style, accessibilityState, children } = props;
  const focused = accessibilityState.selected;
  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={onPress}
      activeOpacity={1}
    >
      <Animated.View style={focused && styles.selected} entering={ZoomIn} exiting={ZoomOut}>
        {iconName == "Home" && (
          <HomeIcon
            color={focused ? colors.primary : colors.secondary}
            size={24}
          />
        )}
        {iconName == "Store" && (
          <StoreIcon
            color={focused ? colors.primary : colors.secondary}
            size={24}
          />
        )}
        {iconName == "Cuisine" && (
          <CategoryIcon
            color={focused ? colors.primary : colors.secondary}
            size={24}
          />
        )}
        {iconName == "Profile" && (
          <ProfileIcon
            color={focused ? colors.primary : colors.secondary}
            size={24}
          />
        )}
        {focused && <Animated.Text entering={SlideInRight} exiting={SlideOutRight} style={styles.selectedText}>{iconName}</Animated.Text>}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default TabButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  selected: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    backgroundColor: "#D7F5E6",
    borderRadius: 12,
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  selectedText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "YaroRg",
  },
});
