import { StyleSheet, TextStyle, ViewStyle } from "react-native"

type UserSearchResultsListStyle = {
  content: ViewStyle;
  messageContainer: ViewStyle
  message: TextStyle;
  listContainer: ViewStyle;
}

export default StyleSheet.create<UserSearchResultsListStyle>({
  content: {
    alignContent: 'center',
    marginTop: 20
  },
  messageContainer: {
    marginTop: 40
  },
  message: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Avenir-Oblique',
    color: 'gray'
  },
  listContainer: {
  }
})