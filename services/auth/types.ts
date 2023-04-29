import { User } from "../../context/UserContext";
import { SuccessfulResponse } from "../../types/types";

export interface UserAuthData {
  email: string;
  password: string;
}

export interface TokenResponse extends SuccessfulResponse {
  token: string;
}

export interface UserSignUpData extends UserAuthData {
  username: string;
}

export interface UserResponse extends SuccessfulResponse {
  user: User | null;
}