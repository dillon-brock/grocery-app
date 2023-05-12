import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { RecipeWithDetail } from "../services/recipes/types";
import { getRecipeById } from "../services/recipes/reicpes";
import { useIsFocused } from "@react-navigation/native";

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
}

export function useRecipe(id: string): RecipeHookData {

  const isFocused = useIsFocused();
  const [recipe, setRecipe] = useState<RecipeWithDetail>(defaultRecipe);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchRecipe = async (): Promise<void> => {
      try {
        const recipeRes = await getRecipeById(id);
        if (recipeRes.success) {
          setRecipe(recipeRes.recipe);
        }
        else setError(recipeRes.message);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
    fetchRecipe();
  }, [id, isFocused]);

  return { recipe, setRecipe, loading, error, setError };
}