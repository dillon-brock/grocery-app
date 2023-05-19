import { StyleSheet, TextStyle, ViewStyle } from "react-native"

type TitleStyles = {
  container: ViewStyle;
  title: TextStyle;
}

export default StyleSheet.create<TitleStyles>({
  container: {
    alignItems: 'center',
    height: 60,
    width: '100%'
  },
  title: {
    fontSize: 25,
    fontFamily: 'Avenir-Oblique',
    fontWeight: '600',
  }
});