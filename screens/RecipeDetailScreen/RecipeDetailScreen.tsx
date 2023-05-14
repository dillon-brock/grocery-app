import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RecipeStackParamList } from "../../types/types";
import { useRecipe } from "../../hooks/useRecipe";
import NewItemInput from "../../components/NewItemInput/NewItemInput";
import { addIngredient } from "../../services/ingredients/ingredients";
import Ingredient from "../../components/Ingredient/Ingredient";
import LockButton from "../../components/LockButton/LockButton";
import EditableListItem from "../../components/EditableListItem/EditableListItem";

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
            <View>
              <Text>Ingredients</Text>
              {recipe.ingredients.map(ingredient => {
                if (locked) {
                  return <Ingredient
                    name={ingredient.name}
                    amount={ingredient.amount} />
                }
                else return (
                  <EditableListItem 
                    id={ingredient.id} 
                    quantity={ingredient.amount}
                    item={ingredient.name}
                    handleUpdateItem={async () => {null}}
                    handleUpdateQuantity={async () => {null}} />
                )
              })}
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