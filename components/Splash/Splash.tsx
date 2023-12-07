import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { UberIcon } from "../Icons/Icon";
import { SafeAreaView } from "react-native-safe-area-context";

interface SplashProps {
  navigation: any;
}

const Splash: React.FC<SplashProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Loadup");
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/img/wave-1.png")}
        style={styles.image}
      />
      <UberIcon />
      <View style={styles.textContainer}>
        <Text>Welcome to Uber Eats</Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 350,
    paddingBottom: 50,
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    opacity: 1,
  },
  image: {
    position: "absolute",
    top: -150,
    left: 100,
    zIndex: -9,
  },
  textContainer: {},
});
