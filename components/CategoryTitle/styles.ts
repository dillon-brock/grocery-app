import { StyleSheet, TextStyle, ViewStyle } from "react-native";

type CategoryTitleStyle = {
  textContainer: ViewStyle;
  title: TextStyle;
  outerContainer: ViewStyle;
}

export default StyleSheet.create<CategoryTitleStyle>({
  outerContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    width: '100%',
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderTopColor: 'black',
    borderBottomColor: 'black',
    paddingLeft: 15,
  },
  title: {
    fontFamily: 'AvenirNextCondensed-Bold',
    fontSize: 30,
    textAlign: 'left'
  }
})