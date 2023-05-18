import { StyleSheet, TextStyle, ViewStyle } from "react-native";

type UserSearchInputStyle = {
  container: ViewStyle;
  inputView: ViewStyle;
  inputText: TextStyle;
}

export default StyleSheet.create<UserSearchInputStyle>({
  container: {
    flexDirection: 'row',
    paddingLeft: 5,
    gap: 5
  },
  inputView: {
    borderWidth: 0
  },
  inputText: {}
})