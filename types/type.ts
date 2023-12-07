export type Color = {
  primary: string;
  pepper: string;
  salt: string;
  secondary: string;
  mint: string;
  placeholder: string;
};

export type DateTime = {
  time: string;
  date: string;
  hours: number;
};

export interface CategoryType {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export type MealType = {
  _id: string;
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: string;
  price: string;
  ingredients: [string];
  steps: [string];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
  category: [string];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type RestaurantType = {
  _id: string;
  name: string;
  imageUrl: string;
  location: string;
  meals: [string];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type RootStackParamList = {
  Splash: undefined;
  Loadup: undefined;
  Detail: { mealId: string };
  Meals: { catId: string };
  BottomTab: undefined;
};
