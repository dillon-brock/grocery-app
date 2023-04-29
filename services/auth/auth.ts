import { DatabaseErrorResponse } from "../../types/types";
import { SuccessfulResponse, UserAuthData, UserResponse, UserSignUpData } from "./types";
import { responseWithSuccessStatus } from "../../utils";
const API_URL = 'http://localhost:7890';

export async function signUp({ email, password, username }: UserSignUpData): Promise<SuccessfulResponse | DatabaseErrorResponse> {
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

  return responseWithSuccessStatus(response);
}

export async function signIn({ email, password }: UserAuthData): Promise<SuccessfulResponse | DatabaseErrorResponse> {
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

  return responseWithSuccessStatus(response);
}

export async function getUser(): Promise<UserResponse | DatabaseErrorResponse> {
  const response = await fetch(`${API_URL}/users/me`, {
    headers: {
      'Content-type': 'application/json'
    },
    credentials: 'include'
  });

  return responseWithSuccessStatus(response);
}
