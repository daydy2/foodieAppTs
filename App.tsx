import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Splash from "./components/Splash/Splash";
import Loadup from "./components/Splash/Loadup";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { QueryClient, QueryClientProvider } from "react-query";
import { colors } from "./util/color";
import Home from "./screen/Home";
import {
  CategoryIcon,
  HomeIcon,
  ProfileIcon,
  StoreIcon,
} from "./components/Icons/Icon";
import Store from "./screen/Store";
import Category from "./screen/Category";
import Profile from "./screen/Profile";
import Meal from "./screen/Meal";
import Detail from "./screen/Detail";
import { RootStackParamList } from "./types/type";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const queryClient = new QueryClient();
const BottomNav = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: colors.secondary,
        tabBarActiveTintColor: colors.primary,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 8,
          right: 10,
          left: 10,
          height: 70,
          borderRadius: 16,
          backgroundColor: "#bababa",
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <HomeIcon color={color} size={size} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarIcon: ({ color, size }) => (
            <StoreIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CategoryIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Proile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ProfileIcon color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App(): JSX.Element {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Loadup" component={Loadup} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Meals" component={Meal} />
            <Stack.Screen name="BottomTab" component={BottomNav} />
          </Stack.Navigator>
        </QueryClientProvider>
      </NavigationContainer>
    </>
  );
}
