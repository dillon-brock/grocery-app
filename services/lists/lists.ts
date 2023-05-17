import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../constants";
import { responseWithSuccessStatus } from "../../utils";
import { AllListsResponse, ListResponse, GetListResponse, ListUpdateData } from "./types";
import { DatabaseErrorResponse } from "../../types/types";

export async function createList(title?: string): Promise<ListResponse | DatabaseErrorResponse> {
  const token = await AsyncStorage.getItem('@token');
  const response = await fetch(`${API_URL}/lists`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include',
    body: JSON.stringify({ title: title || null })
  });

  return responseWithSuccessStatus<ListResponse>(response);
}

export async function getLists(): Promise<AllListsResponse | DatabaseErrorResponse> {
  const token = await AsyncStorage.getItem('@token');
  const response = await fetch(`${API_URL}/lists`, {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include'
  });

  return responseWithSuccessStatus<AllListsResponse>(response);
}

export async function getListById(id: string): Promise<GetListResponse | DatabaseErrorResponse> {
  const token = await AsyncStorage.getItem('@token');
  const response = await fetch(`${API_URL}/lists/${id}`, {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include'
  });

  return await responseWithSuccessStatus<GetListResponse>(response);
}

export async function updateList(id: string, data: ListUpdateData): Promise<ListResponse | DatabaseErrorResponse> {
  const token = await AsyncStorage.getItem('@token');
  const response = await fetch(`${API_URL}/lists/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include',
    body: JSON.stringify(data)
  });

  return responseWithSuccessStatus<ListResponse>(response);
}