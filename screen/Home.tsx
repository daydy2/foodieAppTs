import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import Timer from "../components/Common/Timer";
import TopNav from "../components/Nav/TopNav";
import Search from "../components/Search/Search";
import CardPlanner from "../components/Cards/CardPlanner";
import Slider from "../components/Slider/Slider";

const Home = (): JSX.Element => {
  const [dismiss, setDismiss] = useState<Boolean>(false);

  useEffect(() => {
    setDismiss((prev) => true);
  }, []);

  const PlanHandler = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.innerContainer}>
        <View style={styles.header}>
          <TopNav>
            <Timer />
          </TopNav>
          <Search />
          {dismiss && (
            <CardPlanner
              dismiss={() => setDismiss((prev) => !prev)}
              plan={PlanHandler}
            />
          )}
        </View>
        <View style={styles.mealSlider}>
          <Text style={styles.mealSliderText}>You should try these</Text>
          <Slider card="food" />
        </View>
        <View
          style={[
            styles.mealSlider,
            {
              paddingBottom: 100,
            },
          ]}
        >
          <Text style={styles.mealSliderText}>Popular Restaurant</Text>
          <Slider card="rest" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    paddingTop: 30,
    gap: 56,
    backgroundColor: "#fff",
  },
  header: {
    gap: 40,
    paddingHorizontal: 32,
  },
  mealSliderText: {
    fontSize: 16,
    fontWeight: "400",
    paddingHorizontal: 32,
    fontFamily: "YaroRg",
  },
  mealSlider: {
    marginTop: 56,
    gap: 24,
  },
});
