import AsyncStorage from "@react-native-async-storage/async-storage";
import { DatabaseErrorResponse } from "../../types/types";
import { ListItemResponse, NewListItemData, UpdateListItemData } from "./types";
import { API_URL } from "../constants";
import { responseWithSuccessStatus } from "../../utils";

export async function addItemToList({ listId, item, quantity, categoryId }: NewListItemData): Promise<ListItemResponse | DatabaseErrorResponse> {
  const token = await AsyncStorage.getItem('@token');
  const response = await fetch(`${API_URL}/list-items`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include',
    body: JSON.stringify({
      listId,
      item,
      quantity,
      categoryId
    })
  });

  return responseWithSuccessStatus<ListItemResponse>(response);
}

export async function deleteItem(id: string): Promise<ListItemResponse | DatabaseErrorResponse> {
  const token = await AsyncStorage.getItem('@token');
  const response = await fetch(`${API_URL}/list-items/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include'
  });

  return responseWithSuccessStatus<ListItemResponse>(response);
}

export async function updateItem(id: string, updateData: UpdateListItemData): Promise<ListItemResponse | DatabaseErrorResponse> {
  const token = await AsyncStorage.getItem('@token');
  const response = await fetch(`${API_URL}/list-items/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include',
    body: JSON.stringify(updateData)
  });

  return responseWithSuccessStatus<ListItemResponse>(response);
}