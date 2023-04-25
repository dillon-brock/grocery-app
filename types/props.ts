import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

export type AuthEntryProps = NativeStackScreenProps<RootStackParamList, "Entry">
export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>

export type AuthFormProps = {
  method: string
}
