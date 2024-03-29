import { Dispatch, SetStateAction } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData, TextInputProps, TextStyle, ViewStyle } from "react-native";

export type AuthFormProps = {
  method: string
}

export type PrimaryButtonProps = {
  text: string;
  handlePress?: () => void;
}

export interface InputProps extends TextInputProps {
  type: string;
  placeholder?: string;
  value?: string;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onBlur?: () => void;
  style?: ViewStyle | TextStyle;
  isValid?: boolean;
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