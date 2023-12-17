import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopNav from "../components/Nav/TopNav";
import Timer from "../components/Common/Timer";
import { UserIcon } from "../components/Icons/Icon";
import Buttons from "../components/Button/Button";
import { colors } from "../util/color";

const Profile = ({ navigation }: any): JSX.Element => {
  const toLoginScreen = () => {
    navigation.navigate("LoginScreen");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, paddingVertical: 30, paddingHorizontal: 32 }}>
        <TopNav>
          <Timer />
        </TopNav>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 40,
          }}
        >
          <UserIcon />
        </View>
        <View style={styles.redirect}>
          <Text style={styles.headerText}>
            Log in or create an account to see your profile data
          </Text>
          <Pressable
            android_ripple={{ color: "#ccc" }}
            style={({ pressed }) =>
              pressed ? [styles.propStyle, styles.pressed] : styles.propStyle
            }
            onPress={() => {}}
          >
            <Image
              source={require("../assets/img/Google.png")}
              style={{ width: 21, height: 21 }}
            />
            <Text
              style={{
                marginLeft: 16,
                fontSize: 16,
                fontWeight: "400",
                color: colors.primary,
                fontFamily: "YaroRg",
              }}
            >
              Continue with Google
            </Text>
          </Pressable>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              lineHeight: 25.6,
              textAlign: "center",
              fontFamily: "YaroRg",
            }}
          >
            OR
          </Text>
          <Buttons
            color={colors.secondary}
            textColor="white"
            linear={false}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            Login to your account
          </Buttons>
          <Buttons
            linear={true}
            textColor="white"
            onPress={() => navigation.navigate("SignupScreen")}
          >
            Create a new account
          </Buttons>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  redirect: {
    gap: 32,
  },
  headerText: {
    fontSize: 16,
    lineHeight: 22.5,
    fontWeight: "400",
    textAlign: "center",
    fontFamily: "YaroRg",
  },
  propStyle: {
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 20,
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.4,
  },
});
