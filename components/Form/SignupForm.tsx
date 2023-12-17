import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import Input from "../Common/Input";
import Buttons from "../Button/Button";
import { useMutation } from "react-query";
import { LoginData } from "../../types/type";
import { useNavigation } from "@react-navigation/native";
import userSlice from "../../store/userStore";
import { colors } from "../../util/color";

const SignupForm = () => {
  const navigation = useNavigation();
  const register = userSlice((state) => state.register);
  const initialValues = {
    email: "",
    password: "",
    name: "",
  };
  const signupMutation = useMutation(
    (formData: LoginData) => register(formData),
    {
      onSuccess: (data) => {
        if (data) {
          navigation.navigate("LoginScreen");
        }
      },
      onError: (error) => {
        console.warn(error);
      },
    }
  );
  const onSubmit = (values: any, { resetForm }: any) => {
    console.log(values);
    signupMutation.mutate(values);
    resetForm();
  };

  if (signupMutation.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <StatusBar hidden />
        <ActivityIndicator size={"large"} color={colors.primary} />
      </View>
    );
  }
  return (
    <View style={styles.formContainer}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <View style={{ paddingVertical: 16 }}>
              <Input
                name={"name"}
                err={errors.name}
                handleBlur={handleBlur}
                handleChange={handleChange}
                placeholder="Enter your name"
                password={false}
                values={values}
              />
            </View>
            <View style={{ paddingVertical: 16 }}>
              <Input
                name={"email"}
                err={errors.email}
                handleBlur={handleBlur}
                handleChange={handleChange}
                placeholder="Enter your email"
                password={false}
                values={values}
              />
            </View>
            <View style={{ paddingVertical: 16 }}>
              <Input
                name={"password"}
                err={errors.password}
                handleBlur={handleBlur}
                handleChange={handleChange}
                placeholder="Enter your password"
                password={true}
                values={values}
              />
            </View>
            <View>
              <Buttons
                linear={true}
                textColor="white"
                onPress={handleSubmit}
                disable={!!values.email && !!values.password}
                loading={signupMutation.isLoading}
              >
                Signup
              </Buttons>
            </View>
            <View style={{ marginVertical: 10 }}>
              <Text style={{ textAlign: "center", fontFamily: "YaroRg" }}>
                Registered already? Login
              </Text>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  formContainer: {},
});
