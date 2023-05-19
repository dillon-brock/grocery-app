import { StyleSheet, TextStyle, ViewStyle } from "react-native";

type UserSearchInputStyle = {
  container: ViewStyle;
  inputView: ViewStyle;
  inputText: TextStyle;
}

export default StyleSheet.create<UserSearchInputStyle>({
  container: {
    flexDirection: 'row',
    marginLeft: 16,
    gap: 12
  },
  inputView: {
    borderWidth: 0
  },
  inputText: {
    fontSize: 18,
    fontStyle: 'italic'
  }
})