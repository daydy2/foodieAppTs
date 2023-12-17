import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Buttons from "../Button/Button";
import { CookieIcon } from "../Icons/Icon";
import { colors } from "../../util/color";

// const blurhash =
//   "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Loadup = ({ navigation }: { navigation: any }): JSX.Element => {
  const redirectHome = () => {
    navigation.navigate("BottomTab", { screen: "Home" });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require("../../assets/img/cover.png")} />
      </View>
      <View style={styles.middle}>
        <Text style={styles.middleText}>
          Everything for your stomach delivered in minutes
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Buttons
          icon={<CookieIcon color={"#fff"} size={25} />}
          onPress={redirectHome}
          textColor="#fff"
          linear={true}
        >
          Order your meal
        </Buttons>
      </View>
    </SafeAreaView>
  );
};

export default Loadup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 70,
    alignItems: "center",
  },
  middle: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  buttonContainer: {
    padding: 6,
    marginHorizontal: "auto",
    borderWidth: 2,
    borderRadius: 16,
    borderColor: colors.primary,
    width: "80%",
  },
  middleText: {
    fontSize: 24,
    fontFamily: "YaroRg",
    fontWeight: "400",
    lineHeight: 36,
    textAlign: "center",
  },
});
