import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../constants';
import { responseWithSuccessStatus } from '../../utils';
import { MultipleRecipeResponse } from './types';
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

  return responseWithSuccessStatus<MultipleRecipeResponse>(response);
}