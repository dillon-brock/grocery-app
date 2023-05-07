import AsyncStorage from "@react-native-async-storage/async-storage";
import { DatabaseErrorResponse } from "../../types/types";
import { CreateCategoryResponse } from "./types";
import { API_URL } from "../constants";
import { responseWithSuccessStatus } from "../../utils";

export async function addCategory(name: string): Promise<CreateCategoryResponse | DatabaseErrorResponse> {
  const token = await AsyncStorage.getItem('@token');

  const response = await fetch(`${API_URL}/categories`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include',
    body: JSON.stringify({ name })
  });

  return responseWithSuccessStatus<CreateCategoryResponse>(response);
}