import { StyleSheet, TextStyle, ViewStyle } from "react-native";

type CategoryTitleStyle = {
  textContainer: ViewStyle;
  title: TextStyle;
  outerContainer: ViewStyle;
}

export default StyleSheet.create<CategoryTitleStyle>({
  outerContainer: {
    justifyContent: 'center',

  },
  textContainer: {
    paddingLeft: 15,
  },
  title: {
    fontFamily: 'AvenirNextCondensed-Bold',
    fontSize: 28,
    textAlign: 'left'
  }
})