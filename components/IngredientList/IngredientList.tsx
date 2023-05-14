import React from "react";
import { Text, View } from "react-native";
import { Ingredient } from "../../services/ingredients/types"
import IngredientDisplay from "../IngredientDisplay/IngredientDisplay";
import NewItemInput from "../NewItemInput/NewItemInput";
import EditableListItem from "../EditableListItem/EditableListItem";

type Props = {
  ingredients: Ingredient[];
  locked: boolean;
  handleAddIngredient: (name: string, amount: string) => Promise<void>;
}

export default function IngredientList({ ingredients, locked, handleAddIngredient }: Props) {

  return (
    <View>
      <Text>Ingredients</Text>
      {ingredients.map(ingredient => {
        if (locked) {
          return <IngredientDisplay
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
  )
}