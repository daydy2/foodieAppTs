import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { Formik } from "formik";
import Input from "../Common/Input";
import Buttons from "../Button/Button";
import userSlice from "../../store/userStore";
import { useMutation } from "react-query";
import { LoginData } from "../../types/type";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
  const login = userSlice((state) => state.login);
  const navigation = useNavigation();
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values: any, { resetForm }: any) => {
    loginMutation.mutate(values);
    resetForm();
  };
  const loginMutation = useMutation((formData: LoginData) => login(formData), {
    onSuccess: (data) => {
      if (data) {
        navigation.navigate("BottomTab", { screen: "Home" });
      }
    },
    onError: (error) => {
      console.warn(error);
    },
  });
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
                loading={loginMutation.isLoading}
              >
                Login
              </Buttons>
            </View>
            <View style={{ marginVertical: 10 }}>
              <Text style={{ textAlign: "center", fontFamily: "YaroRg" }}>
                Not registered? Create new account
              </Text>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  formContainer: {},
});
