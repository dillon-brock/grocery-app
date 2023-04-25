import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Entry: undefined;
  Login: undefined;
  SignUp: undefined;
};

export type EntryScreenProps = NativeStackScreenProps<RootStackParamList, "Entry">

export type AuthFormProps = {
  method: string
}
