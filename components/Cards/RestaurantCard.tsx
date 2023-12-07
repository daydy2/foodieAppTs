import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

interface RestaurantCardProps {
  imgUrl: string;
  index: number;
  dataIndex: any;
  name: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  imgUrl,
  index,
  dataIndex,
  name,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          marginLeft: index == 0 ? 32 : 8,
          marginRight: index === dataIndex - 1 ? 32 : 8,
        },
      ]}
    >
      <Image source={{ uri: imgUrl }} style={styles.image} alt={name} />
    </View>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    position: "relative",
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 16,
    backgroundColor: "white",
  },
});
