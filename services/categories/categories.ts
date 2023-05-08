import AsyncStorage from "@react-native-async-storage/async-storage";
import { DatabaseErrorResponse } from "../../types/types";
import { CategoryResponse, NewCategoryData, UpdateCategoryData } from "./types";
import { API_URL } from "../constants";
import { responseWithSuccessStatus } from "../../utils";

export async function addCategory(data: NewCategoryData): Promise<CategoryResponse | DatabaseErrorResponse> {
  const token = await AsyncStorage.getItem('@token');

  const response = await fetch(`${API_URL}/categories`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include',
    body: JSON.stringify(data)
  });

  return await responseWithSuccessStatus<CategoryResponse>(response);
}

export async function updateCategory({ id, name }: UpdateCategoryData): Promise<CategoryResponse | DatabaseErrorResponse> {
  const token = await AsyncStorage.getItem('@token');

  const response = await fetch(`${API_URL}/categories/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include',
    body: JSON.stringify({ name })
  });

  return await responseWithSuccessStatus<CategoryResponse>(response);
}