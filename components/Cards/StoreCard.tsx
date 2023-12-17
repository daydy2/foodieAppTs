import {
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  Pressable,
} from "react-native";
import React from "react";
import { colors } from "../../util/color";

interface StoreCardProps {
  imgUrl: string;
  name: string;
  location: string;
}

const StoreCard: React.FC<StoreCardProps> = ({ imgUrl, name, location }) => {
  const onPress = () => {};
  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) =>
        pressed ? [styles.container, styles.pressed] : styles.container
      }
      onPress={onPress}
    >
      <View style={styles.innerContainer}>
        <View style={{ flexDirection: "row", gap: 24, alignItems: "center" }}>
          <Image source={{ uri: imgUrl }} alt={name} style={styles.image} />
          <Text style={styles.text}>{name}</Text>
        </View>
      </View>
        {/* <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.text}>{location}</Text>
        </View> */}
    </Pressable>
  );
};

export default StoreCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    paddingVertical: 8,
    marginBottom: 8,
    marginTop: 8,
    paddingLeft: 8,
    paddingRight: 16,
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
      android: { elevation: 4 },
    }),
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 16,
  },
  text: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "400",
    fontFamily: "YaroRg",
  },
  pressed: {
    opacity: 0.4,
  },
});
