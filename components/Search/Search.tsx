import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../../util/color";
import { SearchIcon } from "../Icons/Icon";

const Search = (): JSX.Element => {
  const [searchTerm, setSearchTearm] = useState<string>("");
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <SearchIcon size={24} color={colors.primary} />
        <TextInput
          keyboardType="default"
          value={searchTerm}
          onChangeText={setSearchTearm}
          autoCorrect={false}
          placeholder="Search food or restaurant..."
          placeholderTextColor={colors.placeholder}
          autoCapitalize="none"
          blurOnSubmit
          style={styles.input}
          maxLength={28}
        />
      </View>
      {searchTerm && (
        <ScrollView style={styles.dropdown}>
          {new Array(20).fill(null).map((_, index) => (
            <Text key={index}>{index + 1}</Text>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 28,
    paddingVertical: 20,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 88,
    position: "relative",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.placeholder,
    textAlign: "left",
    width: "100%",
  },
  dropdown: {
    position: "absolute",
    top: 44,
    left: 0,
    zIndex: 2,
    paddingHorizontal: 24,
    paddingVertical: 24,
    width: "100%",
  },
});
