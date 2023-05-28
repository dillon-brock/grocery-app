import { StyleSheet, TextStyle, ViewStyle } from "react-native"

type ErrorTextStyle = {
  text: TextStyle;
  container: ViewStyle;
}

export default StyleSheet.create<ErrorTextStyle>({
  text: {
    color: 'red',
    fontFamily: 'PingFangHK-Medium'
  },
  container: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 8,
    paddingRight: 8
  }
})