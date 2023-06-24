import AsyncStorage from "@react-native-async-storage/async-storage";
import { DatabaseErrorResponse } from "../../types/types";
import { API_URL } from "../constants";
import { responseWithSuccessStatus } from "../../utils";
import { MealPlanWithRecipesResponse } from "./types";

export async function getMealPlanByDate(date: string): Promise<MealPlanWithRecipesResponse | DatabaseErrorResponse> {
  const token = await AsyncStorage.getItem('@token');
  const response = await fetch(`${API_URL}/meal-plans/${date}`, {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include'
  });

  return responseWithSuccessStatus<MealPlanWithRecipesResponse>(response);
}