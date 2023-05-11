import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { GetRecipesResponse, Recipe } from '../services/recipes/types';
import { DatabaseErrorResponse } from '../types/types';
import { getOwnedRecipes } from '../services/recipes/reicpes';

export function useOwnedRecipes() {

  const isFocused: boolean = useIsFocused();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const recipesData: GetRecipesResponse | DatabaseErrorResponse = await getOwnedRecipes();
        if (recipesData.success) {
          setRecipes(recipesData.recipes);
        }
        else {
          setErrorMessage(`ERR CODE ${recipesData.status}: ${recipesData.message}`)
        }
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.error(e);
      }
    };
    fetchRecipes();
  }, [isFocused]);

  return { recipes, loading, errorMessage, setErrorMessage };
}