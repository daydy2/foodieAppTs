import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import restaurantSlice from "../store/restaurantStore";
import { useQuery } from "react-query";
import StoreCard from "../components/Cards/StoreCard";

const Store: React.FC = () => {
  const getAllRestaurant = restaurantSlice(
    (state: any) => state.getAllRestaurant
  );

  const { data, isLoading } = useQuery("get all rest.", () =>
    getAllRestaurant()
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
          paddingVertical: 30,
          position: "relative",
        }}
      >
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={(itemData) => (
            <StoreCard
              imgUrl={itemData.item.imageUrl}
              name={itemData.item.name}
              location={itemData.item.location}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Store;

const styles = StyleSheet.create({});
