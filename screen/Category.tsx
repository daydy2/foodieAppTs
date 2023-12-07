import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import mealSlice from "../store/mealStore";
import { useQuery } from "react-query";
import CatCard from "../components/Cards/CatCard";
import { colors } from "../util/color";

const Category = (): JSX.Element => {
  const getAllCategory = mealSlice((state: any) => state.getAllCategory);

  const { data, isLoading } = useQuery("getAllCat", () => getAllCategory());

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        {data ? (
          <FlatList
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={(itemData) => (
              <CatCard category={itemData.item} name={itemData.item.name} />
            )}
          />
        ) : (
          <ActivityIndicator size={"large"} color={colors.primary} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
  },
});
