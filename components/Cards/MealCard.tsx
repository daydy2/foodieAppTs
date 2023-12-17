import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { CartPlusIcon } from "../Icons/Icon";
import { colors } from "../../util/color";

interface MealCardProps {
  image: string;
  name: string;
  price: string;
}

const MealCard: React.FC<MealCardProps> = ({ image, name, price }) => {
  const { width } = useWindowDimensions();
  const onPress = () => {};
  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <Image
          source={{ uri: image }}
          alt={name}
          style={[
            { width: width - 64, marginHorizontal: "auto" },
            styles.image,
          ]}
        />
      </View>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.bottomView}>
        <Text style={styles.textPrice}>$ {price}</Text>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          onPress={onPress}
          style={({ pressed }) => pressed && styles.pressed}
        >
          <View style={styles.cart}>
            <View style={styles.iconContainer}>
              <CartPlusIcon color="white" size={16} />
            </View>
            <Text>Add to cart</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  container: {
    gap: 16,
    marginBottom: 16,
    marginTop: 16,
  },
  image: {
    borderRadius: 24,
    height: 300,
    objectFit: "cover",
  },
  text: {
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 25.6,
    fontFamily: "YaroRg",
  },
  textPrice: {
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 21.6,
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
  bottomView: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  cart: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
});
