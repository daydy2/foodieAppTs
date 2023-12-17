import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { colors } from "../../util/color";

interface InputProps {
  name: string;
  err?: string;
  handleChange: any;
  values: any;
  handleBlur: any;
  touched?: string;
  placeholder: string;
  password: boolean;
}

const Input = ({
  name,
  err,
  handleChange,
  values,
  handleBlur,
  touched,
  placeholder,
  password
}: InputProps): JSX.Element => {
  return (
    <TextInput
      onChangeText={handleChange(`${name}`)}
      onBlur={handleBlur(`${name}`)}
      value={values[name]}
      placeholder={placeholder}
      secureTextEntry={password}
      style={styles.text}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 18.6,
    borderWidth: 1,
    borderColor: colors.pepper,
    padding: 8,
    fontFamily: "YaroRg",
  },
});
