import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CartPlusIcon } from "../Icons/Icon";
import { colors } from "../../util/color";
import { useNavigation } from "@react-navigation/native";

interface FoodCardProps {
  imgUrl: string;
  name: string;
  price: string;
  index?: number;
  dataIndex: number;
  id: string;
  slider: boolean
}

const FoodCard: React.FC<FoodCardProps> = ({
  imgUrl,
  name,
  price,
  index,
  dataIndex,
  id,
  slider
}) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("Detail", { mealId: id });
  };

  return (
    <View
      style={[
        styles.container,
        {
          marginLeft: slider ? (index == 0 ? 32 : 12) : 0,
          marginRight: slider ? (index === dataIndex - 1 ? 32 : 12) : 0,
        },
      ]}
    >
      <Image source={{ uri: imgUrl }} style={styles.image} alt={name} />
      <Text style={styles.name}>{name}</Text>
      <View style={styles.bottom}>
        <Text style={styles.price}>$ {price}</Text>

        <Pressable
          android_ripple={{ color: "#ccc" }}
          onPress={onPress}
          style={({ pressed }) => pressed && styles.pressed}
        >
          <View style={styles.iconContainer}>
            <CartPlusIcon color="white" size={16} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 160,
    gap: 12,
    overflow: "hidden",
  },
  image: {
    height: 146,
    width: 160,
    borderRadius: 12,
  },
  name: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
    color: "black",
    fontFamily: "YaroRg",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
    color: "black",
    fontFamily: "YaroRg",
  },
  pressed: {
    opacity: 0.4,
  },
  iconContainer: {
    paddingVertical: 9,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
});
