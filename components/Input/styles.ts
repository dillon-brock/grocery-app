import { StyleSheet, ViewStyle } from "react-native";

type InputStyle = {
  input: ViewStyle;
}

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