import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "react-query";
import mealSlice from "../store/mealStore";
import { colors } from "../util/color";
import FoodCard from "../components/Cards/FoodCard";
import TopNav from "../components/Nav/TopNav";
import GoBack from "../components/Common/GoBack";

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
    navigation.navigate("BottomTab", {screen: 'Category'});
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
            <FlatList
              data={data}
              keyExtractor={(item) => item._id}
              showsVerticalScrollIndicator={false}
              renderItem={(itemData) => (
                <FoodCard
                  imgUrl={itemData.item.imageUrl}
                  name={itemData.item.title}
                  price={itemData.item.price}
                  index={itemData.index}
                  dataIndex={0}
                  slider={false}
                  id={itemData.item._id}
                />
              )}
            />
          ) : (
            <ActivityIndicator size={"large"} color={colors.primary} />
          )}
        </View>
      </View>
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
