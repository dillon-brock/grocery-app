import React from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RecipeStackParamList } from "../../types/types";
import { useRecipe } from "../../hooks/useRecipe";
import NewItemInput from "../../components/NewItemInput/NewItemInput";
import { addIngredient } from "../../services/ingredients/ingredients";

export default function RecipeDetailScreen() {

  const { recipeId } = useRoute<RouteProp<RecipeStackParamList, 'RecipeDetail'>>().params;
  const { recipe, setRecipe, loading } = useRecipe(recipeId);

  const handleAddIngredient = async (name: string, amount: string): Promise<void> => {
    const newIngredientRes = await addIngredient(recipeId, { name, amount });
    if (newIngredientRes.success) {
      setRecipe(prev => ({
        ...prev,
        ingredients: [
          ...prev.ingredients,
          newIngredientRes.ingredient
        ]
      }));
    }
  }

  return (
    <View>
      <Header showBackButton showMenuButton />
      <ScrollView keyboardShouldPersistTaps='handled'>
        {loading && <Text>Loading...</Text>}
        {!loading &&
          <View>
            <Text>{recipe.name}</Text>
            <View>
              <Text>Ingredients</Text>
              {recipe.ingredients.map(ingredients => (
                <Text>{ingredients.name}</Text>
              ))}
              <NewItemInput handleAdd={handleAddIngredient} />
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
      </ScrollView>
    </View>
  );
}