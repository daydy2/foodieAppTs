import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "react-query";
import mealSlice from "../store/mealStore";
import { colors } from "../util/color";
import TopNav from "../components/Nav/TopNav";
import GoBack from "../components/Common/GoBack";
import MealCard from "../components/Cards/MealCard";

const Meal = ({ route, navigation }: any) => {
  const catId = route.params.catId;
  const catName = route.params.catName;
  console.log("Meal", catId, catName);
  const getMealsByCategory = mealSlice(
    (state: any) => state.getMealsByCategory
  );
  const { data, isLoading } = useQuery("getMealsByCategory", () =>
    getMealsByCategory(catId)
  );

  const Goback = () => {
    navigation.navigate("BottomTab", { screen: "Category" });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={styles.container}>
          <TopNav>
            <GoBack goBack={Goback} />
          </TopNav>
          <View style={styles.header}>
            <Text style={styles.headerText}>{catName}</Text>
          </View>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {data ? (
              data?.map((data: any, index: number) => (
                <MealCard
                  image={data.imageUrl}
                  name={data.title}
                  price={data.price}
                  key={index}
                />
              ))
            ) : (
              <ActivityIndicator size={"large"} color={colors.primary} />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Meal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 30,
    backgroundColor: "white",
    gap: 24,
  },
  header: {
    width: "100%",
    alignItems: "center",
  },
  headerText: {
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "600",
    color: colors.secondary,
  },
});
