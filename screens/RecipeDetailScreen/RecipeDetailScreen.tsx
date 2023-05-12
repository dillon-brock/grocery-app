import React from "react";
import { Keyboard, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RecipeStackParamList } from "../../types/types";
import { useRecipe } from "../../hooks/useRecipe";

export default function RecipeDetailScreen() {

  const { recipeId } = useRoute<RouteProp<RecipeStackParamList, 'RecipeDetail'>>().params;
  const { recipe, loading } = useRecipe(recipeId);

  return (
    <View>
      <Header showBackButton showMenuButton />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {loading && <Text>Loading...</Text>}
        {!loading &&
          <View>
            <Text>{recipe.name}</Text>
            <View>
              <Text>Ingredients</Text>
              {recipe.ingredients.map(ingredients => (
                <Text>{ingredients.name}</Text>
              ))}
            </View>
            <View>
              <Text>Steps</Text>
              {recipe.steps
                .sort((a, b) => a.num - b.num)
                .map(step => (
                <Text>{step.detail}</Text>
              ))}
            </View>
          </View>
        }
      </TouchableWithoutFeedback>
    </View>
  );
}