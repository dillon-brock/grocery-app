import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

export type NavProps = NativeStackScreenProps<RootStackParamList, "Entry">

export type AuthFormProps = {
  method: string
}
