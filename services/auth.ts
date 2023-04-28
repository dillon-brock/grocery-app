import { UserSignUpData } from "../types/userService";

export async function signUp({ email, password, username }: UserSignUpData) {
  const response = await fetch(`${process.env.API_URL}/users`, {
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

  return await response.json();
}
