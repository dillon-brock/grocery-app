import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../constants';
import { responseWithSuccessStatus } from '../../utils';
import { MultipleRecipeResponse, NewRecipeData, RecipeResponse, RecipeWithDetailResponse } from './types';
import { DatabaseErrorResponse } from '../../types/types';

export async function getOwnedRecipes(): Promise<MultipleRecipeResponse | DatabaseErrorResponse> {
  const token = await AsyncStorage.getItem('@token');

  const response = await fetch(`${API_URL}/recipes`, {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include'
  });

  return await responseWithSuccessStatus<MultipleRecipeResponse>(response);
}

export async function createRecipe(data: NewRecipeData): Promise<RecipeResponse | DatabaseErrorResponse> {
  const token = await AsyncStorage.getItem('@token');

  const response = await fetch(`${API_URL}/recipes`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include',
    body: JSON.stringify(data)
  });

  return await responseWithSuccessStatus<RecipeResponse>(response);
}

export async function getRecipeById(id: string): Promise<RecipeWithDetailResponse | DatabaseErrorResponse> {
  const token = await AsyncStorage.getItem('@token');

  const response = await fetch(`${API_URL}/recipes/${id}`, {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include'
  });

  return responseWithSuccessStatus<RecipeWithDetailResponse>(response);
}