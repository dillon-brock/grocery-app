import React, { Dispatch, SetStateAction } from "react";
import { View } from "react-native";
import { RecipeWithDetail } from "../../services/recipes/types";

type Props = {
  id: string;
  recipeId: string;
  name: string;
  amount: string | null;
  setRecipe: Dispatch<SetStateAction<RecipeWithDetail>>;
}

export default function Ingredient({ id, recipeId, name, amount, setRecipe }: Props) {

  return (
    <View>
      
    </View>
  )
}