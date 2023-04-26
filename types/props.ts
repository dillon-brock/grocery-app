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