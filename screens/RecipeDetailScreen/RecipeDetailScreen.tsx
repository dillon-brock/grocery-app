import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RecipeStackParamList } from "../../types/types";
import { useRecipe } from "../../hooks/useRecipe";
import { addIngredient } from "../../services/ingredients/ingredients";
import LockButton from "../../components/LockButton/LockButton";
import IngredientList from "../../components/IngredientList/IngredientList";

export default function RecipeDetailScreen() {

  const { recipeId } = useRoute<RouteProp<RecipeStackParamList, 'RecipeDetail'>>().params;
  const { recipe, setRecipe, loading } = useRecipe(recipeId);
  const [locked, setLocked] = useState<boolean>(true);

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
      <LockButton locked={locked} setLocked={setLocked} />
      <ScrollView keyboardShouldPersistTaps='handled'>
        {loading && <Text>Loading...</Text>}
        {!loading &&
          <View>
            <Text>{recipe.name}</Text>
            <IngredientList
              ingredients={recipe.ingredients}
              locked={locked}
              handleAddIngredient={handleAddIngredient} />
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