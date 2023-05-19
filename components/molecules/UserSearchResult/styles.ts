import { StyleSheet, TextStyle, ViewStyle } from "react-native"

type UserSearchResultStyle = {
  container: ViewStyle;
  text: TextStyle;
}

export default StyleSheet.create<UserSearchResultStyle>({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
    paddingTop: 5
  },
  text: {
    fontSize: 18
  }
})