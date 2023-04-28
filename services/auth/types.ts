import { User } from "../../types/types";

export type SuccessfulSignUpResponse = {
  message: 'Signed up and logged in successfully';
  token: string;
  user: User;
  success: true;
}