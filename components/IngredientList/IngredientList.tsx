import React, { Dispatch, SetStateAction, useState } from "react";
import { Text, View } from "react-native";
import { Ingredient } from "../../services/ingredients/types"
import IngredientDisplay from "../IngredientDisplay/IngredientDisplay";
import NewItemInput from "../NewItemInput/NewItemInput";
import EditableListItem from "../EditableListItem/EditableListItem";
import { updateIngredient } from "../../services/ingredients/ingredients";
import { RecipeWithDetail } from "../../services/recipes/types";

type Props = {
  ingredients: Ingredient[];
  locked: boolean;
  handleAddIngredient: (name: string, amount: string) => Promise<void>;
  setRecipe: Dispatch<SetStateAction<RecipeWithDetail>>;
}

export default function IngredientList({ ingredients, locked, handleAddIngredient, setRecipe }: Props) {

  const [error, setError] = useState<string>('');

  const handleUpdateAmount = async (id: string, amount: string): Promise<void> => {
    const res = await updateIngredient(id, { amount });
    if (res.success) {
      setRecipe(prev => {
        return {
          ...prev,
          ingredients: [
            ...prev.ingredients.filter(ingredient => ingredient.id != id),
            res.ingredient
          ]
        }
      });
    }
    else {
      setError(res.message);
    }
  }

  const handleUpdateName = async (id: string, name: string): Promise<void> => {
    const res = await updateIngredient(id, { name });
    if (res.success) {
      setRecipe(prev => {
        return {
          ...prev,
          ingredients: [
            ...prev.ingredients.filter(ingredient => ingredient.id != id),
            res.ingredient
          ]
        }
      })
    }
    else {
      setError(res.message);
    }
  }

  return (
    <View>
      <Text>Ingredients</Text>
      {error &&
        <Text>{error}</Text>
      }
      {ingredients.map(ingredient => {
        if (locked) {
          return <IngredientDisplay
            name={ingredient.name}
            amount={ingredient.amount}
            key={ingredient.id} />
        }
        else return (
          <EditableListItem 
            key={ingredient.id}
            id={ingredient.id} 
            quantity={ingredient.amount}
            item={ingredient.name}
            handleUpdateItem={handleUpdateName}
            handleUpdateQuantity={handleUpdateAmount} />
        )
      })}
      <NewItemInput handleAdd={handleAddIngredient} />
    </View>
  )
}