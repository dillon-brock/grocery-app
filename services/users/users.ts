import AsyncStorage from "@react-native-async-storage/async-storage";
import { DatabaseErrorResponse } from "../../types/types";
import { PublicUserRes, PublicUsersRes } from "./types";
import { API_URL } from "../constants";
import { responseWithSuccessStatus } from "../../utils";

export async function searchUsers(username: string): Promise<PublicUsersRes | DatabaseErrorResponse> {
  const token = await AsyncStorage.getItem('@token');

  const response = await fetch(`${API_URL}/users?username=${username}`, {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include'
  });

  return await responseWithSuccessStatus<PublicUsersRes>(response);
}

export async function checkForUsername(username: string): Promise<PublicUserRes | DatabaseErrorResponse> {
  const response = await fetch(`${API_URL}/users/find?username=${username}`, {
    headers: {
      'Accept': 'application/json'
    }
  });

  return await responseWithSuccessStatus<PublicUserRes>(response);
}