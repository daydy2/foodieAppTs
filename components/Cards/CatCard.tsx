import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import { colors } from "../../util/color";
import { useNavigation } from "@react-navigation/native";

interface CatCardProps {
  name: string;
  category: object;
}

const CatCard: React.FC<CatCardProps> = ({ name, category }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("Meals", {
      catId: category._id,
      catName: category.name,
    });
    // console.log('Catcard', category)
  };
  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      android_disableSound={true}
      style={({ pressed }) =>
        pressed ? [styles.pressed, styles.container] : styles.container
      }
      onPress={onPress}
    >
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

export default CatCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    paddingVertical: 8,
    marginBottom: 8,
    marginTop: 8,
    paddingLeft: 8,
    paddingRight: 16,
    borderRadius: 16,
    backgroundColor: "white",
    shadowColor: colors.primary,
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 1,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: { elevation: 4 },
    }),
  },
  pressed: {
    ...Platform.select({
      ios: {
        opacity: 0.4,
      },
    }),
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
  },
});
