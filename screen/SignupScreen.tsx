import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserIcon } from "../components/Icons/Icon";
import SignupForm from "../components/Form/SignupForm";

const SignupScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.icon}>
          <UserIcon />
          <Text style={styles.authText}>Signup</Text>
        </View>
        <SignupForm />
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 32,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  authText: {
    fontSize: 18,
    lineHeight: 20.5,
    fontWeight: "500",
    textTransform: "uppercase",
    fontFamily: "YaroRg",
  },
});
