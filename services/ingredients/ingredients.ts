import AsyncStorage from "@react-native-async-storage/async-storage";
import { DatabaseErrorResponse } from "../../types/types";
import { IngredientResponse, IngredientUpdateData, NewIngredientData } from "./types";
import { API_URL } from "../constants";
import { responseWithSuccessStatus } from "../../utils";

export async function addIngredient(recipeId: string, data: NewIngredientData): Promise<IngredientResponse | DatabaseErrorResponse> {
  const token = await AsyncStorage.getItem('@token');

  const response = await fetch(`${API_URL}/ingredients?recipeId=${recipeId}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include',
    body: JSON.stringify(data)
  });

  return await responseWithSuccessStatus<IngredientResponse>(response);
}

export async function updateIngredient(id: string, data: IngredientUpdateData): Promise<IngredientResponse | DatabaseErrorResponse> {
  const token = await AsyncStorage.getItem('@token');

  const response = await fetch(`${API_URL}/ingredients/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include',
    body: JSON.stringify(data)
  });

  return await responseWithSuccessStatus<IngredientResponse>(response);
}