import { Dispatch, SetStateAction } from "react";
import { TextInputProps } from "react-native";

export type AuthFormProps = {
  method: string
}

export type PrimaryButtonProps = {
  text: string;
  handlePress?: () => void;
}

export interface InputProps extends TextInputProps {
  type: string;
}

export type SignUpFormProps = {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  passwordConfirmation: string;
  setPasswordConfirmation: Dispatch<SetStateAction<string>>;
}

export type SignInFormProps = {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}