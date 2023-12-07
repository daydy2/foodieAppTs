import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopNav from "../components/Nav/TopNav";
import { useQuery } from "react-query";
import mealSlice from "../store/mealStore";
import LinearGradient from "react-native-linear-gradient";
import GoBack from "../components/Common/GoBack";
import { colors } from "../util/color";
import IngredientCard from "../components/Cards/IngredientCard";
import { MealType } from "../types/type";
import { Ionicons } from "@expo/vector-icons";

const Detail = ({ route, navigation }: any) => {
  const [open, setOpen] = useState<boolean>(false);

  const mealId = route.params.mealId;
  const getMealById = mealSlice((state: any) => state.getMealById);

  const Goback = () => {
    navigation.navigate("Home");
  };
  const { data: meal, isLoading } = useQuery<MealType>("getMealById", () =>
    getMealById(mealId)
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 32,
            gap: 56,
            paddingVertical: 30,
          }}
        >
          <TopNav>
            <GoBack goBack={Goback} />
          </TopNav>
          {meal ? (
            <View style={styles.bottom}>
              <Image
                source={{ uri: meal?.imageUrl }}
                alt={meal?.title}
                style={styles.mealImage}
              />
              <View style={styles.foodCard}>
                <LinearGradient
                  colors={["#14232700", "#14232787", "#142327"]}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 1.0 }}
                  locations={[0, 3.75, 1]}
                  style={styles.gradient}
                >
                  <Text style={styles.title}>{meal?.title}</Text>
                  <Text style={styles.title}>Price: ${meal?.price}</Text>
                  <Text style={{ color: "white" }}>
                    {meal?.ingredients.length} ingredients
                  </Text>
                </LinearGradient>
              </View>
            </View>
          ) : (
            <ActivityIndicator size={"large"} color={colors.primary} />
          )}
          <View style={styles.ingredients}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 16,
              }}
            >
              <Text style={styles.ingredientsTitle}>
                Ingredients ({meal?.ingredients.length})
              </Text>
              <TouchableOpacity onPress={() => setOpen((prev) => !prev)}>
                <Ionicons
                  name="add-circle-outline"
                  size={24}
                  color={colors.primary}
                />
              </TouchableOpacity>
            </View>
            {open && (
              <>
                {meal ? (
                  meal.ingredients.map((ing: any, index: any) => (
                    <IngredientCard ingredient={ing} key={index} />
                  ))
                ) : (
                  <ActivityIndicator size={"large"} color={colors.primary} />
                )}
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  bottom: {
    width: "100%",
    height: 304,
    position: "relative",
    borderRadius: 24,
  },
  mealImage: {
    width: "100%",
    height: "100%",
    borderRadius: 24,
  },
  foodCard: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "100%",
  },
  gradient: {
    paddingVertical: 24,
    paddingHorizontal: 32,
    gap: 8,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
  },
  ingredients: {
    gap: 24,
  },
  ingredientsTitle: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.secondary,
  },
});
