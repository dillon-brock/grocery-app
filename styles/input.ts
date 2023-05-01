import { StyleSheet } from "react-native";
import { InputStyle } from "../types/styles";

export default StyleSheet.create<InputStyle>({
  input: {
    height: 40,
    width: 240,
    margin: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10
  }
})