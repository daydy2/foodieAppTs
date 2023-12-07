import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import { colors } from "../../util/color";

interface IngredientProps {
  ingredient: string;
}

const IngredientCard: React.FC<IngredientProps> = ({ ingredient }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ingredient}</Text>
    </View>
  );
};

export default IngredientCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: "white",
    shadowColor: colors.primary,
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 1,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 18,
    color: colors.secondary,
  },
});
