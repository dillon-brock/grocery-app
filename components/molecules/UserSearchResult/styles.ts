import { StyleSheet, TextStyle, ViewStyle } from "react-native"

type UserSearchResultStyle = {
  container: ViewStyle;
  text: TextStyle;
}

export default StyleSheet.create<UserSearchResultStyle>({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 5,
    paddingTop: 5
  },
  text: {}
})