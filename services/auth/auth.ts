import { DatabaseErrorResponse } from "../../types/types";
import { TokenResponse, UserAuthData, UserResponse, UserSignUpData } from "./types";
import { responseWithSuccessStatus } from "../../utils";
import { API_URL } from "../constants";

export async function signUp({ email, password, username }: UserSignUpData): Promise<TokenResponse | DatabaseErrorResponse> {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      email,
      password,
      username
    }),
  });

  return responseWithSuccessStatus<TokenResponse>(response);
}

export async function signIn({ email, password }: UserAuthData): Promise<TokenResponse | DatabaseErrorResponse> {
  const response = await fetch(`${API_URL}/users/sessions`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      email,
      password
    })
  });

  return responseWithSuccessStatus<TokenResponse>(response);
}

export async function getUser(token: string): Promise<UserResponse | DatabaseErrorResponse> {
  const response = await fetch(`${API_URL}/users/me`, {
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include'
  });

  return responseWithSuccessStatus<UserResponse>(response);
}


