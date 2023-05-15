import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { RecipeStep, RecipeWithDetail } from "../services/recipes/types";
import { getRecipeById } from "../services/recipes/reicpes";
import { useIsFocused } from "@react-navigation/native";
import { Ingredient } from "../services/ingredients/types";

const defaultRecipe: RecipeWithDetail = {
  id: '',
  ownerId: '',
  name: '',
  description: null,
  createdAt: '',
  updatedAt: '',
  steps: [],
  ingredients: []
}

type RecipeHookData = {
  recipe: RecipeWithDetail;
  setRecipe: Dispatch<SetStateAction<RecipeWithDetail>>;
  loading: boolean;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
  ingredients: Ingredient[];
  steps: RecipeStep[];
  setIngredients: Dispatch<SetStateAction<Ingredient[]>>;
  setSteps: Dispatch<SetStateAction<RecipeStep[]>>;
}

export function useRecipe(id: string): RecipeHookData {

  const isFocused = useIsFocused();
  const [recipe, setRecipe] = useState<RecipeWithDetail>(defaultRecipe);
  const [ingredients, setIngredients] = useState<Ingredient[]>(defaultRecipe.ingredients);
  const [steps, setSteps] = useState<RecipeStep[]>(defaultRecipe.steps);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchRecipe = async (): Promise<void> => {
      try {
        const recipeRes = await getRecipeById(id);
        if (recipeRes.success) {
          setRecipe(recipeRes.recipe);
          setIngredients(recipeRes.recipe.ingredients);
          setSteps(recipeRes.recipe.steps);
        }
        else setError(recipeRes.message);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
    fetchRecipe();
  }, [id, isFocused]);

  return { 
    recipe, setRecipe,
    error, setError,
    ingredients, setIngredients,
    steps, setSteps,
    loading
  };
}