import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecipeStackParamList } from "../types/types";
import AllRecipesScreen from "../screens/AllRecipesScreen/AllRecipesScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen/RecipeDetailScreen";

const Stack = createNativeStackNavigator<RecipeStackParamList>();

export default function RecipeStack() {

  return (
    <Stack.Navigator
      initialRouteName="Recipes"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Recipes" component={AllRecipesScreen} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
    </Stack.Navigator>
  )
}