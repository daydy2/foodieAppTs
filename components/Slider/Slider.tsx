import React, { useEffect, ReactNode } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import mealSlice from "../../store/mealStore";
import { useQuery } from "react-query";
import FoodCard from "../Cards/FoodCard";
import RestaurantCard from "../Cards/RestaurantCard";
import restaurantSlice from "../../store/restaurantStore";
import { colors } from "../../util/color";
import { MealType, RestaurantType } from "../../types/type";

interface SliderProps {
  card: string;
}

const Slider: React.FC<SliderProps> = ({ card }) => {
  const getAllMeals = mealSlice((state: any) => state.getAllMeals);

  const getAllRestaurant = restaurantSlice(
    (state: any) => state.getAllRestaurant
  );

  const { data, isLoading } = useQuery<MealType[]>("get all meals", () =>
    getAllMeals()
  );

  const { data: restaurant, isLoading: RestaurantLoading } = useQuery<
    RestaurantType[]
  >("get all restaurant", () => getAllRestaurant());

  if (isLoading || RestaurantLoading) {
    return <ActivityIndicator size={"large"} color={colors.primary} />;
  }
  return (
    <View>
      {card === "food" &&
        (data ? (
          <FlatList
            data={data}
            horizontal={true}
            keyExtractor={(item) => item._id}
            renderItem={(itemData) => (
              <FoodCard
                index={itemData.index}
                imgUrl={itemData.item.imageUrl}
                name={itemData.item.title}
                price={itemData.item.price}
                id={itemData.item._id.toString()}
                dataIndex={data?.length}
                slider={true}
              />
            )}
            showsHorizontalScrollIndicator={false}
          />
        ) : (
          <ActivityIndicator size={"large"} color={colors.primary} />
        ))}
      {card === "rest" && (
        <FlatList
          data={restaurant}
          horizontal={true}
          keyExtractor={(item) => item._id}
          renderItem={(itemData) => (
            <RestaurantCard
              index={itemData.index}
              imgUrl={itemData.item.imageUrl}
              name={itemData.item.name}
              dataIndex={restaurant?.length}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});
