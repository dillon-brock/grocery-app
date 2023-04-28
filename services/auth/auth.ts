import { DatabaseErrorResponse } from "../../types/types";
import { UserSignUpData } from "../../types/userService";
import { SuccessfulSignUpResponse } from "./types";
const API_URL = 'http://localhost:7890';

export async function signUp({ email, password, username }: UserSignUpData): Promise<SuccessfulSignUpResponse | DatabaseErrorResponse> {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
      username
    }),
  });

  const jsonRes = await response.json();
  jsonRes.success = jsonRes.message == 'Signed up and logged in successfully';
  return jsonRes;
}
