import AsyncStorage from "@react-native-async-storage/async-storage";
import { DatabaseErrorResponse } from "../../types/types";
import { NewStepData, StepResponse } from "./types";
import { API_URL } from "../constants";
import { responseWithSuccessStatus } from "../../utils";

export async function addStep(recipeId: string, data: NewStepData): Promise<StepResponse | DatabaseErrorResponse> {
  const token = AsyncStorage.getItem('@token');

  const response = await fetch(`${API_URL}/recipe-steps?recipeId=${recipeId}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include',
    body: JSON.stringify(data)
  });

  return await responseWithSuccessStatus<StepResponse>(response);
}
