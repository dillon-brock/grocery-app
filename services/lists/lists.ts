import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../vars";
import { responseWithSuccessStatus } from "../../utils";
import { CreateListResponse } from "./types";
import { DatabaseErrorResponse } from "../../types/types";

export async function createList(title: string | null): Promise<CreateListResponse | DatabaseErrorResponse> {
  const token = await AsyncStorage.getItem('@token');
  const response = await fetch(`${API_URL}/lists`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include',
    body: JSON.stringify({ title })
  });

  return responseWithSuccessStatus(response);
}