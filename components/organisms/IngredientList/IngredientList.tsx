import React, { Dispatch, Reducer, SetStateAction, useReducer, useState } from "react";
import { Text, View } from "react-native";
import { Ingredient } from "../../../services/ingredients/types"
import IngredientDisplay from "../../molecules/IngredientDisplay/IngredientDisplay";
import NewItemInput from "../../molecules/NewItemInput/NewItemInput";
import EditableListItem from "../../molecules/EditableListItem/EditableListItem";
import { addIngredient, deleteIngredient, updateIngredient } from "../../../services/ingredients/ingredients";
import ingredientsReducer, { IngredientsAction } from "../../../reducers/ingredients";

type Props = {
  initialIngredients: Ingredient[];
  setIngredients: Dispatch<SetStateAction<Ingredient[]>>;
  locked: boolean;
  recipeId: string;
}

export default function IngredientList({ initialIngredients, locked, setIngredients, recipeId }: Props) {

  const [error, setError] = useState<string>('');
  const [ingredients, dispatch] = useReducer<Reducer<Ingredient[], IngredientsAction>>(ingredientsReducer, initialIngredients);

  const handleUpdateAmount = async (id: string, amount: string): Promise<void> => {
    const res = await updateIngredient(id, { amount });
    if (res.success) {
      setIngredients(prev => [
        ...prev.filter(ingredient => ingredient.id != id),
        res.ingredient
      ])
    }
    else {
      setError(res.message);
    }
  }

  const handleUpdateName = async (id: string, name: string): Promise<void> => {
    const res = await updateIngredient(id, { name });
    if (res.success) {
      setIngredients(prev => [
        ...prev.filter(ingredient => ingredient.id != id),
        res.ingredient
      ])
    }
    else {
      setError(res.message);
    }
  }

  const handleDeleteIngredient = async (id: string): Promise<void> => {
    const res = await deleteIngredient(id);
    if (res.success) {
      setIngredients(prev => (
        prev.filter(ingredient => ingredient.id != id)
      ));
    }
    else {
      setError(res.message);
    }
  }

  const handleAddIngredient = async (name: string, amount: string): Promise<void> => {
    const res = await addIngredient(recipeId, { name, amount });
    if (res.success) {
      setIngredients(prev => [ ...prev, res.ingredient ]);
    }
  }

  return (
    <View>
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
            handleUpdateQuantity={handleUpdateAmount}
            handleDeleteItem={handleDeleteIngredient} />
        )
      })}
      {!locked &&
        <NewItemInput handleAdd={handleAddIngredient} />
      }
    </View>
  )
}