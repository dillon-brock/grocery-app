import { GestureResponderEvent } from "react-native";

export type AuthFormProps = {
  method: string
}

export type PrimaryButtonProps = {
  text: string;
  handlePress?: () => void;
}
